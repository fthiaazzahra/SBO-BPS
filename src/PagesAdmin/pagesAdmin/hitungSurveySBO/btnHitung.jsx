import { useState } from "react";
import axios from "axios";
import { Dropdown } from "primereact/dropdown";

const ProgressButton = () => {
  const [indikatorValue, setIndikatorValue] = useState("");
  const [triwulanValue, setTriwulanValue] = useState("");
  const [selectedYear, setSelectedYear] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const triwulan = ["1", "2", "3", "4"];
  const indikator = ["PriKer", "LeadBO", "PeBO", "SysBO"];
  const handleClick = async () => {
    setLoading(true);
    setProgress(0);

    try {
      const response = await axios.get(
        `https://aang.umkmpalangan.my.id/average-scores/${indikatorValue}/${triwulanValue}/${selectedYear}`,
        {
          onDownloadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(percentCompleted);
          },
        }
      );
      console.log(response.data); // Handle API response
      alert(response.data);
    } catch (error) {
      console.error(error); // Handle error
      alert("Survey Sudah DI hitung");
    } finally {
      setLoading(false);
    }
  };

  const currentYear = new Date().getFullYear();
  const startYear = 1900;
  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, i) => currentYear - i
  );

  return (
    <div className="relative flex flex-col items-center justify-center bg-gray-100">
      <div className="flex gap-4 py-4">
        <Dropdown
          style={{
            width: "100%",
            border: "1px solid #9CA3AF",
            borderRadius: "6px",
          }}
          value={indikatorValue}
          options={indikator}
          onChange={(e) => setIndikatorValue(e.value)}
          placeholder="Select Indikator"
        />
        <Dropdown
          style={{
            width: "100%",
            border: "1px solid #9CA3AF",
            borderRadius: "6px",
          }}
          value={triwulanValue}
          options={triwulan}
          onChange={(e) => setTriwulanValue(e.value)}
          placeholder="Select Triwulan"
        />

        <Dropdown
          style={{
            width: "100%",
            border: "1px solid #9CA3AF",
            borderRadius: "6px",
          }}
          id="year-dropdown"
          value={selectedYear}
          options={years}
          onChange={(e) => setSelectedYear(e.value)}
          placeholder="Pilih Tahun"
          className="w-full"
        />
      </div>
      <button
        onClick={handleClick}
        className="relative w-24 h-24 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold disabled:opacity-50"
        disabled={loading}
      >
        {loading ? (
          <div className="relative flex items-center justify-center">
            <div
              className="absolute inset-0 border-4 border-blue-700 rounded-full border-t-transparent animate-spin"
              style={{ borderWidth: "8px" }}
            ></div>
            <span className="relative">{progress}%</span>
          </div>
        ) : (
          "Hitung"
        )}
      </button>
    </div>
  );
};

export default ProgressButton;
