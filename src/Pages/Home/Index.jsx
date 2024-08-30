import Footer from "../../Components/Navbar/Footer/Footer";
import Navbar from "../../Components/Navbar/Index";

// import ScatterChart from "./Chart/DiagramKartesius";
import "animate.css";

// import Triwulan from "./DropdownTriwulan";
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
              <h1 className="mb-4 italic text-2xl md:text-3xl md:font-bold tracking-tight leading-none text-white animate__animated animate__fadeInDown">
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

        <section className="bg-[#002B6A] text-white">
          <div className="mx-auto w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-16 lg:py-16">
            <div className="mx-auto max-w-lg text-center">
              <h4 className="uppercase text-xl font-bold sm:text-3xl">
                Penilaian Budaya Organisasi BPS Kabupaten Tasikmalaya
              </h4>

              <p className="mt-4 text-white"></p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 px-4 md:px-10">
              <a
                className="pointer-events-none bg-white rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-[#E9781A]"
                href="/giagram-indikator"
              >
                <svg
                  className="w-12 h-12 text-[#E9781A] dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207"
                  />
                </svg>

                <h2 className="mt-4 text-xl font-bold text-black">Indikator</h2>
              </a>

              <a
                className="block rounded-xl border bg-white border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-[#E9781A]"
                href="/gap-analysis"
              >
                <svg
                  className="w-12 h-12 text-[#E9781A] dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M3 11h18m-9 0v8m-8 0h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                  />
                </svg>

                <h2 className="mt-4 text-xl font-bold text-black">
                  Gap Analiysis
                </h2>
              </a>

              <a
                className="block disabled bg-white rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-[#E9781A]"
                href="/diagram-indikator"
              >
                <svg
                  className="w-12 h-12 text-[#E9781A] dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"
                  />
                </svg>

                <h2 className="mt-4 text-xl font-bold text-black">
                  Diagram Indikator
                </h2>
              </a>

              <a
                className="block rounded-xl bg-white border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-[#E9781A]"
                href="/ipa-page"
              >
                <svg
                  className="w-12 h-12 text-[#E9781A] dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 15v4m6-6v6m6-4v4m6-6v6M3 11l6-5 6 5 5.5-5.5"
                  />
                </svg>

                <h2 className="mt-4 text-xl font-bold text-black">
                  Importance and Performance Analysis{" "}
                </h2>
              </a>
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-8">
          {/* <div className="flex justify-center items-center mt-4">
            <div className="flex items-center">
              <h1>Tahun : </h1>
              <DropTahun />
            </div>
            <div className="flex items-center">
              <h1>Triwulan : </h1>
              <Triwulan />
            </div>
          </div> */}
          {/* <div className="w-full bg-[#002B6A] grid grid-cols-1 lg:grid-cols-2 pt-4">
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
          </div> */}
          <div className=" flex flex-col justify-center items-center px-8 md:px-16 py-20">
            <h1 className="text-3xl font-bold uppercase border-b-8 border-[#E9781A]">
              Pegawai Teladan
            </h1>

            <PegawaiTeladan />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
