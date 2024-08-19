/* eslint-disable react/prop-types */
import NavbarAdmin from "../Navbar/Index";
import { Sidebar } from "../Sidebar/Index";
// import { SidebarWithBurgerMenu } from "../Sidebar/SidebarSmall";

const Layout = ({ children }) => {
  return (
    <div className="">
      <div className="flex flex-col h-screen overflow-hidden">
        <NavbarAdmin />
        <div className="flex">
          <div className="hidden lg:block">
            <Sidebar />
          </div>

          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <main>
              <div className="mx-auto w-full">{children}</div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
