import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { DialogSizes } from "./Dialog";
import { DialogSizesEdit } from "./Edit";
import { Toast } from "primereact/toast";

const TABLE_HEAD = ["No", "Nama", "Tahun", "Triwulan", "Foto", "Action"];

export function MembersTable() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const toast = useRef(null);

  const showToast = (severity, summary, detail) => {
    toast.current.show({ severity, summary, detail });
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://aang.umkmpalangan.my.id/pemenang",
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://aang.umkmpalangan.my.id/pemenang/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      showToast("success", "Deleted", "Data successfully deleted");
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      showToast("error", "Error", "Failed to delete data");
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
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
    <Card className="h-full w-full">
      <Toast ref={toast} />
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="md:mb-8 flex flex-col  md:flex-row md:items-center md:justify-between gap-4 md:gap-8">
          <div className="text-left  w-full">
            <Typography variant="h5" color="blue-gray">
              Pemenang CMS
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all Pemenang
            </Typography>
          </div>
          <div className="flex  gap-4">
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <DialogSizes fetch={fetchData} />
          </div>
        </div>
      </CardHeader>
      <CardBody id="scrollableElement" className=" px-4 md:px-6">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => {
              const bufferArray = item.foto.data;
              const blob = new Blob([new Uint8Array(bufferArray)], {
                type: "image/jpeg",
              });
              const imageUrl = URL.createObjectURL(blob);

              return (
                <tr
                  key={item.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th className="px-6 py-4">
                    {index + 1 + (currentPage - 1) * itemsPerPage}
                  </th>
                  <td className="px-6 py-4">{item.nama}</td>
                  <td className="px-6 py-4">{item.tahun}</td>
                  <td className="px-6 py-4">{item.triwulan}</td>
                  <td className="px-6 py-4">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={imageUrl}
                      alt={`Foto ${item.nama}`}
                    />
                  </td>
                  <td className="px-6 py-4 flex gap-2 items-center">
                    <DialogSizesEdit id={item.id} fetch={fetchData} />
                    <a
                      href="#"
                      className="font-medium "
                      onClick={() => handleDelete(item.id)}
                    >
                      <svg
                        className="w-6 h-6 text-red-700"
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
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
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
    </Card>
  );
}
