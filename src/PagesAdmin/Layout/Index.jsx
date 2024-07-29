import NavbarAdmin from "../Navbar/Index";
import { Sidebar } from "../Sidebar/Index";
import { SidebarWithBurgerMenu } from "../Sidebar/SidebarSmall";

const Layout = ({ children }) => {
  return (
    <div className="">
      <div className="flex flex-col h-screen overflow-hidden">
        <NavbarAdmin />
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <main>
            <div className="mx-auto w-full p-4 md:p-6 2xl:p-10 bg-white">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
