import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  IconButton,
  Input,
  Tooltip,
} from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { DialogSizes } from "./Dialog";
import { DialogSizesEdit } from "./Edit";
import { Toast } from "primereact/toast";

export function TransactionsTable() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const toast = useRef(null);

  const showToast = (severity, summary, detail) => {
    toast.current.show({ severity, summary, detail });
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://aang.umkmpalangan.my.id/kandidat",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
      showToast("error", "Error", "Failed to fetch data");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://aang.umkmpalangan.my.id/kandidat/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      showToast("success", "Deleted", "Data successfully deleted");
      setData(data.filter((item) => item.id !== id)); // Update state after deletion
    } catch (error) {
      console.error(error);
      showToast("error", "Error", "Failed to delete data");
    }
  };

  const filteredData = data.filter((item) =>
    item.nama_kandidat.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Card className="h-full w-full">
      <Toast ref={toast} />
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              Pegawai Teladan CMS
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              These are details about the last transactions
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <DialogSizes />
          </div>
        </div>
      </CardHeader>

      <div className="relative overflow-auto mt-6">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nomor Kandidat
              </th>
              <th scope="col" className="px-6 py-3">
                Nama Kandidat
              </th>
              <th scope="col" className="px-6 py-3">
                Triwulan
              </th>
              <th scope="col" className="px-6 py-3">
                Tahun
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
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.nomor_kandidat}
                </th>
                <td className="px-6 py-4">{item.nama_kandidat}</td>
                <td className="px-6 py-4">{item.triwulan}</td>
                <td className="px-6 py-4">{item.tahun}</td>
                <td className="px-6 py-4 flex space-x-2">
                  <DialogSizesEdit id={item.id} fetch={fetchData} />
                  <Tooltip content="Hapus User">
                    <IconButton
                      onClick={() => handleDelete(item.id)}
                      variant="text"
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
                  </Tooltip>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
