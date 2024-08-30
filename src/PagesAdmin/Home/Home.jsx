import { useState } from "react";
import ScatterChart from "../../Pages/Home/IPA/DiagramKartesius";
import Layout from "../Layout/Index";

import { Dropdown } from "primereact/dropdown";
import { Card } from "primereact/card";
import Diagram1 from "../../Pages/Home/Chart/DiagramIndikator/Diagram1";

// import { Sidebar } from "../Sidebar/Index";

const HomeAdmin = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [triwulanValue, setTriwulan] = useState(1);
  const [indikatorValue, setIndikator] = useState("PriKer");
  console.log(indikatorValue);
  console.log(year);
  console.log(triwulanValue);

  const triwulan = [
    { label: "Triwulan 1", value: 1 },
    { label: "Triwulan 2", value: 2 },
    { label: "Triwulan 3", value: 3 },
    { label: "Triwulan 4", value: 4 },
  ];

  const indikator = [
    { label: "PriKer", value: "PriKer" },
    { label: "LeadBO", value: "LeadBO" },
    { label: "PeBO", value: "PeBO" },
    { label: "SysBO", value: "SysBO" },
  ];

  const currentYear = new Date().getFullYear();
  const startYear = 1900;
  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, i) => currentYear - i
  );

  return (
    <Layout>
      <div id="scrollableElement" className=" w-full bg-white h-screen ">
        <div className="p-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="shadow-lg p-4 bg-[#002B6A] rounded-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-blue-500 text-white rounded-full h-12 w-12 flex items-center justify-center">
                <i className="pi pi-users text-2xl"></i>
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-white">
                  Jumlah Pegawai
                </h2>
                <p className="text-3xl text-white font-bold">
                  {localStorage.getItem("totalPegawai")}
                </p>
              </div>
            </div>
          </Card>
          <Card className="shadow-lg p-4 bg-[#002B6A] rounded-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-blue-500 text-white rounded-full h-12 w-12 flex items-center justify-center">
                <i className="pi pi-users text-2xl"></i>
              </div>
              <div className="ml-4 text-white">
                <h2 className="text-xl font-semibold">Hak Akses Admin</h2>
                <p className="text-3xl font-bold">{1}</p>
              </div>
            </div>
          </Card>
          <Card className="shadow-lg p-4 bg-[#002B6A] rounded-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-blue-500 text-white rounded-full h-12 w-12 flex items-center justify-center">
                <i className="pi pi-users text-2xl"></i>
              </div>
              <div className="ml-4 text-white">
                <h2 className="text-xl font-semibold">Hak Akses Pegawai</h2>
                <p className="text-3xl font-bold">{1}</p>
              </div>
            </div>
          </Card>
        </div>
        <div className=" px-4">
          <div className="bg-[#002B6A] rounded-md">
            <div className="flex pt-4 gap-4 mb-4 mt-8 justify-center">
              <Dropdown
                value={indikatorValue}
                options={indikator}
                onChange={(e) => setIndikator(e.value)}
                placeholder="Pilih Indikator"
              />
              <Dropdown
                value={triwulanValue}
                options={triwulan}
                onChange={(e) => setTriwulan(e.value)}
                placeholder="Pilih Triwulan"
              />
              <Dropdown
                value={year}
                options={years}
                onChange={(e) => setYear(e.value)}
                placeholder="Pilih Tahun"
              />
            </div>
            <ScatterChart
              selectedIndikator={indikatorValue}
              selectedTahun={year}
              selectedTriwulan={triwulanValue}
            />
          </div>
        </div>
        <div className="p-4">
          <Diagram1 tahun={year} triwulan={triwulanValue} />
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </Layout>
  );
};

export default HomeAdmin;
