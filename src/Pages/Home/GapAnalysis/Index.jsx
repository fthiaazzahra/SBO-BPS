import Footer from "../../../Components/Navbar/Footer/Footer";
import Navbar from "../../../Components/Navbar/Index";

// import ScatterChart from "./Chart/DiagramKartesius";
import "animate.css";

import Tables from "../../HasilPenilaian/Hasil-SBO/Table";

import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
// import Triwulan from "./DropdownTriwulan";

export default function GapAnalysis() {
  const [selectedTriwulan, setSelectedTriwulan] = useState("1");
  console.log(selectedTriwulan);

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const currentYear = new Date().getFullYear();
  const startYear = 1900;
  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, i) => currentYear - i
  );
  return (
    <div className="">
      <Navbar />
      <div className="w-full pt-[90px]">
        <section className="bg-white text-black">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">Gap Analysis</h2>

              <p className="mt-4 text-black">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae
                aperiam fugit consequuntur saepe laborum.
              </p>
            </div>
            <div className="flex gap-4 pb-4">
              <Dropdown
                style={{
                  border: "1px solid #9CA3AF",
                  borderRadius: "6px",
                }}
                id="year-dropdown"
                value={selectedYear}
                options={years}
                onChange={(e) => setSelectedYear(e.value)}
                placeholder="Pilih Tahun"
              />
              <Dropdown
                style={{
                  height: "40px",
                  border: "1px solid #D0D5DD",
                  borderRadius: "8px",
                }}
                value={selectedTriwulan}
                onChange={(e) => setSelectedTriwulan(e.value)}
                options={["1", "2", "3", "4"]}
                placeholder="Triwulan"
              />
            </div>
            <Tables tahun={selectedYear} triwulan={selectedTriwulan} />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
