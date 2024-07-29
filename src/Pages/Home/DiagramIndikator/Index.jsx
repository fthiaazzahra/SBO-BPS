import Footer from "../../../Components/Navbar/Footer/Footer";
import Navbar from "../../../Components/Navbar/Index";

// import ScatterChart from "./Chart/DiagramKartesius";
import "animate.css";
import Diagram1 from "../Chart/DiagramIndikator/Diagram1";
// import Triwulan from "./DropdownTriwulan";

export default function DiagramIndikatorPage() {
  return (
    <div className="">
      <Navbar />
      <div className="w-full pt-[90px]">
        <section className="bg-white text-black">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Diagram Indikator SBO
              </h2>

              <p className="mt-4 text-black">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae
                aperiam fugit consequuntur saepe laborum.
              </p>
            </div>

            <Diagram1 />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
