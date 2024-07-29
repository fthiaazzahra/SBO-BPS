import { useState } from "react";
import { Dropdown } from "primereact/dropdown";

export default function IndikatorDropdown() {
  const [selectedCity, setSelectedCity] = useState("1");
  const cities = [
    { name: "Priker", code: "1" },
    { name: "Lead-BO", code: "2" },
    { name: "People-BO", code: "3" },
    { name: "System-BO", code: "4" },
  ];

  return (
    <div className="card flex justify-content-center">
      <Dropdown
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={cities}
        optionLabel="name"
        placeholder={"Indikator"}
        className=" h-6 w-full md:w-14rem flex items-center  placeholder-white text-white"
      />
    </div>
  );
}
