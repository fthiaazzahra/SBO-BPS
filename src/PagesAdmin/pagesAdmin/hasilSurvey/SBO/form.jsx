/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button, IconButton, Input } from "@material-tailwind/react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import axios from "axios";
import { useEffect, useState } from "react";

export function HaslSuerveyForm({ dataTahun, dataTriwulan }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(1); // Halaman aktif
  const [perPage] = useState(5); // Jumlah item per halaman
  const [searchTerm, setSearchTerm] = useState(""); // Kata kunci pencarian

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://aang.umkmpalangan.my.id/responded-survey/${dataTahun}/${dataTriwulan}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        setData(response.data.surveys);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dataTahun, dataTriwulan]);

  const totalPages = Math.ceil(data.length / perPage);

  // Filter data berdasarkan kata kunci pencarian
  const filteredData = data.filter((item) =>
    item.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    (active - 1) * perPage,
    active * perPage
  );

  const prev = () => {
    if (active > 1) {
      setActive(active - 1);
    }
  };

  const next = () => {
    if (active < totalPages) {
      setActive(active + 1);
    }
  };

  const getItemProps = (page) => ({
    onClick: () => setActive(page),
    className: `h-8 w-8 flex items-center justify-center rounded-full ${
      active === page ? "bg-blue-500 text-white" : "bg-gray-200"
    }`,
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center mt-4">
        <span className="loading loading-infinity loading-lg text-[#002B6A]"></span>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="w-full md:w-72 py-4">
        <Input
          label="Search"
          icon={<MagnifyingGlassIcon className="h-5 w-5" />}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update kata kunci pencarian
        />
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                No
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Nama
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Label
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Score Harapan
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Score Kinerja
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
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
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.nama}
                </th>
                <td className="px-6 py-4 whitespace-nowrap">{item.label}</td>
                <td className="px-6 py-4">{item.score_harapan}</td>
                <td className="px-6 py-4">{item.score_kinerja}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-center py-2">
        <Button
          className="flex gap-2"
          variant="text"
          onClick={prev}
          disabled={active === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
        </Button>

        <Button
          className="flex gap-2"
          variant="text"
          onClick={next}
          disabled={active === totalPages}
        >
          Next <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export default HaslSuerveyForm;
