import { useRef } from "react";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { Button } from "primereact/button";
import Radio from "./RadioButton";
import { useNavigate } from "react-router-dom";
import Form1BudayaOrganisasi from "./Form-1";
import DynamicDemo from "./RadioButton";
const data = [
  {
    name: `Berorientasi pelayanan, yaitu memahami dan memenuhi kebutuhan masyarakat, ramah, cekatan, solutif, dapat diandalkan, dan melakukan perbaikan tiada henti.`,
    key: "1",
  },
  {
    name: `Akuntabel, yaitu melaksanakan tugas dengan jujur, bertanggungjawab, cermat, disiplin berintegritas tinggi, menggunakan kekayaan dan barang milik negara secara bertanggungjawab, efektif, efisien, dan tidak menyalahgunakan kewenangan jabatan.`,
    key: "2",
  },
  {
    name: `Kompeten, yaitu meningkatkan kompetensi diri untuk menjawab tantangan yang selalu berubah, membantu orang lain belajar, dan melaksanakan tugas dengan kualitas terbaik.`,
    key: "3",
  },
  {
    name: `Harmonis,, yaitu menghargai setiap orang apapun latar belakangnya, suka menolong orang lain, dan membangun lingkungan kerja yang kondusif`,
    key: "4",
  },
  {
    name: `Loyal, yaitu memegang teguh ideologi Pancasila, Undang-Undang Dasar Negara Republik Indonesia Tahun 1945, setia kepada Negara Kesatuan Republik Indonesia serta pemerintahan yang sah, menjaga nama baik sesama ASN, Pimpinan, Instansi, dan Negara, dan menjaga rahasia jabatan dan negara.`,
    key: "5",
  },
  {
    name: `Adaptif, yaitu cepat menyesuaikan diri menghadapi perubahan, terus berinovasi dan mengembangkan kreativitas, dan bertindak proaktif.`,
    key: "6",
  },
  {
    name: `Kolaboratif, yaitu memberi kesempatan kepada berbagai pihak untuk berkontribusi, terbuka dalam bekerja sama untuk menghasilkan nilai tambah, dan menggerakkan pemanfaatan berbagai sumberdaya untuk tujuan bersama.`,
    key: "7",
  },
];

export default function FormStapper() {
  const navigate = useNavigate();
  const stepperRef = useRef(null);

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
        <StepperPanel header="PriKer">
          <div className="flex flex-col h-12rem gap-7 ">
            {data.map((item) => {
              return (
                <div
                  key={item.key}
                  className="border-2 flex flex-col gap-4 py-4 px-4 rounded-md shadow-md p-2 surface-border border-round surface-ground  align-items-center font-medium"
                >
                  <div className="pb-4 flex gap-2">
                    <span className=" rounded-full   text-black">
                      {item.key}
                    </span>
                    <p className="text-justify">{item.name}</p>
                  </div>
                  <DynamicDemo />
                </div>
              );
            })}
          </div>

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
          <div className="flex flex-col h-12rem gap-7 ">
            {data.map((item) => {
              return (
                <div
                  key={item.key}
                  className="border-2 flex flex-col gap-4 py-4 px-4 rounded-md shadow-md p-2 surface-border border-round surface-ground  align-items-center font-medium"
                >
                  <div className="pb-4 flex gap-2">
                    <span className=" rounded-full   text-black">
                      {item.key}
                    </span>
                    <p className="text-justify">{item.name}</p>
                  </div>
                  <DynamicDemo />
                </div>
              );
            })}
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
          <div className="flex flex-col h-12rem gap-7 ">
            {data.map((item) => {
              return (
                <div
                  key={item.key}
                  className="border-2 flex flex-col gap-4 py-4 px-4 rounded-md shadow-md p-2 surface-border border-round surface-ground  align-items-center font-medium"
                >
                  <div className="pb-4 flex gap-2">
                    <span className=" rounded-full   text-black">
                      {item.key}
                    </span>
                    <p className="text-justify">{item.name}</p>
                  </div>
                  <DynamicDemo />
                </div>
              );
            })}
          </div>

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
          <div className="flex flex-col h-12rem gap-7 ">
            {data.map((item) => {
              return (
                <div
                  key={item.key}
                  className="border-2 flex flex-col gap-4 py-4 px-4 rounded-md shadow-md p-2 surface-border border-round surface-ground  align-items-center font-medium"
                >
                  <div className="pb-4 flex gap-2">
                    <span className=" rounded-full   text-black">
                      {item.key}
                    </span>
                    <p className="text-justify">{item.name}</p>
                  </div>
                  <DynamicDemo />
                </div>
              );
            })}
          </div>
          <div className="w-full flex justify-end p-4 px-0">
            <button
              onClick={() => navigate("/finish-survey")}
              className="p-2 rounded-md bg-green-500 text-white font-semibold"
            >
              Submit and Finish
            </button>
          </div>
          <div className="flex pt-4 justify-content-start">
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
          </div>
        </StepperPanel>
      </Stepper>
    </div>
  );
}
