/* eslint-disable no-unused-vars */
import { IconButton } from "@material-tailwind/react";
import { PencilIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useEffect, useState } from "react";

export function PegawaiForm() {
  const [dataId, setDataId] = useState({});
  const [nip, setNip] = useState("");
  const [nama, setNama] = useState("");
  const [statJabatan, setStatJabatan] = useState("");
  const [golonganAkhir, setGolonganAkhir] = useState("");
  const [tmtGolongan, setTmtGolongan] = useState("");
  const [pendidikan, setPendidikan] = useState("");
  const [tglLulus, setTglLulus] = useState("");
  const [jk, setJk] = useState("");
  const [tglLahir, setTglLahir] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://aang.umkmpalangan.my.id/readPegawai"
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const fetchDataById = async (nip) => {
    try {
      const response = await axios.get(
        `https://aang.umkmpalangan.my.id/readPegawaiByID/${nip}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      const data = response.data;
      setDataId(data);
      setNip(data.nip);
      setNama(data.nama);
      setStatJabatan(data.stat_jabatan);
      setGolonganAkhir(data.golongan_akhir);
      setTmtGolongan(data.tmt_golongan);
      setPendidikan(data.pendidikan);
      setTglLulus(data.tanggal_lulus);
      setJk(data.jenis_kelamin);
      setTglLahir(data.tanggal_lahir);
      document.getElementById("my_modal_2").showModal();
    } catch (error) {
      alert(error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (
      !nip ||
      !nama ||
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

    try {
      await axios.put(
        `https://aang.umkmpalangan.my.id/updatePegawai/${nip}`,
        {
          nip: nip,
          nama: nama,
          stat_jabatan: statJabatan,
          golongan_akhir: golonganAkhir,
          tmt_golongan: tmtGolongan,
          pendidikan: pendidikan,
          tanggal_lulus: tglLulus,
          jenis_kelamin: jk,
          tanggal_lahir: tglLahir,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      alert("Data Berhasil");
    } catch (error) {
      alert(error);
    }
  };

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
      alert("Data Berhasil");

      alert("Data Berhasil");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="p-4">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                NIP
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Nama
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Stat Jabatan
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Golongan Akhir
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                TMT Golongan
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Pendidikan
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Tanggal Lulus
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Jenis Kelamin
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Tanggal Lahir
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.nip}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.nip}
                </th>
                <td className="px-6 py-4">{item.nama}</td>
                <td className="px-6 py-4">{item.staf_jabatan}</td>
                <td className="px-6 py-4">{item.golongan_akhir}</td>
                <td className="px-6 py-4">{item.tmt_golongan}</td>
                <td className="px-6 py-4">{item.pendidikan}</td>
                <td className="px-6 py-4">{item.tanggal_lulus}</td>
                <td className="px-6 py-4">{item.jenis_kelamin}</td>
                <td className="px-6 py-4">{item.tanggal_lahir}</td>
                <td className="px-6 py-4 flex items-center">
                  <IconButton
                    variant="text"
                    onClick={() => fetchDataById(item.nip)}
                  >
                    <PencilIcon className="h-4 w-4" />
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

      <dialog id="my_modal_2" className="modal rounded-sm">
        <div className="modal-box">
          <h3 className="font-bold w-full text-center text-2xl">
            Update Pegawai
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
                  placeholder="Pendidikan"
                  type="text"
                  id="pendidikan"
                />
              </div>

              <div>
                <label
                  className="text-sm ml-2 my-2 block"
                  htmlFor="tanggal-lulus"
                >
                  Tanggal Lulus
                </label>
                <input
                  value={tglLulus}
                  onChange={(e) => setTglLulus(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Tanggal Lulus"
                  type="date"
                  id="tanggal-lulus"
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
                  placeholder="Jenis Kelamin"
                  type="text"
                  id="jenis-kelamin"
                />
              </div>

              <div>
                <label
                  className="text-sm ml-2 my-2 block"
                  htmlFor="tanggal-lahir"
                >
                  Tanggal Lahir
                </label>
                <input
                  value={tglLahir}
                  onChange={(e) => setTglLahir(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Tanggal Lahir"
                  type="date"
                  id="tanggal-lahir"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => document.getElementById("my_modal_2").close()}
                className="btn"
              >
                Close
              </button>
              <button
                onClick={handleUpdate}
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default PegawaiForm;
