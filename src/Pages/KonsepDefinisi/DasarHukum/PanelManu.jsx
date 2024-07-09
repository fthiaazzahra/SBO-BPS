import { PanelMenu } from "primereact/panelmenu";
import { useNavigate } from "react-router-dom";

export default function PanelManuDasarHukum() {
  const navigate = useNavigate();

  const items = [
    {
      label: "Konsep Definisi",
      icon: "pi pi-file",
      items: [
        {
          label: "Dasar Hukum",
          icon: "pi pi-file",
          command: () => {
            navigate("/dasar-hukum");
          },
        },
        {
          label: "Nilai-nilai Inti BPS",
          icon: "pi pi-image",
          command: () => {
            navigate("/");
            window.location.reload();
          },
        },
        {
          label: "Model Implementasi",
          icon: "pi pi-image",
        },
      ],
    },
    {
      label: "Cloud",
      icon: "pi pi-cloud",
      items: [
        {
          label: "Upload",
          icon: "pi pi-cloud-upload",
        },
        {
          label: "Download",
          icon: "pi pi-cloud-download",
        },
        {
          label: "Sync",
          icon: "pi pi-refresh",
        },
      ],
    },
    {
      label: "Devices",
      icon: "pi pi-desktop",
      items: [
        {
          label: "Phone",
          icon: "pi pi-mobile",
        },
        {
          label: "Desktop",
          icon: "pi pi-desktop",
        },
        {
          label: "Tablet",
          icon: "pi pi-tablet",
        },
      ],
    },
  ];

  return (
    <div className="card hidden md:flex justify-content-center">
      <PanelMenu model={items} className="w-full md:w-20rem" />
    </div>
  );
}
