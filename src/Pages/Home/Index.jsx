import Footer from "../../Components/Navbar/Footer/Footer";
import Navbar from "../../Components/Navbar/Index";

import ScatterChart from "./Chart/DiagramKartesius";
import "animate.css";
import DropTahun from "./DropdownTahun";
import Triwulan from "./DropdownTriwulan";
import PegawaiTeladan from "./Pegawai-Teladan/Index";
export default function HomePage() {
  return (
    <div className="">
      <Navbar />
      <div className="w-full pt-[90px]">
        <section className="relative h-screen  bg-[#E9781A] z-0">
          <img
            src="/img/gedung.png"
            alt="Logo BPS"
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover z-[-1]"
          />
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>{" "}
          {/* Overlay */}
          <div className="relative px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 z-10 flex items-center justify-center  h-screen gap-4">
            <div className="">
              <h1 className="mb-4 text-2xl md:text-3xl md:font-bold tracking-tight leading-none text-white animate__animated animate__fadeInDown">
                Selamat Datang di Portal
              </h1>
              <div className="my-10">
                <h1 className="font-['Roboto'] mb-4  font-extrabold text-4xl tracking-tight leading-none text-white  animate__animated animate__fadeInLeft">
                  SISTEM BUDAYA ORGANISASI
                </h1>
                <h1 className="mb-4 text-xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-none text-white  animate__animated animate__fadeInRight">
                  BPS KABUPATEN TASIKMALAYA
                </h1>
              </div>
              <h1 className="mb-4 text-lg md:text-2xl font-semibold tracking-tight leading-none text-white italic animate__animated animate__fadeInUp">
                Perilaku kerja, Leadership, People, dan Sistem Budaya Organisasi
              </h1>
            </div>
          </div>
        </section>
        <div className="flex flex-col gap-8">
          <div className="flex justify-center items-center mt-4">
            <div className="flex items-center">
              <h1>Tahun : </h1>
              <DropTahun />
            </div>
            <div className="flex items-center">
              <h1>Triwulan : </h1>
              <Triwulan />
            </div>
          </div>
          <div className="w-full bg-[#002B6A] grid grid-cols-1 lg:grid-cols-2 pt-4">
            <div className="border-r">
              <div className="border-b">
                <ScatterChart />
              </div>
              <div className="border-t">
                <ScatterChart />
              </div>
            </div>
            <div className="border-l">
              <div className="border-b">
                <ScatterChart />
              </div>
              <div className="border-t">
                <ScatterChart />
              </div>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center px-10 pb-10">
            <h1 className="text-3xl font-bold uppercase border-b-8 border-[#E9781A]">
              Pegawai Teladan
            </h1>
            <div className="flex justify-center items-center mt-4 mb-4">
              <div className="flex items-center">
                <h1>Tahun : </h1>
                <DropTahun />
              </div>
            </div>
            <PegawaiTeladan />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
