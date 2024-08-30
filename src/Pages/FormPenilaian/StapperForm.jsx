import { useEffect, useRef } from "react";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { Button } from "primereact/button";
import Form1BudayaOrganisasi from "./Form-1";

import { useNavigate } from "react-router-dom";
import FormPliker from "./Form-2";
import FormLeader from "./Form-3";
import FormPeople from "./Form-4";
import FormSystem from "./Form-5";

export default function FormStapper() {
  const token = localStorage.getItem("token");
  console.log("Mana TOken", token);
  const navigate = useNavigate();
  const stepperRef = useRef(null);

  useEffect(() => {
    if (token === null) {
      navigate("/");
    }
  }, []);

  const jabatan = localStorage.getItem("jabatan");
  console.log(jabatan);

  return (
    <div className="card flex flex-col justify-content-center">
      <div className="w-full flex items-center justify-center text-black pb-6">
        <h1 className="text-xl md:text-3xl text-center uppercase font-bold">
          Form Penilaian Budaya Organisasi
        </h1>
      </div>
      <Stepper ref={stepperRef} style={{ flexBasis: "100%" }}>
        <StepperPanel header="Data Pegawai">
          <div className="flex flex-col h-12rem gap-7 ">
            <Form1BudayaOrganisasi />
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
        <StepperPanel header="Priker">
          <FormPliker />
          <div className="flex pt-4 justify-start gap-4">
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
        <StepperPanel header="LeadBO">
          <div
            className={`${
              localStorage.getItem("jabatan") === "Kepala" ? "hidden" : "block"
            }`}
          >
            <FormLeader />
          </div>

          <div className="flex pt-4 gap-4">
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
        <StepperPanel header="PeBO">
          <FormPeople />

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
        <StepperPanel header="SysBO">
          <FormSystem />
        </StepperPanel>
      </Stepper>
    </div>
  );
}
