import { Typography } from "@material-tailwind/react";
import Layout from "../../../Layout/Index";
import HaslSuerveyForm from "./form";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
const HasilSurveySBO = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [quarter, setQuarter] = useState(1);

  console.log(year, quarter);

  const years = [2021, 2022, 2023, 2024];
  const quarters = [
    { label: "Q1", value: 1 },
    { label: "Q2", value: 2 },
    { label: "Q3", value: 3 },
    { label: "Q4", value: 4 },
  ];
  return (
    <Layout>
      <div className=" px-4 py-8 flex items-center justify-between gap-8 bg-[#E9781A]">
        <div>
          <Typography variant="h5" color="white">
            Hasil Survey Budaya Organisasi
          </Typography>
          <Typography color="white" className="mt-1 font-normal">
            See information about all members
          </Typography>
        </div>
        <div className="flex gap-4">
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
      </div>
      <div className="h-screen top-0 overflow-y-auto">
        <HaslSuerveyForm dataTahun={year} dataTriwulan={quarter} />
      </div>
    </Layout>
  );
};

export default HasilSurveySBO;
