import {
  Button,
  CardFooter,
  IconButton,
  Input,
  Typography,
} from "@material-tailwind/react";
import Layout from "../../Layout/Index";

import { MagnifyingGlassIcon, PencilIcon } from "@heroicons/react/24/solid";
import DialogForm from "./dialog";
import { Toast } from "primereact/toast";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

const PegawaiPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
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
  const toast = useRef(null);

  const showToast = (severity, summary, detail) => {
    toast.current.show({ severity, summary, detail });
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://aang.umkmpalangan.my.id/readPegawai"
      );
      setData(response.data);
      localStorage.setItem("totalPegawai", response.data.length);
      console.log(response.data.length);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchDataById = async (nip) => {
    try {
      const response = await axios.get(
        `https://aang.umkmpalangan.my.id/readPegawaiByID/${nip}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = response.data;
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
      console.error(error);
      alert("Failed to fetch data");
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
          nip,
          nama,
          stat_jabatan: statJabatan,
          golongan_akhir: golonganAkhir,
          tmt_golongan: tmtGolongan,
          pendidikan,
          tanggal_lulus: tglLulus,
          jenis_kelamin: jk,
          tanggal_lahir: tglLahir,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      showToast("success", "Success", "Data updated successfully");
      document.getElementById("my_modal_2").close();
      fetchData();
    } catch (error) {
      console.error(error);
      showToast("error", "Error", "Failed to update data");
    }
  };
  console.log(nip);

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://aang.umkmpalangan.my.id/deletePegawai/${nip}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      showToast("success", "Success", "Data deleted successfully");
      setData(data.filter((item) => item.nip !== nip));
    } catch (error) {
      console.error(error);
      showToast("error", "Error", "Failed to delete data");
    }
  };

  const filteredData = data.filter((item) =>
    item.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <Layout>
      <div id="scrollableElement" className="h-screen top-0  pb-24">
        <div className=" px-4 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Data Pegawai
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all members
            </Typography>
          </div>
          <div className="flex shrink-0 gap-2">
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
        <div id="scrollableElement" className="h-[400px] top-0 overflow-y-auto">
          <div className="">
            <Toast ref={toast} />
            <div
              id="scrollableElement"
              className="relative shadow-md sm:rounded-lg"
            >
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
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map((item) => (
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
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.nama}
                      </td>
                      <td className="px-6 py-4">{item.stat_jabatan}</td>
                      <td className="px-6 py-4">{item.golongan_akhir}</td>
                      <td className="px-6 py-4">{item.tmt_golongan}</td>
                      <td className="px-6 py-4">{item.pendidikan}</td>
                      <td className="px-6 py-4">{item.tanggal_lulus}</td>
                      <td className="px-6 py-4">{item.jenis_kelamin}</td>
                      <td className="px-6 py-4">{item.tanggal_lahir}</td>
                      <td className="px-6 py-4 flex items-center space-x-2">
                        <IconButton
                          variant="text"
                          onClick={() => fetchDataById(item.nip)}
                        >
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                        <IconButton variant="text" onClick={() => handleDelete}>
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

            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                Page {currentPage} of {totalPages}
              </Typography>
              <div className="flex gap-2">
                <Button
                  variant="outlined"
                  size="sm"
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                <Button
                  variant="outlined"
                  size="sm"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            </CardFooter>

            <dialog id="my_modal_2" className="modal rounded-sm">
              <div className="modal-box p-0">
                <div className="w-full flex items-center justify-start p-4 shadow-md">
                  <h3 className="font-bold text-center text-lg">
                    Update Pegawai
                  </h3>
                </div>
                <form
                  id="scrollableElement"
                  action="#"
                  className="space-y-4 p-4 h-[300px]"
                >
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
                      <label
                        className="text-sm ml-2 my-2 block"
                        htmlFor="jabatan"
                      >
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
                      <label
                        className="text-sm ml-2 my-2 block"
                        htmlFor="golongan"
                      >
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
                      <label
                        className="text-sm ml-2 my-2 block"
                        htmlFor="tamat"
                      >
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
                      <label
                        className="text-sm ml-2 my-2 block"
                        htmlFor="pendidikan"
                      >
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
                </form>
                <div className="flex justify-end gap-4 p-4">
                  <button
                    type="button"
                    onClick={() =>
                      document.getElementById("my_modal_2").close()
                    }
                    className="btn border bg-yellow-500 hover:bg-yellow-700 px-6 text-white"
                  >
                    Close
                  </button>
                  <button
                    onClick={handleUpdate}
                    type="submit"
                    className="btn border bg-green-500 px-6 text-white hover:bg-green-700"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PegawaiPage;
