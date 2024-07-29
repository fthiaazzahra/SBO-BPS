/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
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
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  annotationPlugin
);

const ScatterChart = ({
  selectedIndikator,
  selectedTahun,
  selectedTriwulan,
}) => {
  const [dataPoints, setDataPoints] = useState([]);
  const [annotations, setAnnotations] = useState({});
  const [xRange, setXRange] = useState({ min: 0, max: 40 });
  const [yRange, setYRange] = useState({ min: 0, max: 40 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/kartesius/${selectedIndikator}/${selectedTahun}/${selectedTriwulan}`
        );
        const data = response.data.data;
        console.log("API Data:", data);
        setDataPoints(data);

        // Update the range based on the data points
        const xValues = data.map((point) => point.x);
        const yValues = data.map((point) => point.y);
        setXRange({
          min: Math.min(...xValues) - 1,
          max: Math.max(...xValues) + 1,
        });
        setYRange({
          min: Math.min(...yValues) - 1,
          max: Math.max(...yValues) + 1,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [selectedIndikator, selectedTahun, selectedTriwulan]);

  useEffect(() => {
    const updateAnnotations = () => {
      setAnnotations(getAnnotations(dataPoints));
    };

    updateAnnotations();
    const handleResize = () => {
      updateAnnotations();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dataPoints]);

  const isMobile = () => window.innerWidth <= 580;

  const getAnnotations = (dataPoints) => {
    if (isMobile()) return {};

    return {
      midLineX: {
        type: "line",
        xMin: (xRange.min + xRange.max) / 2,
        xMax: (xRange.min + xRange.max) / 2,
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
        yMin: (yRange.min + yRange.max) / 2,
        yMax: (yRange.min + yRange.max) / 2,
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
        let offsetX = 0;
        let offsetY = 0;

        // if (point.label.startsWith("LeadBO")) {
        //   offsetX = 0.02;
        //   offsetY = 0.03;
        // }

        const labelX = point.x + offsetX;
        const labelY = point.y + offsetY;

        annotations[`label${index}`] = {
          type: "label",
          xValue: labelX,
          yValue: labelY,
          backgroundColor: "rgba(255, 255, 255, 1)",
          borderColor: "rgba(0, 0, 0, 0)",
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
        };

        return annotations;
      }, {}),
    };
  };

  const data = {
    datasets: [
      {
        label: "Grafik Perilaku Kerja Pegawai Tahun 2024",
        data: dataPoints,
        backgroundColor: "rgba(54, 162, 235, 1)",
        borderColor: "rgba(54, 162, 235, 1)",
        pointRadius: 5,
      },
    ],
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
        min: xRange.min,
        max: xRange.max,
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
        min: yRange.min,
        max: yRange.max,
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
        annotations: annotations,
      },
    },
  };

  return (
    <div>
      <Scatter className="p-4 rounded-md" data={data} options={options} />
    </div>
  );
};

export default ScatterChart;
