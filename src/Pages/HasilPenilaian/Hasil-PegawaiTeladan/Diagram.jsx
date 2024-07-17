import { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

export default function Diagram() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      labels: ["Kandidat 1", "Kandidat 2", "Kandidat 3"],
      datasets: [
        {
          data: [540, 325, 400],
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
  }, []);

  return (
    <div className="card flex justify-center items-center w-full gap-4">
      <div className="p-4 w-full md:w-1/2 rounded-md border-2 shadow-lg relative">
        <div className="absolute top-0 left-0 rounded-br-badge rounded-tl-[5px] px-4 bg-[#E9781A] text-white">
          <span>Pegawai Teladan</span>
        </div>
        <Chart
          type="pie"
          data={chartData}
          options={chartOptions}
          className=""
        />
      </div>
    </div>
  );
}
