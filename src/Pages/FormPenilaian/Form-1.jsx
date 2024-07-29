import { useRef, useState } from "react";
import { Toast } from "primereact/toast";

const Form1BudayaOrganisasi = () => {
  const [nama, setNama] = useState("");
  const [nip, setNip] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [selectedGender, setSelectedGender] = useState("Laki-laki");
  const [umur, setUmur] = useState("");
  const [Pendidikan, setPendidikan] = useState("SLTA");
  const [triwulan, setTriwulan] = useState("1");
  const [timeKerja, setTimeKerja] = useState("");
  const [loading, setLoading] = useState(false);
  const toastCenter = useRef(null);

  const showMessage = (event, ref, severity, detail) => {
    ref.current.show({
      severity: severity,
      summary: severity === "success" ? "Success" : "Error",
      detail: detail,
      life: 3000,
    });
  };

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();

    // Validasi form
    if (
      !nama ||
      !nip ||
      !selectedGender ||
      !umur ||
      !Pendidikan ||
      !timeKerja ||
      !triwulan ||
      !jabatan ||
      jabatan === "Pilih Jabatan"
    ) {
      showMessage(e, toastCenter, "error", "Please fill out all fields");
      return;
    }

    setLoading(true);
    localStorage.setItem("name", nama);
    localStorage.setItem("nip", nip);
    localStorage.setItem("gender", selectedGender);
    localStorage.setItem("umur", umur);
    localStorage.setItem("Pendidikan", Pendidikan);
    localStorage.setItem("timeKerja", timeKerja);
    localStorage.setItem("triwulan", triwulan);
    localStorage.setItem("jabatan", jabatan);

    setTimeout(() => {
      setLoading(false);
      showMessage(e, toastCenter, "success", "Data Berhasil Disimpan");
    }, 2000); // Set loading to false after 3 seconds
  };

  console.log(jabatan);

  console.log(Pendidikan);

  return (
    <div>
      <div className="w-full">
        <Toast ref={toastCenter} position="center" />
        <div>
          <section className="">
            <form
              onSubmit={handleSave}
              className="mx-auto border p-4 md:w-1/2 bg-white rounded-md"
            >
              <div className="space-y-12 h-full">
                <div className="border-gray-900/10 flex flex-col justify-between pb-12">
                  <div>
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      Form Penilaian Budaya Organisasi BPS Kabupaten Tasikmalaya
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Use a permanent address where you can receive mail.
                    </p>
                  </div>
                  <div className="w-full pt-8 ">
                    <div className="flex flex-col gap-10">
                      <div className="flex flex-col md:flex-row w-full items-center gap-4 ">
                        <div className="w-full md:w-[50%]">
                          <label
                            form="country"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Nama Pegawai
                          </label>
                          <div className="mt-2">
                            <input
                              value={nama}
                              onChange={(e) => setNama(e.target.value)}
                              type="text"
                              placeholder="Your Name"
                              className="w-full rounded-md"
                            />
                          </div>
                        </div>
                        <div className="w-full md:w-[50%]">
                          <label
                            form="country"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            NIP
                          </label>
                          <div className="mt-2">
                            <input
                              value={nip}
                              onChange={(e) => setNip(e.target.value)}
                              type="number"
                              placeholder="Your NIP"
                              className="w-full rounded-md"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row w-full items-center gap-4 ">
                        <div className="w-full md:w-[50%]">
                          <label
                            form="country"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Triwulan
                          </label>
                          <div className="mt-2">
                            <select
                              id="country"
                              value={triwulan}
                              onChange={(e) => setTriwulan(e.target.value)}
                              name="country"
                              autoComplete="country-name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                            </select>
                          </div>
                        </div>
                        <div className="w-full md:w-[50%]">
                          <label
                            form="country"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Jenis Kelamin
                          </label>
                          <div className="mt-2">
                            <select
                              value={selectedGender}
                              onChange={handleGenderChange}
                              id="country"
                              name="country"
                              autoComplete="country-name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                            >
                              <option>Laki-laki</option>
                              <option>Perempuan</option>
                            </select>
                          </div>
                        </div>
                        <div className="w-full md:w-[50%]">
                          <label
                            form="country"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Umur
                          </label>
                          <div className="mt-2">
                            <input
                              value={umur}
                              onChange={(e) => setUmur(e.target.value)}
                              type="text"
                              placeholder="Example 25 Tahun"
                              className="w-full rounded-md"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row w-full items-center gap-4 ">
                        <div className="w-full md:w-[50%]">
                          <label
                            form="country"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Masa Kerja
                          </label>
                          <div className="mt-2">
                            <input
                              value={timeKerja}
                              onChange={(e) => setTimeKerja(e.target.value)}
                              type="text"
                              placeholder="Example 1 Tahun"
                              className="w-full rounded-md"
                            />
                          </div>
                        </div>
                        <div className="w-full md:w-[50%]">
                          <label
                            form="country"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Pendidikan
                          </label>
                          <div className="mt-2">
                            <select
                              id="country"
                              value={Pendidikan}
                              onChange={(e) => setPendidikan(e.target.value)}
                              name="country"
                              autoComplete="country-name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                              <option>SLTA</option>
                              <option>D1/D2/D3</option>
                              <option>D4/S1</option>
                              <option>S2/S3</option>
                            </select>
                          </div>
                        </div>
                        <div className="w-full md:w-[50%]">
                          <label
                            form="country"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Jabatan
                          </label>
                          <div className="mt-2">
                            <select
                              id="country"
                              value={jabatan}
                              onChange={(e) => setJabatan(e.target.value)}
                              name="country"
                              autoComplete="country-name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                              <option>Pilih Jabatan</option>
                              <option>Kepala</option>
                              <option>Kepala sub bagian</option>
                              <option>Pelaksana</option>
                              <option>Statistisi ahli muda</option>
                              <option>Statistisi ahli madya</option>
                              <option>Statistisi ahli pertama</option>
                              <option>Statistisi ahli mahir</option>
                              <option>Statistisi ahli penyelia</option>
                              <option>Statistisi ahli terampil</option>
                              <option>Pranata komputer ahli muda</option>
                              <option>Analisis pengelolaan keuangan</option>
                              <option>Analisis kepegawaian mahir</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center justify-end">
                <button
                  type="submit"
                  className={`px-4 py-2 rounded-md bg-[#002B6A] text-white transform transition-transform duration-300 hover:scale-105 hover:bg-[#001F4D] ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
            <div></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Form1BudayaOrganisasi;
