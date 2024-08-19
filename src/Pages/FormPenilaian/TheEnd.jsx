import Navbar from "../../Components/Navbar/Index";

const EndQuist = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-gray-900 h-screen flex items-center text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-blue-500 via-green-500 to-[#E9781A] bg-clip-text text-xl font-bold text-transparent sm:text-3xl">
              TERIMAKASIH TELAH MENGISI SURVEY BUDAYA ORGANISASI BPS KABUPATEN
              TASIKMALAYA
              {/* <span className="sm:block"> Increase Conversion. </span> */}
            </h1>

            {/* <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Terimakasih telah meluangkan waktu untuk mengisi survei budaya
              organisasi di BPS Kabupaten Tasikmalaya. Kontribusi Anda sangat
              berarti bagi kami. Terima kasih banyak!
            </p> */}

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/"
              >
                Selesai
              </a>

              {/* Open the modal using document.getElementById('ID').showModal() method */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EndQuist;
