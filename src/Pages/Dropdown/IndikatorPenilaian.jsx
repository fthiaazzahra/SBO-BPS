import { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import { useNavigate } from "react-router-dom";

export default function DropdownIndikator() {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState(null);

  const cities = [
    { name: "Dasar Hukum", code: "dasar-hukum" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  useEffect(() => {
    if (selectedCity) {
      navigate(`/${selectedCity.code}`);
    }
  }, [selectedCity, navigate]);

  return (
    <div className="card flex flex-column align-items-center">
      <Dropdown
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={cities}
        optionLabel="name"
        placeholder="indikator penilaian"
        checkmark={true}
        highlightOnSelect={false}
        className="custom-placeholder uppercase bg-transparent text-sm" // Tambahkan kelas khusus di sini
      />
    </div>
  );
}
