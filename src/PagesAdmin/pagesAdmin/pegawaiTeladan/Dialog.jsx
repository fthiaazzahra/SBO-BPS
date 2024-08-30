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

export function DialogSizes() {
  const [kandidat, setKandidat] = useState("");
  const [triwulan, setTriwulan] = useState("");
  const [tahun, setTahun] = useState(new Date().getFullYear());
  const [nama, setNama] = useState("");
  const [size, setSize] = useState(null);
  const toast = useRef(null);

  const showToast = (severity, summary, detail) => {
    toast.current.show({ severity, summary, detail });
  };

  const handleChange = (value) => {
    setKandidat(value);
  };
  const handleChangeTriwulan = (value) => {
    setTriwulan(value);
  };

  const handleOpen = (value) => setSize(value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nomor_kandidat", kandidat);
    formData.append("nama_kandidat", nama);
    formData.append("triwulan", triwulan);
    try {
      const response = await axios.post(
        "https://aang.umkmpalangan.my.id/kandidat",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      showToast("success", "Success", "Data Berhasil Added");

      handleOpen(null);
    } catch (error) {
      showToast("error", "Error", "Data Gagal Ditambahkan");
      handleOpen(null);
    }
  };

  return (
    <>
      <Toast ref={toast} />
      <div className="mb-3 flex gap-3">
        <Button
          className="flex bg-green-500 text-white"
          onClick={() => handleOpen("md")}
        >
          <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add
        </Button>
      </div>

      <Dialog
        open={
          size === "xs" ||
          size === "sm" ||
          size === "md" ||
          size === "lg" ||
          size === "xl" ||
          size === "xxl"
        }
        size={size || "md"}
        handler={handleOpen}
      >
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                label="Username"
              />
              <Select
                value={kandidat}
                onChange={(e) => handleChange(e)}
                label="Select Kandidat"
              >
                <Option value="Kandidat 1">Kandidat 1</Option>
                <Option value="Kandidat 2">Kandidat 2</Option>
                <Option value="Kandidat 3">Kandidat 3</Option>
              </Select>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <Select
                value={triwulan}
                onChange={(e) => handleChangeTriwulan(e)}
                label="Select Triwulan"
              >
                <Option value="1">Triwulan 1</Option>
                <Option value="2">Triwulan 2</Option>
                <Option value="3">Triwulan 3</Option>
              </Select>
              <Input value={tahun} label="Tahun" />
            </div>
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
