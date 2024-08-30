/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Select,
  Option,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import { PencilIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { Toast } from "primereact/toast";

export function DialogSizesEdit({ id, fetch }) {
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
      await axios.put(
        `https://aang.umkmpalangan.my.id/kandidat/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      showToast("success", "Updated", "Data successfully updated");
      fetch();
      handleOpen(null);
    } catch (error) {
      console.error(error);
      handleOpen(null);
    }
  };

  const fetchDataById = async () => {
    if (size !== null && id) {
      try {
        const response = await axios.get(
          `https://aang.umkmpalangan.my.id/kandidat/${id}`,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setNama(response.data.nama_kandidat);
        setKandidat(response.data.nomor_kandidat);
        setTriwulan(response.data.triwulan);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    fetchDataById();
  }, [size, id]);

  return (
    <>
      <Toast ref={toast} />
      <Tooltip content="Edit User">
        <IconButton onClick={() => handleOpen("md")} variant="text">
          <PencilIcon className="h-4 w-4" />
        </IconButton>
      </Tooltip>

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
        <DialogHeader className="shadow-lg text-md">Edit Kandidat</DialogHeader>
        <DialogBody>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
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
            <div className="flex gap-4">
              <Select
                value={triwulan}
                onChange={(e) => handleChangeTriwulan(e)}
                label="Select Triwulan"
              >
                <Option value="1">Triwulan 1</Option>
                <Option value="2">Triwulan 2</Option>
                <Option value="3">Triwulan 3</Option>
                <Option value="4">Triwulan 4</Option>
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
