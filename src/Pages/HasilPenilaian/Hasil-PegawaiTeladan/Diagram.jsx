import { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import { Dropdown } from "primereact/dropdown";
import axios from "axios";

export default function Diagram() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const [dataResult, setDataResult] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [quarter, setQuarter] = useState(1);

  const years = [2021, 2022, 2023, 2024];
  const quarters = [
    { label: "Q1", value: 1 },
    { label: "Q2", value: 2 },
    { label: "Q3", value: 3 },
    { label: "Q4", value: 4 },
  ];

  const fetchData = async (year, quarter) => {
    const response = await axios.get(
      `https://aang.umkmpalangan.my.id/result?year=${year}&quarter=${quarter}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    setDataResult(response.data);
  };

  useEffect(() => {
    fetchData(year, quarter);
  }, [year, quarter]);

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);

    let filteredData = dataResult.filter(
      (data) => data.tahun === year && data.triwulan === quarter
    );

    let data = {
      labels: ["Kandidat 1", "Kandidat 2", "Kandidat 3"],
      datasets: [
        {
          data: [0, 0, 0],
          backgroundColor: [
            documentStyle.getPropertyValue("--yellow-500"),
            documentStyle.getPropertyValue("--blue-500"),
            documentStyle.getPropertyValue("--green-500"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--yellow-400"),
            documentStyle.getPropertyValue("--blue-400"),
            documentStyle.getPropertyValue("--green-400"),
          ],
        },
      ],
    };

    if (filteredData.length > 0) {
      data = {
        labels: filteredData.map((data) => data.nomor_kandidat),
        datasets: [
          {
            data: filteredData.map((data) => data.result_scores),
            backgroundColor: [
              documentStyle.getPropertyValue("--yellow-500"),
              documentStyle.getPropertyValue("--blue-500"),
              documentStyle.getPropertyValue("--green-500"),
            ],
            hoverBackgroundColor: [
              documentStyle.getPropertyValue("--yellow-400"),
              documentStyle.getPropertyValue("--blue-400"),
              documentStyle.getPropertyValue("--green-400"),
            ],
          },
        ],
      };
    }

    const options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, [dataResult, year, quarter]);

  return (
    <div className="card flex justify-center items-center w-full gap-4">
      <div className="flex gap-4 mb-4">
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
      <div className="p-4 w-full md:w-1/2 rounded-md border-2 shadow-lg relative">
        <div className="absolute top-0 left-0 rounded-br-badge rounded-tl-[5px] px-4 bg-[#E9781A] text-white">
          <span>Pegawai Teladan</span>
        </div>
        <Chart type="pie" data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
