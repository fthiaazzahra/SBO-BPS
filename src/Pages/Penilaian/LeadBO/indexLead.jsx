import Footer from "../../../Components/Navbar/Footer/Footer";
import Navbar from "../../../Components/Navbar/Index";
import Jumbotron from "./Jumbotron";
import PanelManuLeadBO from "./PanelManu";
import ListLeadBO from "./Stapper";

const LeadBO = () => {
  return (
    <>
      <Navbar />
      <div className="w-full pt-[90px]">
        <Jumbotron />
      </div>

      <div className="bg-white px-20 py-10 flex gap-4">
        <div className="w-[70%]">
          <ListLeadBO />
        </div>
        <div className="w-[30%] h-screen">
          <PanelManuLeadBO />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LeadBO;
