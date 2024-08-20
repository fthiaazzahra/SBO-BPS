import Navbar from "../../../Components/Navbar/Index";
import Footer from "../../../Components/Navbar/Footer/Footer";

import Tables from "./Table";
// import VerticalBarDemo from "../../Home/Chart/DiagramBatang";
import Diagram1 from "../../Home/Chart/DiagramIndikator/Diagram1";
import ScatterChart from "../../Home/IPA/DiagramKartesius";

import { Dropdown } from "primereact/dropdown";
import { useState } from "react";

const HasilSBO = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [quarter, setQuarter] = useState(1);
  const [indikator, setIndikator] = useState("PriKer");
  console.log(indikator);
  console.log(year);
  console.log(quarter);

  const indikators = [
    { label: "PriKer", value: "PriKer" },
    { label: "LeadBO", value: "LeadBO" },
    { label: "PeBO", value: "PeBO" },
    { label: "SysBO", value: "SysBO" },
  ];

  const years = [2021, 2022, 2023, 2024];
  const quarters = [
    { label: "Triwulan 1", value: 1 },
    { label: "Triwulan 2", value: 2 },
    { label: "Triwulan 3", value: 3 },
    { label: "Triwulan 4", value: 4 },
  ];

  return (
    <div>
      <Navbar />
      <div className="pt-[90px] w-full ">
        <div className="flex flex-col gap-8">
          <div className="bg-[#002B6A]">
            <div className="flex gap-4 mb-4 mt-8 justify-center ">
              <Dropdown
                value={indikator}
                options={indikators}
                onChange={(e) => setIndikator(e.value)}
                placeholder="Select Indikator"
              />
              <Dropdown
                value={year}
                options={years}
                onChange={(e) => setYear(e.value)}
                placeholder="Select Year"
              />
              <Dropdown
                value={quarter}
                options={quarters}
                onChange={(e) => setQuarter(e.value)}
                placeholder="Select Quarter"
              />
            </div>
            <ScatterChart
              selectedIndikator={indikator}
              selectedTahun={year}
              selectedTriwulan={quarter}
            />
          </div>
          <div className="">
            <div className="flex ">
              <div className="w-full px-10">{/* <VerticalBarDemo /> */}</div>
            </div>
          </div>
          <div className="bg-white">
            <div className="w-full px-10">
              <Diagram1 tahun={year} triwulan={quarter} />
            </div>
          </div>
          <div className="bg-white">
            <div className="w-full px-10">
              <Tables tahun={year} triwulan={quarter} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HasilSBO;
