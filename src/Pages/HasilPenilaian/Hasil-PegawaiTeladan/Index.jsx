import Navbar from "../../../Components/Navbar/Index";
import Footer from "../../../Components/Navbar/Footer/Footer";
import Diagram from "./Diagram";
import CardHasil from "./CardHasil";

const HasilPegawaiTeladan = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[90px] w-full ">
        <div className="pt-10 px-6 md:px-10 flex   items-center flex-col gap-8 pb-10">
          <div className="w-full flex justify-center border-b-2">
            <h1 className="text-black uppercase font-bold text-3xl">
              Hasil Survey
            </h1>
          </div>
          <div className="w-full flex justify-center items-center">
            <Diagram />
          </div>
          <div className="w-full">
            <CardHasil />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HasilPegawaiTeladan;
