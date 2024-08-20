import { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import axios from "axios";

const CardHasil = () => {
  const [dataResult, setDataResult] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [quarter, setQuarter] = useState(1);

  const years = [2021, 2022, 2023, 2024];
  const quarters = [
    { label: "Triwulan 1", value: 1 },
    { label: "Triwulan 2", value: 2 },
    { label: "Triwulan 3", value: 3 },
    { label: "Triwulan 4", value: 4 },
  ];

  // eslint-disable-next-line no-unused-vars
  const fetchData = async (year, quarter) => {
    try {
      const response = await axios.get(
        "https://aang.umkmpalangan.my.id/result",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setDataResult(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDataResult([]);
    }
  };

  useEffect(() => {
    fetchData(year, quarter);
  }, [year, quarter]);

  useEffect(() => {
    const filtered = dataResult.filter(
      (item) => item.tahun === year && item.triwulan === quarter
    );
    setFilteredData(filtered);
  }, [dataResult, year, quarter]);

  const renderCard = (data) => (
    <div
      key={data.nomor_kandidat}
      className="max-w-sm h-[400px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative"
    >
      <a
        href="#"
        className="relative block rounded-tr-3xl border border-gray-100"
      >
        <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-green-500 px-6 py-4 font-medium uppercase tracking-widest text-white">
          {data.result_scores}
        </span>

        <img
          src={"/img/man_5-1024.webp"}
          alt={data.nama_kandidat}
          className="h-80 w-full rounded-tr-3xl object-cover"
        />
      </a>
      <div className="mt-4 absolute w-full bottom-0 rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900">
        {data.nama_kandidat}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-4 mb-4">
        <Dropdown
          value={year}
          options={years.map((y) => ({ label: y, value: y }))}
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
      <div className="grid md:grid-cols-3 gap-4">
        {filteredData.length > 0 ? (
          filteredData.map((data) => renderCard(data))
        ) : (
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
            <div className="p-5 text-center">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Tidak ada data untuk Tahun {year} Triwulan {quarter}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardHasil;
