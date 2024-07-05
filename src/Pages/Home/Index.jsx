import Navbar from "../../Components/Navbar/Index";
import "animate.css";
export default function HomePage() {
  return (
    <>
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
              <h1 className="mb-4 md:text-3xl font-bold tracking-tight leading-none text-white animate__animated animate__fadeInDown">
                Selamat Datang di Portal
              </h1>
              <div className="my-10">
                <h1 className="mb-4 md:text-5xl font-bold tracking-tight leading-none text-white  animate__animated animate__fadeInLeft">
                  SISTEM BUDAYA ORGANISASI BADAN PUSAT
                </h1>
                <h1 className="mb-4 md:text-5xl font-bold tracking-tight leading-none text-white  animate__animated animate__fadeInRight">
                  STATISTIK KABUPATEN TASIKMALAYA
                </h1>
              </div>
              <h1 className="mb-4 md:text-2xl font-semibold tracking-tight leading-none text-white italic animate__animated animate__fadeInUp">
                Perilaku kerja, Leadership, People, dan Sistem Budaya Organisasi
              </h1>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
