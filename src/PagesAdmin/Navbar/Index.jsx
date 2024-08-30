import { NavLink } from "react-router-dom";
import { SidebarWithBurgerMenu } from "../Sidebar/SidebarSmall";

const NavbarAdmin = () => {
  console.log(localStorage.getItem("token"));
  return (
    <nav className="sticky top-0 z-50 flex w-full py-4  bg-[#002B6A]  drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="px-3  lg:px-5 lg:pl-3 w-full">
        <div className="flex items-center justify-between w-full ">
          <div className="flex items-center gap-2 justify-start rtl:justify-end">
            <div className="lg:hidden">
              <SidebarWithBurgerMenu />
            </div>
            <NavLink to="/" className={"flex items-center gap-2"}>
              <img src={"/img/logoBPS.png"} alt="Logo" />
              <div className="text-white font-bold flex flex-col italic">
                <span className="text-sm">BADAN PUSAT STATISTIK</span>
                <span className="text-sm">KABUPATEN TASIKMALAYA</span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
