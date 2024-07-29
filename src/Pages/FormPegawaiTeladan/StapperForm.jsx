import { useState, useRef } from "react";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { Button } from "primereact/button";

import { useNavigate } from "react-router-dom";
import Form1PegawaiTeladan from "./Form1Pegawai";
import SelectPegawai from "./SelectPegawai";
import FormKandidat1 from "./Form1";
import FormKandidat2 from "./Form2";
import FormKandidat3 from "./Form3";

const data = [
  { name: `Pegawai memahami dan memenuhi kebutuhan masyarakat`, key: "1" },
  { name: `Pegawai ramah, cekatan, solutif dan dapat diandalkan.`, key: "2" },
  { name: `Pegawai melakukan perbaikan tiada henti.`, key: "3" },
  {
    name: `Pegawai melaksanakan tugas dengan jujur, bertanggungjawab, cermat, disiplin dan berintegritas tinggi `,
    key: "4",
  },
  {
    name: `Pegawai menggunakan kekayaan dan barang milik negara secara bertanggung jawab, efektif, dan efisien `,
    key: "5",
  },
  { name: `Pegawai tidak menyalahgunakan kewenangan jabatan`, key: "6" },
  {
    name: ` Pegawai meningkatkan kompetensi diri untuk menjawab tantangan yang selalu berubah`,
    key: "7",
  },
  { name: `Pegawai membantu orang lain belajar`, key: "8" },
  { name: `Pegawai membantu orang lain belajar`, key: "9" },
  {
    name: `Pegawai menghargai setiap orang apapun latar belakangnya`,
    key: "10",
  },
  { name: `Pegawai suka menolong orang lain`, key: "11" },
  { name: `Pegawai membangun lingkungan kerja yang kondusif`, key: "12" },
  {
    name: `Pegawai memegang teguh ideologi Pancasila,Undang-Undang Dasar Negara Republik Indonesia tahun 1945, setia kepada Negara Kesatuan Republik Indonesia serta pemerintahan yang sah`,
    key: "13",
  },
  {
    name: `Pegawai memegang teguh ideologi Pancasila,Undang-Undang Dasar Negara Republik Indonesia tahun 1945, setia kepada Negara Kesatuan Republik Indonesia serta pemerintahan yang sah`,
    key: "14",
  },
  { name: `Pegawai menjaga rahasia jabatan dan negara`, key: "15" },
  { name: ` Pegawai cepat menyesuaikan diri menghadapi perubahan`, key: "16" },
  {
    name: ` Pegawai terus berinovasi dan mengembangkan kreativitas`,
    key: "17",
  },
  { name: `Pegawai bertindak proaktif `, key: "18" },
  {
    name: `Pegawai memberi kesempatan kepada berbagai pihak untuk berkontribusi`,
    key: "19",
  },
  {
    name: `Pegawai terbuka dalam bekerja sama untuk menghasilkan nilai tambah`,
    key: "20",
  },
  {
    name: `Pegawai menggerakkan pemanfaatan berbagai sumberdaya untuk tujuan bersama`,
    key: "21",
  },
];

export default function FormStapper() {
  const navigate = useNavigate();
  const stepperRef = useRef(null);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  return (
    <div className="card flex flex-col justify-content-center">
      <div className="w-full flex items-center justify-center text-black pb-6">
        <h1 className="text-3xl uppercase font-bold">Form Penilaian</h1>
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
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              className="bg-blue-500 text-white px-4 py-2"
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
        <StepperPanel header="Kandidat Kedua">
          <FormKandidat2 />

          <div className="flex pt-4 justify-content gap-4">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              className="bg-blue-500 text-white px-4 py-2"
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
        <StepperPanel header="Kandidat Ketiga">
          <FormKandidat3 />

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
              label="Submit and Finish"
              icon="pi pi-check"
              iconPos="right"
              className="bg-green-500 text-white px-4 py-2"
              onClick={() => navigate("/finish-survey")}
            />
          </div>
        </StepperPanel>
      </Stepper>
    </div>
  );
}
