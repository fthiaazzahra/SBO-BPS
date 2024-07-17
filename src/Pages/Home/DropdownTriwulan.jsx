import { useState } from "react";
import { Dropdown } from "primereact/dropdown";

export default function Triwulan() {
  const [selectedCity, setSelectedCity] = useState("1");
  const cities = [
    { name: "1", code: "1" },
    { name: "2", code: "2" },
    { name: "3", code: "3" },
    { name: "4", code: "4" },
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
