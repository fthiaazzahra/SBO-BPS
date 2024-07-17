import Navbar from "../../../Components/Navbar/Index";
import Footer from "../../../Components/Navbar/Footer/Footer";

import Tables from "./Table";
import VerticalBarDemo from "../../Home/Chart/DiagramBatang";
import Diagram1 from "../../Home/Chart/DiagramIndikator/Diagram1";
import ScatterChart from "../../Home/Chart/DiagramKartesius";
import Triwulan from "../../Home/DropdownTriwulan";
import DropTahun from "../../Home/DropdownTahun";

const HasilSBO = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[90px] w-full ">
        <div className="flex flex-col gap-8">
          <div className="bg-[#002B6A]">
            <div className="flex justify-center px-10 items-center mt-4 gap-2">
              <div className="flex items-center gap-2">
                <h1 className="text-white">Tahun : </h1>
                <DropTahun />
              </div>
              <div className="flex items-center gap-2">
                <h1 className="text-white">Triwulan : </h1>
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
          </div>
          <div className="">
            <div className="flex ">
              <div className="w-full px-10">
                <VerticalBarDemo />
              </div>
            </div>
          </div>
          <div className="bg-white">
            <div className="w-full px-10">
              <Diagram1 />
            </div>
          </div>
          <div className="bg-white">
            <div className="w-full px-10">
              <Tables />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HasilSBO;
