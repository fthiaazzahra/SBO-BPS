import { useState } from "react";
import { Dropdown } from "primereact/dropdown";

export default function DropTahun() {
  const [selectedCity, setSelectedCity] = useState("2024");
  const cities = [
    { name: "2024", code: "NY" },
    { name: "2023", code: "RM" },
  ];

  return (
    <div className="card flex justify-content-center">
      <Dropdown
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={cities}
        optionLabel="name"
        placeholder={selectedCity}
        className=" h-6 w-full md:w-14rem flex items-center"
      />
    </div>
  );
}
