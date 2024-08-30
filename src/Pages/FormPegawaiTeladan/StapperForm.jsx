/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { Button } from "primereact/button";

import { useNavigate } from "react-router-dom";
import Form1PegawaiTeladan from "./Form1Pegawai";

import FormKandidat1 from "./Form1";
import FormKandidat2 from "./Form2";
import FormKandidat3 from "./Form3";
import axios from "axios";

export default function FormStapper() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  console.log(data);
  const stepperRef = useRef(null);
  const token = localStorage.getItem("token");
  console.log("Mana TOken", token);

  const [
    {
      id: id1,
      tahun: tahun1,
      triwulan: triwulan1,
      nomor_kandidat: nomor_kandidat1,
      nama_kandidat: nama_kandidat1,
    } = {}, // Fallback to empty object
    {
      id: id2,
      tahun: tahun2,
      triwulan: triwulan2,
      nomor_kandidat: nomor_kandidat2,
      nama_kandidat: nama_kandidat2,
    } = {}, // Fallback to empty object
    {
      id: id3,
      tahun: tahun3,
      triwulan: triwulan3,
      nomor_kandidat: nomor_kandidat3,
      nama_kandidat: nama_kandidat3,
    } = {}, // Fallback to empty object
  ] = data;

  console.log(nama_kandidat1);

  useEffect(() => {
    if (token === null) {
      navigate("/");
    }
  }, []);

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
      // showToast("error", "Error", "Failed to fetch data");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card flex flex-col justify-content-center">
      <div className="w-full flex items-center justify-center text-black pb-6">
        <h1 className="text-xl md:text-3xl text-center uppercase font-bold">
          Form Penilaian Pegawai Teladan
        </h1>
      </div>
      <Stepper ref={stepperRef} style={{ flexBasis: "100%" }}>
        <StepperPanel header="Data Pegawai">
          <div className="flex flex-col h-12rem gap-7 ">
            <Form1PegawaiTeladan />
          </div>

          <div className="flex pt-4 gap-4">
            <Button
              label="Next"
              className="bg-blue-500 text-white px-4 py-2"
              icon="pi pi-arrow-right"
              iconPos="right"
              onClick={() => {
                stepperRef.current.nextCallback();
                window.scrollTo(0, 0);
              }}
            />
          </div>
        </StepperPanel>
        <StepperPanel header="Kandidat Pertama">
          <FormKandidat1 nama={nama_kandidat1} nomor={nomor_kandidat1} />

          <div className="flex pt-4 justify-content gap-4">
            <Button
              label="Next"
              icon="pi pi-arrow-right"
              iconPos="right"
              className="bg-blue-500 text-white px-4 py-2"
              onClick={() => {
                stepperRef.current.nextCallback();
                window.scrollTo(0, 0);
              }}
            />
          </div>
        </StepperPanel>
        <StepperPanel header="Kandidat Kedua">
          <FormKandidat2 nama={nama_kandidat2} nomor={nomor_kandidat2} />

          <div className="flex pt-4 justify-content gap-4">
            <Button
              label="Next"
              icon="pi pi-arrow-right"
              iconPos="right"
              className="bg-blue-500 text-white px-4 py-2"
              onClick={() => {
                stepperRef.current.nextCallback();
                window.scrollTo(0, 0);
              }}
            />
          </div>
        </StepperPanel>
        <StepperPanel header="Kandidat Ketiga">
          <FormKandidat3 nama={nama_kandidat3} nomor={nomor_kandidat3} />
        </StepperPanel>
      </Stepper>
    </div>
  );
}
