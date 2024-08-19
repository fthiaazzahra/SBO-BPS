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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://aang.umkmpalangan.my.id/kartesius/${selectedIndikator}/${selectedTahun}/${selectedTriwulan}`
        );
        const data = response.data.data;

        if (data && data.length > 0) {
          setDataPoints(data.slice(0, 100)); // Ambil hanya 100 data pertama misalnya
        } else {
          setDataPoints([]); // Jika data kosong, set ke array kosong
        }
      } catch (error) {
        console.error(error);
        setDataPoints([]); // Jika terjadi kesalahan, set dataPoints ke array kosong
      } finally {
        setLoading(false);
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
    if (isMobile() || dataPoints.length > 100) return {}; // Batasi jumlah anotasi yang dibuat

    const annotationLines = dataPoints.reduce((annotations, point, index) => {
      let offsetX = (index % 2 === 0 ? 1 : -1) * 0.01; // Adjusted offset
      let offsetY = (index % 2 === 0 ? 1 : -1) * 0.09; // Adjusted offset

      const labelX = point.x + offsetX;
      const labelY = point.y + offsetY;

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

      annotations[`label${index}`] = {
        type: "label",
        xValue: labelX,
        yValue: labelY,
        backgroundColor: "white",
        borderColor: "white",
        content: `${point.label}; ${point.x.toFixed(2)}; ${point.y.toFixed(2)}`,
        font: {
          size: 10,
          weight: "bold",
          color: "white",
        },
      };

      return annotations;
    }, {});

    // Tambahkan garis vertikal dan horizontal di tengah
    const midX = (3 + 4) / 2;
    const midY = (3.5 + 4) / 2;

    annotationLines["verticalLine"] = {
      type: "line",
      xMin: midX,
      xMax: midX,
      yMin: 3.5,
      yMax: 4,
      borderColor: "white",
      borderWidth: 2,
      label: {
        enabled: true,
        content: "Mid X",
        position: "start",
        color: "red",
      },
    };

    annotationLines["horizontalLine"] = {
      type: "line",
      xMin: 3,
      xMax: 4,
      yMin: midY,
      yMax: midY,
      borderColor: "white",
      borderWidth: 2,
      label: {
        enabled: true,
        content: "Mid Y",
        position: "",
        color: "red",
      },
    };

    return annotationLines;
  };

  const data = {
    datasets: [
      {
        label: "Grafik Perilaku Kerja Pegawai Tahun 2024",
        data: dataPoints,
        backgroundColor: "white",
        borderColor: "white",
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
          stepSize: 0.1,
          beginAtZero: false,
        },
        min: 3,
        max: 4,
      },
      y: {
        title: {
          display: true,
          text: "Harapan",
          color: "white",
        },
        ticks: {
          color: "white",
          stepSize: 0.1,
          beginAtZero: false,
        },
        min: 3.5,
        max: 4,
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

  if (loading) {
    return (
      <div className="text-white w-full flex justify-center">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  if (dataPoints.length === 0) {
    return (
      <div className="text-white text-center">
        Tidak ada data yang tersedia.
      </div>
    );
  }

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <Scatter className="p-4 rounded-md" data={data} options={options} />
    </div>
  );
};

export default ScatterChart;
