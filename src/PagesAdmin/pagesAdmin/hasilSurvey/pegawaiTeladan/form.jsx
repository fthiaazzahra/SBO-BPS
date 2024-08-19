/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { IconButton } from "@material-tailwind/react";
import { PencilIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useEffect, useState } from "react";

const pertanyaan = [
  "Pertanyaan 1",
  "Pertanyaan 2",
  "Pertanyaan 3",
  "Pertanyaan 4",
  "Pertanyaan 5",
  "Pertanyaan 6",
  "Pertanyaan 7",
  "Pertanyaan 8",
  "Pertanyaan 9",
  "Pertanyaan 10",
  "Pertanyaan 11",
  "Pertanyaan 12",
  "Pertanyaan 13",
  "Pertanyaan 14",
  "Pertanyaan 15",
  "Pertanyaan 16",
  "Pertanyaan 17",
  "Pertanyaan 18",
  "Pertanyaan 19",
  "Pertanyaan 20",
  "Pertanyaan 21",
];

export function HaslSuerveyForm({ dataTahun, dataTriwulan, dataNomor }) {
  console.log(dataTahun, dataTriwulan, dataNomor);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Untuk loading state
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Set loading true saat mulai mengambil data
        const response = await axios.get(
          `https://aang.umkmpalangan.my.id/survey_kandidat?tahun=${dataTahun}&triwulan=${dataTriwulan}&nomor_kandidat=${dataNomor}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("token"),
            },
          }
        );

        setData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Set loading false setelah data diambil
      }
    };

    fetchData();
  }, [dataTahun, dataTriwulan, dataNomor]);

  if (loading) {
    return (
      <div className="flex items-center justify-center mt-4">
        <span className="loading loading-infinity loading-lg text-[#002B6A]"></span>
      </div>
    ); // Tampilkan loading state
  }

  return (
    <div className="p-4 pb-60">
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
                Tahun
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Triwulan
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Nomor Kandidat
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Nama Kandidat
              </th>
              {pertanyaan.map((item, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-6 py-3 whitespace-nowrap"
                >
                  {item}
                </th>
              ))}

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={item.nip}
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
                  {item.nip}
                </th>
                <td className="px-6 py-4">{item.nama_lengkap}</td>
                <td className="px-6 py-4">{item.tahun}</td>
                <td className="px-6 py-4">{item.triwulan}</td>
                <td className="px-6 py-4">{item.nomor_kandidat}</td>
                <td className="px-6 py-4">{item.nama_kandidat}</td>
                <td className="px-6 py-4">{item.pertanyaan_1}</td>
                <td className="px-6 py-4">{item.pertanyaan_2}</td>
                <td className="px-6 py-4">{item.pertanyaan_3}</td>
                <td className="px-6 py-4">{item.pertanyaan_4}</td>
                <td className="px-6 py-4">{item.pertanyaan_5}</td>
                <td className="px-6 py-4">{item.pertanyaan_6}</td>
                <td className="px-6 py-4">{item.pertanyaan_7}</td>
                <td className="px-6 py-4">{item.pertanyaan_8}</td>
                <td className="px-6 py-4">{item.pertanyaan_9}</td>
                <td className="px-6 py-4">{item.pertanyaan_10}</td>
                <td className="px-6 py-4">{item.pertanyaan_11}</td>
                <td className="px-6 py-4">{item.pertanyaan_12}</td>
                <td className="px-6 py-4">{item.pertanyaan_13}</td>
                <td className="px-6 py-4">{item.pertanyaan_14}</td>
                <td className="px-6 py-4">{item.pertanyaan_15}</td>
                <td className="px-6 py-4">{item.pertanyaan_16}</td>
                <td className="px-6 py-4">{item.pertanyaan_17}</td>
                <td className="px-6 py-4">{item.pertanyaan_18}</td>
                <td className="px-6 py-4">{item.pertanyaan_19}</td>
                <td className="px-6 py-4">{item.pertanyaan_20}</td>
                <td className="px-6 py-4">{item.pertanyaan_21}</td>
                <td className="px-6 py-4 flex items-center">
                  <IconButton variant="text">
                    <PencilIcon className="h-4 w-4" />
                  </IconButton>
                  <IconButton variant="text">
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
  );
}

export default HaslSuerveyForm;
