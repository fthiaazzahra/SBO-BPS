import { useState, useRef } from "react";
import { Button, Dialog, Input } from "@material-tailwind/react";
import { Toast } from "primereact/toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginUser = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(""); // Default to "Pegawai"
  const [open, setOpen] = useState(false);
  const [nip, setNip] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useRef(null);

  const handleOpen = () => setOpen(!open);

  const showSukses = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Login Berhasil",
    });
  };

  const showError = () => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: "Login Gagal",
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (nip === "" || password === "") {
      showError();
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "https://aang.umkmpalangan.my.id/login",
        {
          nip: nip,
          password: password,
          role: value, // Use the selected role
        }
      );

      if (response.status === 200) {
        // Simpan token dan data pengguna ke localStorage dengan expiry 12 jam
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.user.role);
        localStorage.setItem("name", response.data.user.nama);
        localStorage.setItem("nip", response.data.user.nip);

        if (response.data.user.role === "Admin") {
          navigate("/admin/home");
        } else if (response.data.user.role === "Pegawai") {
          window.location.reload();
          navigate("/");
        }

        showSukses();
        window.scrollTo(0, 0);
      }
    } catch (error) {
      showError();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        className="inline-flex items-center gap-2 rounded bg-white border border-indigo-600 px-8 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
      >
        <span className="text-sm font-medium"> Login </span>
        <svg
          className="size-5 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="flex items-center justify-center"
      >
        <Toast ref={toast} />
        <div className="flex flex-col w-full py-10 gap-4 p-6">
          <h4 className="text-2xl font-semibold text-center text-[#1a1a1a]">
            Login
          </h4>

          <div className="flex gap-4 mb-4">
            <Button
              onClick={() => setValue("Pegawai")}
              className={`flex-1 ${
                value === "Pegawai"
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-indigo-600"
              } border border-indigo-600`}
            >
              Pegawai
            </Button>
            <Button
              onClick={() => setValue("Admin")}
              className={`flex-1 ${
                value === "Admin"
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-indigo-600"
              } border border-indigo-600`}
            >
              Admin
            </Button>
          </div>

          <Input
            color="black"
            label="Your NIP"
            type="number"
            className="outline-none bg-white"
            value={nip}
            onChange={(e) => setNip(e.target.value)}
          />
          <Input
            color="black"
            label="Your Password"
            type="password"
            className="outline-none bg-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {loading ? (
            <button
              disabled
              type="button"
              className="text-white bg-green-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
            >
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 me-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Loading...
            </button>
          ) : (
            <Button className="bg-green-500" onClick={handleLogin}>
              Login
            </Button>
          )}
        </div>
      </Dialog>
    </div>
  );
};

export default LoginUser;
