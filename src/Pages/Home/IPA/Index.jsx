import Footer from "../../../Components/Navbar/Footer/Footer";
import Navbar from "../../../Components/Navbar/Index";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import ScatterChart from "./Chart/DiagramKartesius";
import "animate.css";
import ScatterChart from "./DiagramKartesius";

import { Dropdown } from "primereact/dropdown";

// import Triwulan from "./DropdownTriwulan";

export default function ApaPage() {
  const [selectedDate, setSelectedDate] = useState("2024");
  const [selectedIndikator, setSelectedIndikator] = useState("PriKer");
  const [selectedTriwulan, setSelectedTriwulan] = useState("1");
  console.log(selectedTriwulan);
  console.log(selectedIndikator);
  return (
    <div className="">
      <Navbar />
      <div className="w-full pt-[90px]">
        <section className="bg-white text-black">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Index Performance Analysis (IPA)
              </h2>
            </div>
          </div>
        </section>
        <div className="bg-[#002B6A]">
          <div className="flex w-full justify-center items-center py-4 gap-4">
            <div className="card flex justify-content-center">
              <form className="max-w-sm mx-auto">
                <select
                  value={selectedIndikator}
                  onChange={(e) => setSelectedIndikator(e.target.value)}
                  id="countries"
                  className="rounded-md"
                >
                  <option selected>Indikator</option>
                  <option>PriKer</option>
                  <option value="LeadBO">Lead-BO</option>
                  <option value="PeBO">People-BO</option>
                  <option value="SysBO">System-BO</option>
                </select>
              </form>
            </div>
            <div className="card flex justify-content-center">
              <DatePicker
                value={selectedDate}
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className=" h-10 rounded-md w-28  flex items-center text-black text-center  p-2.5 "
                showYearPicker
                dateFormat="yyyy"
              />
            </div>
            <div className="card flex justify-content-center">
              <form className="max-w-sm mx-auto">
                <select
                  value={selectedTriwulan}
                  onChange={(e) => setSelectedTriwulan(e.target.value)}
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Triwulan</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </form>
            </div>
          </div>
          <ScatterChart
            selectedIndikator={selectedIndikator}
            selectedTahun={selectedDate}
            selectedTriwulan={selectedTriwulan}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
