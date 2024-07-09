import Footer from "../../../Components/Navbar/Footer/Footer";
import Navbar from "../../../Components/Navbar/Index";
import Jumbotron from "./Jumbotron";
import PanelManuDasarHukum from "./PanelManu";
import ListDasarHukum from "./Stapper";

const DasarHukum = () => {
  return (
    <>
      <Navbar />
      <div className="w-full pt-[90px]">
        <Jumbotron title={"Dasar Hukum"} />
      </div>

      <div className="bg-white px-10 md:px-20 py-10 flex gap-4">
        <div className="w-full md:w-[70%]">
          <ListDasarHukum />
        </div>
        <div className="hidden md:block md:w-[30%] h-screen">
          <PanelManuDasarHukum />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DasarHukum;
