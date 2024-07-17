import { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function DropdownHasil() {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState(null);

  const cities = [
    { name: "Budaya Organisasi", code: "dasar-hukum" },
    { name: "Pegawai Teladan", code: "RM" },
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
        placeholder="Hasil penilaian"
        checkmark={true}
        highlightOnSelect={false}
        className="custom-placeholder uppercase bg-transparent text-sm " // Tambahkan kelas khusus di sini
      />
    </div>
  );
}
