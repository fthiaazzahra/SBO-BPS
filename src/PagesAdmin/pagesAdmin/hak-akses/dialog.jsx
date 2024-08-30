/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { Button } from "primereact/button";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { Toast } from "primereact/toast";

export default function DialogForm() {
  const [nip, setNip] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmasi_password, setConfirmasiPassword] = useState("");
  const toast = useRef(null);

  const showToast = (severity, summary, detail) => {
    toast.current.show({ severity, summary, detail });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nip || !role || !password || !confirmasi_password) {
      alert("Please fill in all fields");
      return;
    }
    try {
      await axios.post("https://aang.umkmpalangan.my.id/createAuth", {
        nip: nip,
        role: role,
        password: password,
        confirmasi_password: confirmasi_password,
      });
      showToast("success", "Added", "Data successfully added");
      document.getElementById("my_modal_1").close();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="card flex justify-content-center">
      <Toast ref={toast} />
      <Button
        onClick={() => document.getElementById("my_modal_1").showModal()}
        className="flex items-center gap-3 p-2 bg-green-500 text-white rounded-md"
      >
        <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add
      </Button>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_1" className="modal rounded-sm">
        <div className="modal-box">
          <h3 className="font-bold w-full text-center text-2xl">
            Tambah Hak Akses
          </h3>
          <form action="#" className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm ml-2 my-2 block" htmlFor="nip">
                  NIP
                </label>
                <input
                  value={nip}
                  onChange={(e) => setNip(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Your NIP"
                  type="number"
                  id="nip"
                />
              </div>

              <div>
                <label className="text-sm ml-2 my-2 block" htmlFor="password">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Your password"
                  type="password"
                  id="password"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm ml-2 my-2 block" htmlFor="password">
                  Confirmasi Password
                </label>
                <input
                  value={confirmasi_password}
                  onChange={(e) => setConfirmasiPassword(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="password"
                  type="password"
                  id="password"
                />
              </div>
              <div>
                <label className="text-sm ml-2 my-2 block" htmlFor="golongan">
                  Role
                </label>
                <input
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Golongan"
                  type="text"
                  id="golongan"
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
    </div>
  );
}
