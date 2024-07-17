import { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

export default function Diagram1() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      labels: ["Harapan", "Kinerja"],
      datasets: [
        {
          data: [540, 325],
          backgroundColor: [
            documentStyle.getPropertyValue("--yellow-500"),
            documentStyle.getPropertyValue("--blue-500"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--yellow-400"),
            documentStyle.getPropertyValue("--blue-400"),
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
    <div className="card grid md:grid-cols-2 lg:grid-cols-4 md:py-8 overflow-auto gap-4">
      <div className="p-4 rounded-md border-2 shadow-lg relative">
        <div className="absolute top-0 left-0 border rounded-br-badge rounded-tl-[5px] px-4 bg-[#E9781A] text-white">
          <span>Priker</span>
        </div>
        <Chart
          type="pie"
          data={chartData}
          options={chartOptions}
          className=""
        />
      </div>
      <div className="p-4 rounded-md border-2 shadow-lg relative">
        <div className="absolute top-0 left-0 border rounded-br-badge rounded-tl-[5px] px-4 bg-[#E9781A] text-white">
          <span>Lead-BO</span>
        </div>
        <Chart
          type="pie"
          data={chartData}
          options={chartOptions}
          className=""
        />
      </div>
      <div className="p-4 rounded-md border-2 shadow-lg relative">
        <div className="absolute top-0 left-0 border rounded-br-badge rounded-tl-[5px] px-4 bg-[#E9781A] text-white">
          <span>People</span>
        </div>
        <Chart
          type="pie"
          data={chartData}
          options={chartOptions}
          className=""
        />
      </div>
      <div className="p-4 rounded-md border-2 shadow-lg relative">
        <div className="absolute top-0 left-0 border rounded-br-badge rounded-tl-[5px] px-4 bg-[#E9781A] text-white">
          <span>System</span>
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
