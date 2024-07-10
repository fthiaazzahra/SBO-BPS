import { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import { useNavigate } from "react-router-dom";

export default function DropdownKosepDefinisi() {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState(null);

  const cities = [
    { name: "Dasar Hukum", code: "dasar-hukum" },
    { name: "Nilai-nilai Inti BPS", code: "nilai-nilai" },
    { name: "Model Implementasi", code: "LDN" },
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
        placeholder="KONSEP DEFINISI"
        checkmark={true}
        highlightOnSelect={false}
        className="custom-placeholder bg-transparent text-sm" // Tambahkan kelas khusus di sini
      />
    </div>
  );
}
