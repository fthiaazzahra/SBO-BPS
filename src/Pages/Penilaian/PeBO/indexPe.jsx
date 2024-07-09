import Footer from "../../../Components/Navbar/Footer/Footer";
import Navbar from "../../../Components/Navbar/Index";
import Jumbotron from "./Jumbotron";
import PanelManuPeBO from "./PanelManu";
import ListPeBO from "./Stapper";

const PeBO = () => {
  return (
    <>
      <Navbar />
      <div className="w-full pt-[90px]">
        <Jumbotron />
      </div>

      <div className="bg-white px-20 py-10 flex gap-4">
        <div className="w-[70%]">
          <ListPeBO />
        </div>
        <div className="w-[30%] h-screen">
          <PanelManuPeBO/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PeBO;
