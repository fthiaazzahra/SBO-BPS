import { Dropdown } from "primereact/dropdown";
import { useNavigate } from "react-router-dom";

export default function DropdownKosepDefinisi() {
  const navigate = useNavigate();

  const cities = [
    { name: "Dasar Hukum", code: "dasar-hukum" },
    { name: "Nilai-nilai Inti BPS", code: "nilai-nilai" },
    { name: "Model Implementasi", code: "LDN" },
  ];

  const handleSelection = (e) => {
    navigate(`/${e.value.code}`);
  };

  return (
    <div className=" card flex flex-column align-items-center">
      <Dropdown
        onChange={handleSelection} // Panggil handleSelection untuk navigasi
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
