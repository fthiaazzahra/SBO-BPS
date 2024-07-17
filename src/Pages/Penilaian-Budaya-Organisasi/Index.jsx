import Navbar from "../../Components/Navbar/Index";
import Footer from "../../Components/Navbar/Footer/Footer";
import Jumbotron from "../KonsepDefinisi/DasarHukum/Jumbotron";
import LoginUser from "../Penilaian-Budaya-Organisasi/LoginUser";

const PenilaianBudayaOrganisasi = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full pt-[90px]">
        <Jumbotron title={"Penilaian Budaya Organisasi"} />
        <div>
          <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                  <img
                    alt=""
                    src="https://materi.co.id/wp-content/uploads/2020/09/Manajemen-Kinerja.jpg"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

                <div className="lg:py-24">
                  <h2 className="text-3xl text-black font-bold sm:text-4xl">
                    Perhatikan informasi di bawah ini, sebelum mengisi survey
                  </h2>

                  <p className="my-6 text-gray-600 text-justify">
                    Isilah dengan memilih KODE pada Pernyataan di bawah ini,
                    setiap kode mengandung arti, diantaranya : HARAPAN :(1)
                    Sangat Tidak Penting/ STP; (2) Tidak Penting/ TP; (3)
                    Penting/ P; (4) Sangat Penting/ SP KINERJA :(1) Sangat Tidak
                    Setuju/ STS; (2) Tidak Setuju/ TS; (3) Setuju/ S; (4) Sangat
                    Setuju/ SS
                  </p>

                  <LoginUser />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PenilaianBudayaOrganisasi;
