import React, { useState, useRef } from 'react';
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { Button } from "primereact/button";
import Radio from "./RadioButton";
import { useNavigate, useSearchParams } from "react-router-dom";
import Form1PegawaiTeladan from "./Form1Pegawai";
import SelectPegawai from './SelectPegawai';


const options = [
    { value: 'diyah', label: 'Diyah Citra Ayu Kurnia Sukma, S.E., M.SI'},
    { value: 'iis', label: 'Iis Irmawati, A.Md'},
    { value: 'ika', label: 'Ika Nuryani, S.ST., M.Stat'}
];


const data = [
  {
    name: `Pegawai memahami dan memenuhi kebutuhan masyarakat`,
    key: "1",
  },
  {
    name: `Pegawai ramah, cekatan, solutif dan dapat diandalkan.`,
    key: "2",
  },
  {
    name: `Pegawai melakukan perbaikan tiada henti.`,
    key: "3",
  },
  {
    name: `Pegawai melaksanakan tugas dengan jujur, bertanggungjawab, cermat, disiplin dan berintegritas tinggi `,
    key: "4",
  },
  {
    name: `Pegawai menggunakan kekayaan dan barang milik negara secara bertanggung jawab, efektif, dan efisien `,
    key: "5",
  },
  {
    name: `Pegawai tidak menyalahgunakan kewenangan jabatan`,
    key: "6",
  },
  {
    name: ` Pegawai meningkatkan kompetensi diri untuk menjawab tantangan yang selalu berubah`,
    key: "7",
  },
  {
    name: `Pegawai membantu orang lain belajar`,
    key: "8",
  },
  {
    name: `Pegawai membantu orang lain belajar`,
    key: "9",
  },
  {
    name: `Pegawai menghargai setiap orang apapun latar belakangnya`,
    key: "10",
  },
  {
    name: `Pegawai suka menolong orang lain`,
    key: "11",
  },
  {
    name: `Pegawai membangun lingkungan kerja yang kondusif`,
    key: "12",
  },
  {
    name: `Pegawai memegang teguh ideologi Pancasila,Undang-Undang Dasar Negara Republik Indonesia tahun 1945, setia kepada Negara Kesatuan Republik Indonesia serta pemerintahan yang sah`,
    key: "13",
  },
  {
    name: `Pegawai memegang teguh ideologi Pancasila,Undang-Undang Dasar Negara Republik Indonesia tahun 1945, setia kepada Negara Kesatuan Republik Indonesia serta pemerintahan yang sah`,
    key: "14",
  },
  {
    name: `Pegawai menjaga rahasia jabatan dan negara`,
    key: "15",
  },
  {
    name: ` Pegawai cepat menyesuaikan diri menghadapi perubahan`,
    key: "16",
  },
  {
    name: ` Pegawai terus berinovasi dan mengembangkan kreativitas`,
    key: "17",
  },
  {
    name:`Pegawai bertindak proaktif `,
    key:"18",
  },
  {
    name: `Pegawai memberi kesempatan kepada berbagai pihak untuk berkontribusi`,
    key:"19",
  },
  {
    name: `Pegawai terbuka dalam bekerja sama untuk menghasilkan nilai tambah`,
    key: "20",
  },
  {
    name: `Pegawai menggerakkan pemanfaatan berbagai sumberdaya untuk tujuan bersama`,
    key: "21",
  }
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
        <SelectPegawai 
              selectedCandidate={selectedCandidate}
              setSelectedCandidate={setSelectedCandidate}
            />
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
                  <Radio />
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
        <StepperPanel header="Kandidat Kedua">
        <SelectPegawai 
              selectedCandidate={selectedCandidate}
              setSelectedCandidate={setSelectedCandidate}
            />
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
                  <Radio />
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
        <StepperPanel header="Kandidat Ketiga">
        <SelectPegawai 
              selectedCandidate={selectedCandidate}
              setSelectedCandidate={setSelectedCandidate}
            />
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
                  <Radio />
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
