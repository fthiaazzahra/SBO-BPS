import { useEffect, useRef } from "react";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { Button } from "primereact/button";

import { useNavigate } from "react-router-dom";
import Form1PegawaiTeladan from "./Form1Pegawai";

import FormKandidat1 from "./Form1";
import FormKandidat2 from "./Form2";
import FormKandidat3 from "./Form3";

export default function FormStapper() {
  const navigate = useNavigate();
  const stepperRef = useRef(null);
  const token = localStorage.getItem("token");
  console.log("Mana TOken", token);

  useEffect(() => {
    if (token === null) {
      navigate("/");
    }
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
          <FormKandidat1 />

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
          <FormKandidat2 />

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
          <FormKandidat3 />
        </StepperPanel>
      </Stepper>
    </div>
  );
}
