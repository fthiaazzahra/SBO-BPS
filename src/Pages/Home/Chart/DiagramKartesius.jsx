import { useState } from "react";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  annotationPlugin
);

const ScatterChart = () => {
  const yearlyData = [
    {
      year: 2024,
      triwulan: "Triwulan 1",
      data: [
        { x: 3.35, y: 3.77, label: "Priker-1" },
        { x: 3.36, y: 3.79, label: "Priker-2" },
        { x: 3.4, y: 3.79, label: "Priker-3" },
        { x: 3.37, y: 3.77, label: "Priker-4" },
        { x: 3.42, y: 3.86, label: "Priker-5" },
        { x: 3.44, y: 3.79, label: "Priker-6" },
        { x: 3.49, y: 3.77, label: "Priker-7" },
      ],
    },
    {
      year: 2022,
      triwulan: "Triwulan 2",
      data: [
        { x: 3.33, y: 3.75, label: "Priker-1" },
        { x: 3.34, y: 3.78, label: "Priker-2" },
        { x: 3.38, y: 3.76, label: "Priker-3" },
        { x: 3.35, y: 3.74, label: "Priker-4" },
        { x: 3.41, y: 3.83, label: "Priker-5" },
        { x: 3.43, y: 3.76, label: "Priker-6" },
        { x: 3.47, y: 3.75, label: "Priker-7" },
      ],
    },
    {
      year: 2023,
      triwulan: "Triwulan 3",
      data: [
        { x: 3.32, y: 3.73, label: "Priker-1" },
        { x: 3.33, y: 3.77, label: "Priker-2" },
        { x: 3.37, y: 3.75, label: "Priker-3" },
        { x: 3.34, y: 3.72, label: "Priker-4" },
        { x: 3.4, y: 3.82, label: "Priker-5" },
        { x: 3.42, y: 3.75, label: "Priker-6" },
        { x: 3.46, y: 3.73, label: "Priker-7" },
      ],
    },
    {
      year: 2024,
      triwulan: "Triwulan 1",
      data: [
        { x: 3.31, y: 3.71, label: "Priker-1" },
        { x: 3.32, y: 3.76, label: "Priker-2" },
        { x: 3.36, y: 3.74, label: "Priker-3" },
        { x: 3.33, y: 3.71, label: "Priker-4" },
        { x: 3.39, y: 3.81, label: "Priker-5" },
        { x: 3.41, y: 3.74, label: "Priker-6" },
        { x: 3.45, y: 3.71, label: "Priker-7" },
      ],
    },
  ];

  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedTriwulan, setSelectedTriwulan] = useState("Triwulan 1");

  const dataPoints =
    yearlyData.find(
      (yearData) =>
        yearData.year === selectedYear && yearData.triwulan === selectedTriwulan
    )?.data || [];

  const data = {
    datasets: [
      {
        label: `Grafik Perilaku Kerja Pegawai Tahun ${selectedYear}`,
        data: dataPoints,
        backgroundColor: "rgba(54, 162, 235, 1)",
        borderColor: "rgba(54, 162, 235, 1)",
        pointRadius: 5,
      },
    ],
  };

  const isMobile = () => window.innerWidth <= 580; // Atur breakpoint untuk mobile sesuai kebutuhan

  const getAnnotations = (dataPoints) => {
    if (isMobile()) return {};

    return {
      midLineX: {
        type: "line",
        xMin: 3.4,
        xMax: 3.4,
        borderColor: "white",
        borderWidth: 1,
        label: {
          content: "Mid X",
          enabled: true,
          position: "end",
          color: "white",
        },
      },
      midLineY: {
        type: "line",
        yMin: 3.8,
        yMax: 3.8,
        borderColor: "white",
        borderWidth: 1,
        label: {
          content: "Mid Y",
          enabled: true,
          position: "end",
          color: "white",
        },
      },
      ...dataPoints.reduce((annotations, point, index) => {
        let offsetX = index % 2 === 0 ? 0.02 : -0.02;
        let offsetY = index % 2 === 0 ? 0.02 : -0.02;

        if (point.label === "Priker-1") {
          offsetX = -0.02;
          offsetY = 0.03;
        }
        if (point.label === "Priker-2") {
          offsetX = 0.02;
          offsetY = 0.03;
        }
        if (point.label === "Priker-3") {
          offsetX = 0.025;
          offsetY = 0.03;
        }
        if (point.label === "Priker-4") {
          offsetX = 0.02;
          offsetY = -0.03;
        }
        if (point.label === "Priker-5") {
          offsetX = 0.03;
          offsetY = 0.03;
        }
        if (point.label === "Priker-6") {
          offsetX = 0.03;
          offsetY = 0.03;
        }
        if (point.label === "Priker-7") {
          offsetX = -0.03;
          offsetY = -0.03;
        }

        const labelX = point.x + offsetX;
        const labelY = point.y + offsetY;

        annotations[`label${index}`] = {
          type: "label",
          xValue: labelX,
          yValue: labelY,
          backgroundColor: "rgba(255,255,255,255)",
          borderColor: "rgba(0,0,0,0)",
          content: `${point.label}; ${point.x.toFixed(2)}; ${point.y.toFixed(
            2
          )}`,
          font: {
            size: 10,
            weight: "bold",
            color: "black",
          },
        };

        annotations[`line${index}`] = {
          type: "line",
          xMin: point.x,
          xMax: labelX,
          yMin: point.y,
          yMax: labelY,
          borderColor: "white",
          borderWidth: 1,
          borderDash: [2, 2],
          arrowHeads: {
            end: {
              type: "arrow",
              size: 6,
              fill: true,
            },
          },
        };

        return annotations;
      }, {}),
    };
  };

  const options = {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "Kinerja",
          color: "white",
          font: {
            weight: "bold",
          },
        },
        ticks: {
          color: "white",
        },
        min: 3.3,
        max: 3.5,
      },
      y: {
        title: {
          display: true,
          text: "Harapan",
          color: "white",
        },
        ticks: {
          color: "white",
        },
        min: 3.7,
        max: 3.9,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.raw.label || "";
            if (label) {
              label += ": ";
            }
            label += `${context.raw.x.toFixed(2)}, ${context.raw.y.toFixed(2)}`;
            return label;
          },
        },
      },
      annotation: {
        annotations: getAnnotations(dataPoints),
      },
    },
  };

  window.addEventListener("resize", () => {
    options.plugins.annotation.annotations = getAnnotations(dataPoints);
    // Re-render chart here, depends on how you implement the chart, for example:
    // chartInstance.update();
  });

  return (
    <div>
      <div className="flex gap-4 items-center justify-center md:justify-start md:pl-10"></div>
      <Scatter className=" p-4 rounded-md" data={data} options={options} />
    </div>
  );
};

export default ScatterChart;
