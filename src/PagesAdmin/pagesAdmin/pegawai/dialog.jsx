import { useState } from "react";
import { Button } from "primereact/button";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import axios from "axios";

export default function DialogForm() {
  const [nama, setNama] = useState("");
  const [nip, setNip] = useState("");
  const [statJabatan, setStatJabatan] = useState("");
  const [golonganAkhir, setGolonganAkhir] = useState("");
  const [tmtGolongan, setTmtGolongan] = useState("");
  const [pendidikan, setPendidikan] = useState("");
  const [tglLulus, setTglLulus] = useState("");
  const [jk, setJk] = useState("");
  const [tglLahir, setTglLahir] = useState("");

  const fetchData = async () => {
    try {
      await axios.post("https://aang.umkmpalangan.my.id/createPegawai", {
        nip: nip,
        nama: nama,
        stat_jabatan: statJabatan,
        golongan_akhir: golonganAkhir,
        tmt_golongan: tmtGolongan,
        pendidikan: pendidikan,
        tanggal_lulus: tglLulus,
        jenis_kelamin: jk,
        tanggal_lahir: tglLahir,
      });
      alert("Data Berhasil");
    } catch (error) {
      alert(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !nama ||
      !nip ||
      !statJabatan ||
      !golonganAkhir ||
      !tmtGolongan ||
      !pendidikan ||
      !tglLulus ||
      !jk ||
      !tglLahir
    ) {
      alert("Please fill in all fields");
      return;
    }
    fetchData();
  };

  return (
    <div className="card flex justify-content-center">
      <Button
        onClick={() => document.getElementById("my_modal_1").showModal()}
        className="flex items-center gap-3 p-2 border border-black rounded-md"
      >
        <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Pegawai
      </Button>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_1" className="modal rounded-sm">
        <div className="modal-box">
          <h3 className="font-bold w-full text-center text-2xl">
            Tambah Pegawai
          </h3>
          <form action="#" className="space-y-4">
            <div>
              <label className="text-sm ml-2 my-2 block" htmlFor="name">
                Name
              </label>
              <input
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Name"
                type="text"
                id="name"
              />
            </div>

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
                <label className="text-sm ml-2 my-2 block" htmlFor="jabatan">
                  Jabatan
                </label>
                <input
                  value={statJabatan}
                  onChange={(e) => setStatJabatan(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Your Jabatan"
                  type="text"
                  id="jabatan"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm ml-2 my-2 block" htmlFor="golongan">
                  Golongan Akhir
                </label>
                <input
                  value={golonganAkhir}
                  onChange={(e) => setGolonganAkhir(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Golongan"
                  type="text"
                  id="golongan"
                />
              </div>

              <div>
                <label className="text-sm ml-2 my-2 block" htmlFor="tamat">
                  Tamat Golongan
                </label>
                <input
                  value={tmtGolongan}
                  onChange={(e) => setTmtGolongan(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Tamat Golongan"
                  type="date"
                  id="tamat"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm ml-2 my-2 block" htmlFor="pendidikan">
                  Pendidikan
                </label>
                <input
                  value={pendidikan}
                  onChange={(e) => setPendidikan(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="pendidikan"
                  type="text"
                  id="pendidikan"
                />
              </div>

              <div>
                <label className="text-sm ml-2 my-2 block" htmlFor="tg-lulus">
                  Tanggal Lulus
                </label>
                <input
                  value={tglLulus}
                  onChange={(e) => setTglLulus(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Tgl Lulus"
                  type="date"
                  id="tg-lulus"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-sm ml-2 my-2 block"
                  htmlFor="jenis-kelamin"
                >
                  Jenis Kelamin
                </label>
                <input
                  value={jk}
                  onChange={(e) => setJk(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="jenis-kelamin"
                  type="text"
                  id="jenis-kelamin"
                />
              </div>

              <div>
                <label className="text-sm ml-2 my-2 block" htmlFor="tg-lahir">
                  Tanggal Lahir
                </label>
                <input
                  value={tglLahir}
                  onChange={(e) => setTglLahir(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Tgl lahir"
                  type="date"
                  id="tg-lahir"
                />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center gap-4">
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
