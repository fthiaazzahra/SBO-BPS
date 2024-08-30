import axios from "axios";
import { Dropdown } from "primereact/dropdown";
import { useEffect, useState } from "react";

const PegawaiTeladan = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const currentYear = new Date().getFullYear();
  const startYear = 1900;
  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, i) => currentYear - i
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://aang.umkmpalangan.my.id/pemenang",
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setData(response.data);
        setFilteredData(
          response.data.filter((item) => item.tahun === selectedYear)
        );
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [selectedYear]); // Add selectedYear as a dependency

  useEffect(() => {
    setFilteredData(data.filter((item) => item.tahun === selectedYear));
  }, [data, selectedYear]);

  return (
    <div className="flex flex-col gap-4">
      <Dropdown
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.value)}
        options={years}
        optionLabel="name"
        placeholder={"Pilih Tahun"}
        className="h-6 w-[14rem] md:w-14rem flex items-center"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {filteredData.map((item) => {
          const bufferArray = item.foto.data;
          const blob = new Blob([new Uint8Array(bufferArray)], {
            type: "image/jpeg",
          });
          const imageUrl = URL.createObjectURL(blob);
          return (
            <a
              key={item.id}
              href="#"
              className="group relative block overflow-hidden border rounded-md shadow-lg"
            >
              <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                <span className="sr-only">Wishlist</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>

              <img
                src={imageUrl}
                alt=""
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />

              <div className="relative border border-gray-100 bg-white p-6">
                <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                  New
                </span>

                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {item.nama}
                </h3>

                <form className="mt-4">
                  <button className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">
                    Pegawai Teladan Triwulan {item.triwulan} tahun {item.tahun}
                  </button>
                </form>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default PegawaiTeladan;
