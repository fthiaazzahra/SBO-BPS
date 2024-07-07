import "flowbite";
import "animate.css";
import { useEffect, useState } from "react";
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
      className={`bg-[#002B6A] border-gray-200 text-white border fixed w-full z-[999] transition-all ease-in-out animate__animated animate__fadeInDown ${
        scrolled ? "py-0" : "py-2"
      }`}
    >
      <div className="flex  flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4 px-10">
        <div className="flex items-center gap-2  ">
          <img src="/img/logo-BPS.png" alt="Logo BPS" />
          <div className="flex flex-col italic text-white font-semibold md:hidden lg:flex">
            <span>BADAN PUSAT STATISTIK</span>
            <span>KABUPATEN TASIKMALAYA</span>
          </div>
        </div>

        <div
          id="mega-menu"
          className=" hidden items-center  w-full md:flex md:justify-center md:w-auto md:order-1 "
        >
          <ul className="flex flex-col items-center  font-medium md:flex-row gap-4  ">
            <li className="">
              <a
                href="#"
                className="block py-2 px-3 uppercase text-white text-sm border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                HOME
              </a>
            </li>
            <li>
              <button
                id="mega-menu-dropdown-button"
                data-dropdown-toggle="mega-menu-dropdown1"
                className="flex items-center uppercase justify-between w-full py-2 px-3 font-medium text-white text-sm border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Konsep Definisi{" "}
                <svg
                  className="w-2.5 h-2.5 ms-3"
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
              <div
                id="mega-menu-dropdown1"
                className="absolute z-10  hidden w-auto  text-sm bg-white border border-gray-100 rounded-sm shadow-md dark:border-gray-700  dark:bg-gray-700"
              >
                <div className="p-4 pb-0 text-white md:pb-4 dark:text-white">
                  <ul
                    className="space-y-4"
                    aria-labelledby="mega-menu-dropdown1-button"
                  >
                    <li>
                      <a
                        href="/dasar-hukum"
                        className="text-gray-900 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Dasar Hukum
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-900 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Nilai-nilai Inti BPS
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-900 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Model Implementasi
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <button
                id="mega-menu-dropdown-button2"
                data-dropdown-toggle="mega-menu-dropdown2"
                className="flex items-center uppercase justify-between w-full py-2 px-3 font-medium text-white text-sm border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Indikator Penilaian{" "}
                <svg
                  className="w-2.5 h-2.5 ms-3"
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
              <div
                id="mega-menu-dropdown2"
                className="absolute z-10  hidden w-auto  text-sm bg-white border border-gray-100 rounded-sm shadow-md dark:border-gray-700  dark:bg-gray-700"
              >
                <div className="p-4 pb-0 text-white md:pb-4 dark:text-white">
                  <ul
                    className="space-y-4"
                    aria-labelledby="mega-menu-dropdown-button2"
                  >
                    <li>
                      <a
                        href="#"
                        className="text-gray-900 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Dasar Hukum
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-900 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Nilai-nilai Inti BPS
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-900 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Model Implementasi
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <button
                id="mega-menu-dropdown-button3"
                data-dropdown-toggle="mega-menu-dropdown3"
                className="flex items-center uppercase justify-between w-full py-2 px-3 font-medium text-white text-sm border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Form Penilaian{" "}
                <svg
                  className="w-2.5 h-2.5 ms-3"
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
              <div
                id="mega-menu-dropdown3"
                className="absolute z-10  hidden w-auto  text-sm bg-white border border-gray-100 rounded-sm shadow-md dark:border-gray-700  dark:bg-gray-700"
              >
                <div className="p-4 pb-0 text-white md:pb-4 dark:text-white">
                  <ul
                    className="space-y-4"
                    aria-labelledby="mega-menu-dropdown-button3"
                  >
                    <li>
                      <a
                        href="#"
                        className="text-gray-900 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Dasar Hukum
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-900 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Nilai-nilai Inti BPS
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-900 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Model Implementasi
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <button
                id="mega-menu-dropdown-button4"
                data-dropdown-toggle="mega-menu-dropdown4"
                className="flex items-center uppercase justify-between w-full py-2 px-3 font-medium text-white text-sm border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Hasil Penilaian{" "}
                <svg
                  className="w-2.5 h-2.5 ms-3"
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
              <div
                id="mega-menu-dropdown4"
                className="absolute z-10  hidden w-auto  text-sm bg-white border border-gray-100 rounded-sm shadow-md dark:border-gray-700  dark:bg-gray-700"
              >
                <div className="p-4 pb-0 text-white md:pb-4 dark:text-white">
                  <ul
                    className="space-y-4"
                    aria-labelledby="mega-menu-dropdown-button4"
                  >
                    <li>
                      <a
                        href="#"
                        className="text-gray-900 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Dasar Hukum
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-900 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Nilai-nilai Inti BPS
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-900 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Model Implementasi
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 uppercase px-3 text-white text-sm border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Galeri
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
