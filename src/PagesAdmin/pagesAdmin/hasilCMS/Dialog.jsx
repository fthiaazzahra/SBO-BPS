/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { Toast } from "primereact/toast";

export function DialogSizes({ fetchData }) {
  const [gambar, setGambar] = useState(null);
  const [triwulan, setTriwulan] = useState("");
  const [tahun, setTahun] = useState(new Date().getFullYear());
  const [nama, setNama] = useState("");
  const [size, setSize] = useState(null);
  const toast = useRef(null);

  const showToast = (severity, summary, detail) => {
    toast.current.show({ severity, summary, detail });
  };

  const handleChangeTriwulan = (value) => {
    setTriwulan(value);
  };

  const handleOpen = (value) => setSize(value);

  const handleFileChange = (e) => {
    setGambar(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("nama", nama);
    formData.append("triwulan", triwulan);
    formData.append("tahun", tahun);
    formData.append("foto", gambar);

    try {
      const response = await axios.post(
        "https://aang.umkmpalangan.my.id/pemenang",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      showToast("success", "Added", "Data successfully added");
      fetchData();
      console.log(response.data);
      handleOpen(null);
    } catch (error) {
      console.error("Error uploading data:", error);
      showToast("error", "Error", "Failed to upload data");
      handleOpen(null);
    }
  };

  return (
    <>
      <Toast ref={toast} />
      <div className="mb-3 flex gap-3 ">
        <Button className="flex  bg-green-500" onClick={() => handleOpen("sm")}>
          <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add
        </Button>
      </div>

      <Dialog open={!!size} size={size || "sm"} handler={handleOpen}>
        <DialogHeader className="text-md">Tambah Pemenang Baru</DialogHeader>
        <DialogBody className="h-[300px] overflow-auto border">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                label="Nama"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <Select
                value={triwulan}
                onChange={(e) => handleChangeTriwulan(e)}
                label="Select Triwulan"
              >
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
              </Select>
              <Input
                value={tahun}
                onChange={(e) => setTahun(e.target.value)}
                label="Tahun"
              />
            </div>

            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className={`flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer  ${
                  gambar && "bg-green-400"
                }`}
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-black"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-black">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-black ">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
            {/* Display file name if an image has been selected */}
            {gambar && (
              <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                <p>Selected file: {gambar.name}</p>
              </div>
            )}
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen(null)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleSubmit}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
