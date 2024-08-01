import "flowbite";
import "animate.css";
import { useEffect, useState } from "react";
import { SidebarWithBurgerMenu } from "./Sidebar";
// import DropdownKosepDefinisi from "../../Pages/Dropdown/KonsepDefinisi";
// import DropdownIndikator from "../../Pages/Dropdown/IndikatorPenilaian";
// import DropdownFormPenilaian from "../../Pages/Dropdown/FormPenilaian";
// import DropdownHasil from "../../Pages/Dropdown/HasilPenilaian";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-[#002B6A] border-gray-200 text-white fixed w-full z-[800] transition-all ease-in-out animate__animated animate__fadeInDown ${
        scrolled ? "py-0" : "py-2"
      }`}
    >
      <div className="flex f items-center justify-between max-w-screen-xl mx-auto p-4 px-4 md:px-10">
        <div className="flex items-center gap-2  ">
          <img src="/img/logo-BPS.png" alt="Logo BPS" />
          <div className=" flex-col italic text-white font-semibold hidden lg:flex">
            <span>BADAN PUSAT STATISTIK</span>
            <span>KABUPATEN TASIKMALAYA</span>
          </div>
          <div className="lg:hidden">
            <span>BPS KABUPATEN TASIKMALAYA</span>
          </div>
        </div>

        <SidebarWithBurgerMenu />

        <div
          id="mega-menu"
          className=" hidden items-center  w-full lg:flex lg:justify-center lg:w-auto   "
        >
          <ul className="flex flex-col items-center  font-medium md:flex-row md:gap-4 ">
            <li className="relative group">
              <a
                href="/"
                className="block uppercase text-white text-sm font-bold hover:text-[#E9781A]"
                aria-current="page"
              >
                HOME
              </a>
              <span className="absolute left-0 bottom-[-4px] w-full h-1 bg-[#E9781A] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </li>

            {/* <li className="relative group">
              <div className="dropdown dropdown-hover">
                <div
                  tabIndex={0}
                  role="button"
                  className="uppercase font-bold text-sm linve hover:text-[#E9781A]"
                >
                  Konsep Definisi
                </div>
                <span className="absolute left-0 bottom-[-4px] w-full h-1 bg-[#E9781A] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-sm z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <a
                      href="/penilaian-budaya-organisasi"
                      className="text-black"
                    >
                      Dasar Hukum
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-black">
                      Nilai-nilai Inti BPS
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-black">
                      Model Implementasi
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="relative group">
              <div className="dropdown dropdown-hover">
                <div
                  tabIndex={0}
                  role="button"
                  className="uppercase font-bold text-sm linve hover:text-[#E9781A]"
                >
                  Indikator Penilaian
                </div>
                <span className="absolute left-0 bottom-[-4px] w-full h-1 bg-[#E9781A] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-sm z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <a
                      href="/penilaian-budaya-organisasi"
                      className="text-black"
                    >
                      Perilaku Kerja Pegawai
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-black">
                      Leadership Budaya Organisasi
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-black">
                      People Budaya Organisasi
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-black">
                      System Budaya Organisasi
                    </a>
                  </li>
                </ul>
              </div>
            </li> */}
            <li className="relative group">
              <div className="dropdown dropdown-hover">
                <div
                  tabIndex={0}
                  role="button"
                  className="uppercase font-bold text-sm linve hover:text-[#E9781A]"
                >
                  Form Penilaian
                </div>
                <span className="absolute left-0 bottom-[-4px] w-full h-1 bg-[#E9781A] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-sm z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <a
                      href="/penilaian-budaya-organisasi"
                      className="text-black"
                    >
                      Penilaian Budaya Organisasi
                    </a>
                  </li>
                  <li>
                    <a href="/form-pegawai-teladan" className="text-black">
                      Penilaian Pegawai Teladan
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="relative group">
              <div className="dropdown dropdown-hover">
                <div
                  tabIndex={0}
                  role="button"
                  className="uppercase text-sm font-bold hover:text-[#E9781A]"
                >
                  Hasil Penilaian
                </div>
                <span className="absolute left-0 bottom-[-4px] w-full h-1 bg-[#E9781A] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-sm z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <a href="/hasil-survey-SBO" className="text-black">
                      Budaya Organisasi
                    </a>
                  </li>
                  <li>
                    <a
                      href="/hasil-survey-pegawai-teladan"
                      className="text-black"
                    >
                      Pegawai Teladan
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            {/* <li>
              <a
                href="#"
                className="block uppercase text-white hover:text-[#E9781A] font-bold"
              >
                Galeri
              </a>
            </li> */}
          </ul>
        </div>
        <div className="hidden lg:block">
          <a
            className="group relative inline-flex items-center overflow-hidden rounded bg-[#E9781A] px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
            href="#"
          >
            <span className="absolute -end-full transition-all group-hover:end-4">
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

            <span className="text-sm font-medium transition-all group-hover:me-4">
              {" "}
              Login{" "}
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
