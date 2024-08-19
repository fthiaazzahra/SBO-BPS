import { useState } from "react";
import { useRef } from "react";

import { Toast } from "primereact/toast";

const Form1PegawaiTeladan = () => {
  const [load, setLoad] = useState(false);
  const toastCenter = useRef(null);
  const [nama, setNama] = useState("");
  const [nip, setNip] = useState("");
  const [umur, setUmur] = useState("< 30 Tahun");
  const [jkl, setJkl] = useState("Laki-laki");
  const [pendidikan, setPendidikan] = useState("SLTA");
  const [masaKerja, setMasaKerja] = useState("< 10 Tahun");

  const showMessage = (event, ref, severity, detail) => {
    ref.current.show({
      severity: severity,
      summary: severity === "success" ? "Success" : "Error",
      detail: detail,
      life: 3000,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama || !nip || !umur || !jkl || !pendidikan || !masaKerja) {
      showMessage(e, toastCenter, "error", "Please fill out all fields");
      return;
    }
    setLoad(true);
    localStorage.setItem("nama", nama);
    localStorage.setItem("nip", nip);
    localStorage.setItem("umur", umur);
    localStorage.setItem("jkl", jkl);
    localStorage.setItem("pendidikan", pendidikan);
    localStorage.setItem("masaKerja", masaKerja);

    setTimeout(() => {
      setLoad(false);
      showMessage(e, toastCenter, "success", "Data Berhasil Disimpan");
    }, 3000);
  };
  return (
    <div>
      <Toast ref={toastCenter} position="center" />
      <div className="w-full">
        <div>
          <section className="">
            <form
              onSubmit={handleSubmit}
              className="mx-auto border p-4 lg:w-1/2 bg-white rounded-md"
            >
              <div className="space-y-12 h-full">
                <div className=" border-gray-900/10 flex flex-col justify-between pb-12">
                  <div>
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      Form Penilaian Pegawai Teladan
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Use a permanent address where you can receive mail.
                    </p>
                  </div>
                  <div className="w-full ">
                    <div className="flex flex-col gap-4 md:gap-8">
                      <div className="flex flex-col md:flex-row w-full items-center gap-4">
                        <div className="w-full md:w-[50%]">
                          <label
                            form="country"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Nama Pegawai
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              value={nama}
                              onChange={(e) => setNama(e.target.value)}
                              id="namaPegawai"
                              name="namaPegawai"
                              required
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
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
                              type="text"
                              id="namaPegawai"
                              name="namaPegawai"
                              required
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
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
                            Pendidikan Yang Ditamatkan
                          </label>
                          <div className="mt-2">
                            <select
                              value={pendidikan}
                              onChange={(e) => setPendidikan(e.target.value)}
                              id="country"
                              name="country"
                              required
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
                            Umur
                          </label>
                          <div className="mt-2">
                            <select
                              value={umur}
                              onChange={(e) => setUmur(e.target.value)}
                              id="country"
                              required
                              name="country"
                              autoComplete="country-name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                              <option>&lt; 30 Tahun</option>
                              <option>30-40 Tahun</option>
                              <option>41-50 Tahun</option>
                              <option value="50">&gt; 50 Tahun Keatas</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row w-full items-center gap-4">
                        <div className="w-full md:w-[50%]">
                          <label
                            form="country"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Masa Kerja
                          </label>
                          <div className="mt-2">
                            <select
                              value={masaKerja}
                              onChange={(e) => setMasaKerja(e.target.value)}
                              id="country"
                              required
                              name="country"
                              autoComplete="country-name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                              <option value="10">&lt; 10 Tahun</option>
                              <option>10 - 15 Tahun</option>
                              <option>16 - 20 Tahun</option>
                              <option value="20">&gt; 20 Tahun Keatas</option>
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
                              value={jkl}
                              required
                              onChange={(e) => setJkl(e.target.value)}
                              id="country"
                              name="country"
                              autoComplete="country-name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                              <option>Laki-laki</option>
                              <option>Perempuan</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-end">
                <button className="btn bg-blue-500 text-white">
                  {load ? (
                    <span className="loading loading-dots loading-md "></span>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Form1PegawaiTeladan;
