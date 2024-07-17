import { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import { useNavigate } from "react-router-dom";

export default function DropdownFormPenilaian() {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState(null);

  const cities = [
    {
      name: "Penilaian Budaya Organisasi",
      code: "penilaian-budaya-organisasi",
    },
    { name: "Penilaian Pegawai Teladan", code: "RM" },
  ];

  const handleSelection = (e) => {
    navigate(`/${e.value.code}`);
  };

  return (
    <div className="card flex flex-column align-items-center">
      <Dropdown
        value={selectedCity}
        onChange={handleSelection}
        options={cities}
        optionLabel="name"
        placeholder="Form penilaian"
        checkmark={true}
        highlightOnSelect={false}
        className="custom-placeholder uppercase bg-transparent text-sm" // Tambahkan kelas khusus di sini
      />
    </div>
  );
}
