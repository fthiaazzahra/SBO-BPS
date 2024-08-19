import { Card, Input, Button, Typography } from "@material-tailwind/react";
import axios from "axios";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";

export function KipUp() {
  const [kandidat, setkandidat] = useState("");
  const [quarter, setQuarter] = useState("");
  const [nama, setNamaKandidat] = useState("");
  const [nilai_kip_app, setNilai_kip_app] = useState(0);
  const [nilai_presensi, setNilai_presensi] = useState(0);

  console.log(kandidat);
  console.log(quarter);
  console.log(nama);

  const kandidats = ["Kandidat 1", "Kandidat 2", "Kandidat 3", "Kandidat 4"];
  const namaKandidat = [
    "Dudi Suryadi, S.E, M.P., M.Sc",
    "Ika Nuryani, SST, M.Stat",
    "Nani Hendrayani, S.IP",
  ];
  const quarters = [
    { label: "Q1", value: 1 },
    { label: "Q2", value: 2 },
    { label: "Q3", value: 3 },
    { label: "Q4", value: 4 },
  ];
  const hitungNilaiSurvey = async () => {
    try {
      await axios.get("https://aang.umkmpalangan.my.id/AVG30", {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      });
      alert("Nilai Teladan Berhasil");
    } catch (error) {
      alert(error);
    }
  };

  const hitungNilaiTambah = async () => {
    try {
      await axios.post(
        "https://aang.umkmpalangan.my.id/nilai_tambah_insert",
        {
          triwulan: quarter,
          nomor_kandidat: kandidat,
          nilai_kip_app: nilai_kip_app,
          nilai_presensi: nilai_presensi,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      alert("Nilai Teladan Berhasil");
    } catch (error) {
      alert(error);
    }
  };

  const hitungResult = async () => {
    try {
      await axios.get("https://aang.umkmpalangan.my.id/result", {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      });
      alert("Nilai Teladan Berhasil");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <Card color="transparent" shadow={false} className="">
      <Typography variant="h4" color="blue-gray">
        Tambah Nilai Tambah
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className=" mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className=" w-full py-4">
          <a
            onClick={hitungNilaiSurvey}
            className="group flex items-center justify-between gap-4 rounded-lg border border-indigo-600 bg-indigo-600 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"
          >
            <span className="font-medium text-white transition-colors group-hover:text-indigo-600 group-active:text-indigo-500">
              Hitung Nilai Survey
            </span>

            <span className="shrink-0 rounded-full border border-current bg-white p-2 text-indigo-600 group-active:text-indigo-500">
              <svg
                className="size-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </a>
        </div>
        <div className="mb-1 flex flex-col gap-6">
          <Dropdown
            style={{
              width: "100%",
              border: "1px solid #9CA3AF",
              borderRadius: "6px",
            }}
            value={kandidat}
            options={kandidats}
            onChange={(e) => setkandidat(e.value)}
            placeholder="Select kandidat"
          />
          <Dropdown
            style={{
              width: "100%",
              border: "1px solid #9CA3AF",
              borderRadius: "6px",
            }}
            value={quarter}
            options={quarters}
            onChange={(e) => setQuarter(e.value)}
            placeholder="Select triwulan"
          />
          <Dropdown
            style={{
              width: "100%",
              border: "1px solid #9CA3AF",
              borderRadius: "6px",
            }}
            value={nama}
            options={namaKandidat}
            onChange={(e) => setNamaKandidat(e.value)}
            placeholder="Select nama kandidat"
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Kip-App
          </Typography>
          <Input
            size="lg"
            value={nilai_kip_app}
            onChange={(e) => setNilai_kip_app(e.target.value)}
            placeholder="input nilai kip-app"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Nilai Presensi
          </Typography>
          <Input
            value={nilai_presensi}
            onChange={(e) => setNilai_presensi(e.target.value)}
            size="lg"
            placeholder="input nilai presensi"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>

        <Button onClick={hitungNilaiTambah} className="mt-6" fullWidth>
          Hitung Nilai Tambah
        </Button>
        <Button onClick={hitungResult} className="mt-6" fullWidth>
          Hitung Nilai Result
        </Button>
      </form>
      <br />
      <br />
    </Card>
  );
}
