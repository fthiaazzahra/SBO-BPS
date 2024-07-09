import Footer from "../../../Components/Navbar/Footer/Footer";
import Navbar from "../../../Components/Navbar/Index";
import Jumbotron from "./Jumbotron";
import PanelMenuPriker from "./PanelManuPriker";
import ListPriker from "./Stapper";


const Priker = () => {
  return (
    <>
      <Navbar />
      <div className="w-full pt-[90px]">
        <Jumbotron />
      </div>

      <div className="bg-white px-20 py-10 flex gap-4">
        <div className="w-[70%]">
          <ListPriker />
        </div>
        <div className="w-[30%] h-screen">
          <PanelMenuPriker />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Priker;
