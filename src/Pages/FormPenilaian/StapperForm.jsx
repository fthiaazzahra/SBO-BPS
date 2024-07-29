import { useRef, useState } from "react";
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
  const navigate = useNavigate();
  const stepperRef = useRef(null);

  const jabatan = localStorage.getItem("jabatan");
  console.log(jabatan);

  const finish = () => {
    localStorage.clear();
    navigate("/finish-survey");
  };
  return (
    <div className="card flex flex-col justify-content-center">
      <div className="w-full flex items-center justify-center text-black pb-6">
        <h1 className="text-3xl uppercase font-bold">Form Penilaian</h1>
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
        <StepperPanel header="Pliker">
          <FormPliker />
          <div className="flex pt-4 justify-content gap-4">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              className="bg-slate-600 text-white px-4 py-2"
              onClick={() => {
                stepperRef.current.prevCallback();
                window.scrollTo(0, 0);
              }}
            />
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
          <div className={`${jabatan === "Kepala" ? "hidden" : "block"}`}>
            <FormLeader />
          </div>

          <div className="flex pt-4 gap-4">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              className="bg-slate-600 text-white px-4 py-2"
              onClick={() => {
                stepperRef.current.prevCallback();
                window.scrollTo(0, 0);
              }}
            />
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
              label="Back"
              severity="secondary"
              className="bg-slate-600 text-white px-4 py-2"
              icon="pi pi-arrow-left"
              onClick={() => {
                stepperRef.current.prevCallback();
                window.scrollTo(0, 0);
              }}
            />
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

          <div className="flex pt-4 justify-content-start gap-4">
            <Button
              label="Back"
              severity="secondary"
              className="bg-slate-600 text-white px-4 py-2 transition-all"
              icon="pi pi-arrow-left"
              onClick={() => {
                stepperRef.current.prevCallback();
                window.scrollTo(0, 0);
              }}
            />
            <Button
              onClick={finish}
              className="p-2 bg-green-500 text-white font-semibold"
            >
              Submit and Finish
            </Button>
          </div>
        </StepperPanel>
      </Stepper>
    </div>
  );
}
