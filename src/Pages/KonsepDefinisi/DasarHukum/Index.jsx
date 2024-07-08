import Navbar from "../../../Components/Navbar/Index";
import Jumbotron from "./Jumbotron";
import ListDasarHukum from "./Stapper";

const DasarHukum = () => {
  return (
    <>
      <Navbar />
      <div className="w-full pt-[90px]">
        <Jumbotron />
      </div>
      <div className="bg-white px-20 py-10 flex gap-4">
        <div className="w-[70%]">
          <ListDasarHukum />
        </div>
        <div className="w-[30%]">
          <h1 className="text-black border h-screen">Aang</h1>
          <h1 className="text-black border h-screen">Fathia</h1>
          <h1 className="text-black border h-screen">Sihan</h1>
          <h1 className="text-black border h-screen">Novo</h1>
          <h1 className="text-black border h-screen">Dika</h1>
          <h1 className="text-black border h-screen">Isna</h1>
        </div>
      </div>
    </>
  );
};

export default DasarHukum;
