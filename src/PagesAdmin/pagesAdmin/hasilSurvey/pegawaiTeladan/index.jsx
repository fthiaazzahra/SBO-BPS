import { Typography } from "@material-tailwind/react";
import Layout from "../../../Layout/Index";
import HaslSuerveyForm from "./form";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
const HasilHitungPegawaiTeladan = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [quarter, setQuarter] = useState(1);
  const [namaKandidat, setNamaKandidat] = useState("Kandidat 1");
  console.log(year, quarter, namaKandidat);

  const namas = ["Kandidat 1", "Kandidat 2", "Kandidat 3"];
  const years = [2021, 2022, 2023, 2024];
  const quarters = [
    { label: "Q1", value: 1 },
    { label: "Q2", value: 2 },
    { label: "Q3", value: 3 },
    { label: "Q4", value: 4 },
  ];
  return (
    <Layout>
      <div className=" px-4 py-8 flex flex-col justify-center md:flex-row md:items-center md:justify-between gap-8 bg-[#E9781A]">
        <div>
          <Typography variant="h5" color="white">
            Hasil Survey Pegawai Teladan
          </Typography>
          <Typography color="white" className="mt-1 font-normal">
            See information about all members
          </Typography>
        </div>
        <div className="flex gap-4">
          <Dropdown
            value={namaKandidat}
            options={namas}
            onChange={(e) => setNamaKandidat(e.value)}
            placeholder="Select Kandidat"
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
      </div>
      <div className="h-screen top-0 overflow-y-auto">
        <HaslSuerveyForm
          dataTahun={year}
          dataTriwulan={quarter}
          dataNomor={namaKandidat}
        />
      </div>
    </Layout>
  );
};

export default HasilHitungPegawaiTeladan;
