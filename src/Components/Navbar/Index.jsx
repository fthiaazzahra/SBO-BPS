import "flowbite";
import "animate.css";
import { useEffect, useState } from "react";
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

        {/* <!-- drawer init and show --> */}
        <div className="text-center lg:hidden">
          <button
            type="button"
            className="cursor-pointer border p-2 rounded-md"
            data-drawer-target="drawer-navigation"
            data-drawer-show="drawer-navigation"
            aria-controls="drawer-navigation"
          >
            <svg
              className="w-6 h-6 text-white dark:text-white"
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
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
        </div>

        {/* <!-- drawer component --> */}
        <div
          id="drawer-navigation"
          className="fixed top-0 left-0 z-40 w-64 h-screen  overflow-y-auto transition-transform -translate-x-full bg-[#002B6A] dark:bg-gray-800"
          tabIndex="-1"
          aria-labelledby="drawer-navigation-label"
        >
          <button
            type="button"
            data-drawer-hide="drawer-navigation"
            aria-controls="drawer-navigation"
            className="text-white  bg-transparent border hover:text-white rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <div className="flex items-center justify-start pt-16 pb-4 px-2 border-b-2 border-[#E9781A]">
            <div className=" flex gap-2 items-center">
              <img src="/img/logo-BPS.png" alt="" />
              <h5
                id="drawer-navigation-label"
                className="text-lg italic font-semibold text-white uppercase dark:text-white"
              >
                BPS Kabupaten Tasikmalaya
              </h5>
            </div>
          </div>
          <div className="py-4 overflow-y-auto p-4">
            <ul className="space-y-2 font-medium flex flex-col gap-4">
              <li>
                <a
                  href="/"
                  className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#E9781A] dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="w-5 h-5 text-white transition duration-75 dark:text-white group-hover:text-white dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ms-3">Home</span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-[#E9781A] dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example2"
                  data-collapse-toggle="dropdown-example2"
                >
                  <svg
                    className="w-6 h-6 text-white"
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
                      d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"
                    />
                  </svg>

                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                    Konsep Definisi
                  </span>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <ul id="dropdown-example2" className="hidden py-2 space-y-2">
                  <li>
                    <a
                      href="/dasar-hukum"
                      className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-[#E9781A] dark:text-white dark:hover:bg-gray-700"
                    >
                      Dasar Hukum
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-[#E9781A] dark:text-white dark:hover:bg-gray-700"
                    >
                      Nilai-nilai Inti BPS
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-[#E9781A] dark:text-white dark:hover:bg-gray-700"
                    >
                      Model Implementasi
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-[#E9781A] dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                >
                  <svg
                    className="w-6 h-6 text-white dark:text-white"
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
                      d="M5.005 11.19V12l6.998 4.042L19 12v-.81M5 16.15v.81L11.997 21l6.998-4.042v-.81M12.003 3 5.005 7.042l6.998 4.042L19 7.042 12.003 3Z"
                    />
                  </svg>

                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                    Indikator Penilaian
                  </span>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <ul id="dropdown-example" className="hidden py-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-[#E9781A] dark:text-white dark:hover:bg-gray-700"
                    >
                      Dasar Hukum
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-[#E9781A] dark:text-white dark:hover:bg-gray-700"
                    >
                      Nilai-nilai Inti BPS
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-[#E9781A] dark:text-white dark:hover:bg-gray-700"
                    >
                      Model Implementasi
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-[#E9781A] dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example3"
                  data-collapse-toggle="dropdown-example3"
                >
                  <svg
                    className="w-6 h-6 text-white"
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
                      d="M12 4.392v14.832M8.476 9.38l-4.553.36c-.888.07-1.248 1.165-.572 1.737l3.47 2.934a.98.98 0 0 1 .322.98l-1.06 4.388c-.206.855.736 1.531 1.497 1.073l3.898-2.351c.32-.193.723-.193 1.044 0l3.898 2.351c.76.458 1.703-.218 1.497-1.073l-1.06-4.388a.982.982 0 0 1 .322-.98l3.47-2.934c.676-.572.316-1.667-.572-1.737l-4.553-.36a1 1 0 0 1-.845-.606l-1.754-4.165c-.342-.812-1.508-.812-1.85 0L9.321 8.774a1 1 0 0 1-.845.606Z"
                    />
                  </svg>

                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                    Form Penilaian
                  </span>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <ul id="dropdown-example3" className="hidden py-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-[#E9781A] dark:text-white dark:hover:bg-gray-700"
                    >
                      Dasar Hukum
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-[#E9781A] dark:text-white dark:hover:bg-gray-700"
                    >
                      Nilai-nilai Inti BPS
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-[#E9781A] dark:text-white dark:hover:bg-gray-700"
                    >
                      Model Implementasi
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-[#E9781A] dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example4"
                  data-collapse-toggle="dropdown-example4"
                >
                  <svg
                    className="w-6 h-6 text-white "
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

                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                    Hasil Penilaian
                  </span>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <ul id="dropdown-example4" className="hidden py-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-[#E9781A] dark:text-white dark:hover:bg-gray-700"
                    >
                      Dasar Hukum
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-[#E9781A] dark:text-white dark:hover:bg-gray-700"
                    >
                      Nilai-nilai Inti BPS
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-[#E9781A] dark:text-white dark:hover:bg-gray-700"
                    >
                      Model Implementasi
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#E9781A] dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">Galeri</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

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
                    <a href="" className="text-black">
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
