import Navbar from "../../Components/Navbar/Index";

const EndQuist2 = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-gray-900 h-screen flex items-center text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-blue-500 via-green-500 to-[#E9781A] bg-clip-text text-xl font-bold text-transparent sm:text-3xl">
              TERIMAKASIH TELAH MENGISI SURVEY PENILAIAN PEGAWAI TELADAN BPS KABUPATEN
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
                href="#"
              >
                Selesai
              </a>

              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className=""
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                <a
                  className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                  href="#"
                >
                  Isi Suervey Pegawai Teladan
                </a>
              </button>
              <dialog id="my_modal_1" className=" border rounded-md">
                <div className="p-8">
                  <h3 className="font-bold text-lg">!!!</h3>
                  <p className="text-black">
                    Apakah sudah sempat mengisi survei untuk pegawai teladan?
                  </p>
                  <div className="modal-action flex justify-center">
                    <form method="dialog" className="flex gap-4">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="p-2 rounded-md text-sm bg-[#E9781A] text-white">
                        Sudah Mengisi
                      </button>
                      <button className="p-2 rounded-md text-sm bg-blue-500 text-white">
                        Lanjut Mengisi
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EndQuist2;
