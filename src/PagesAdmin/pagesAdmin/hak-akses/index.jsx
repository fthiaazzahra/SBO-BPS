import { IconButton, Input, Typography } from "@material-tailwind/react";
import Layout from "../../Layout/Index";

import { MagnifyingGlassIcon, PencilIcon } from "@heroicons/react/24/solid";

import DialogForm from "./dialog";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Toast } from "primereact/toast";

const HakAksesPage = () => {
  const [nip, setNip] = useState("");
  const [password, setpassword] = useState("");
  const [confirmasi_password, setconfirmasi_password] = useState("");
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State untuk menyimpan kata kunci pencarian
  const [filteredData, setFilteredData] = useState([]); // State untuk menyimpan data yang difilter berdasarkan pencarian
  console.log(data);

  const toast = useRef(null);

  const showToast = (severity, summary, detail) => {
    toast.current.show({ severity, summary, detail });
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://aang.umkmpalangan.my.id/read-authentication",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      setData(response.data);
      setFilteredData(response.data); // Set data yang difilter sama dengan data awal
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  // Logika pencarian
  useEffect(() => {
    const result = data.filter(
      (item) =>
        item.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.nip.toString().includes(searchTerm)
    );
    setFilteredData(result); // Update data yang difilter berdasarkan pencarian
  }, [searchTerm, data]);

  const handleDelete = async (nip) => {
    try {
      await axios.delete(
        `https://aang.umkmpalangan.my.id/deletePegawai/${nip}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      showToast("success", "Delete", "Data deleted successfully");
      document.getElementById("my_modal_2").close();
      setData(data.filter((item) => item.nip !== nip)); // Update data setelah penghapusan
    } catch (error) {
      showToast("Error", "Field", "Data fieled to delete");
      document.getElementById("my_modal_2").close();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password || !confirmasi_password) {
      alert("Please fill in all fields");
      return;
    }
    try {
      await axios.put(
        `https://aang.umkmpalangan.my.id/updateAuth/${nip}`,
        {
          password: password,
          confirmasi_password: confirmasi_password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      showToast("success", "Update", "Data successfully updated");
      document.getElementById("my_modal_2").close();
      fetchData();
    } catch (error) {
      showToast("Error", "Field", "Data field to update");
      document.getElementById("my_modal_2").close();
    }
  };

  const onClickEdit = (nip) => {
    setNip(nip);
    console.log(nip);
    document.getElementById("my_modal_2").showModal();
  };

  return (
    <Layout>
      <Toast ref={toast} />
      <div
        id="scrollableElement"
        className=" px-4 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8 "
      >
        <div>
          <Typography variant="h5" color="blue-gray">
            Data Hak Akses
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            See information about all members
          </Typography>
        </div>
        <div className="flex shrink-0  gap-2 ">
          <div className="w-full md:w-72">
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
          <DialogForm />
        </div>
      </div>
      <div id="scrollableElement" className="h-[400px] top-0">
        <div className="p-4 pb-16">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    No
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    NIP
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Nama
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Password
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr
                    key={index}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">{item.nip}</td>
                    <td className="px-6 py-4">{item.nama}</td>
                    <td className="px-6 py-4">{item.confirmasi_password}</td>
                    <td className="px-6 py-4">{item.role}</td>
                    <td className="px-6 py-4 flex items-center">
                      <IconButton variant="text">
                        <PencilIcon
                          // onClick={() => onClickEdit(item.nip)}
                          onClick={() => onClickEdit(item.nip)}
                          className="h-4 w-4"
                        />
                      </IconButton>
                      <IconButton
                        variant="text"
                        onClick={() => handleDelete(item.nip)}
                      >
                        <svg
                          className="w-6 h-6 text-red-700 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                          />
                        </svg>
                      </IconButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <dialog id="my_modal_2" className="modal rounded-sm">
        <div className="modal-box">
          <h3 className="font-bold w-full text-center text-2xl">
            Tambah Hak Akses
          </h3>
          <form action="#" className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm ml-2 my-2 block" htmlFor="password">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Your password"
                  type="password"
                  id="password"
                />
              </div>
              <div>
                <label className="text-sm ml-2 my-2 block" htmlFor="password">
                  Confirmasi Password
                </label>
                <input
                  value={confirmasi_password}
                  onChange={(e) => setconfirmasi_password(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="password"
                  type="password"
                  id="password"
                />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-end gap-4">
              <button
                onClick={handleSubmit}
                type="submit"
                className="inline-block w-full rounded-lg bg-indigo-500 px-5 py-3 font-medium text-white sm:w-auto"
              >
                Simpan
              </button>

              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="px-5 py-3 bg-yellow-300 rounded-md">
                  Cancle
                </button>
              </form>
            </div>
          </form>
        </div>
      </dialog>
    </Layout>
  );
};

export default HakAksesPage;
