const Form1PegawaiTeladan = () => {
    return (
      <div>
        <div className="w-full">
          <div>
            <section className="">
              <form className="mx-auto border p-4 w-1/2 bg-white rounded-md">
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
                    <div className="w-full pt-8 ">
                      <div className="flex flex-col gap-10">
                        <div className="flex w-full items-center gap-4 ">
                          <div className="w-[50%]">
                            <label
                              form="country"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Nama Pegawai
                            </label>
                            <div className="mt-2">
                              <input
                              type ="text"
                                id="namaPegawai"
                                name="namaPegawai"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                />
                            </div>
                          </div>
                          <div className="w-[50%]">
                            <label
                              form="country"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              NIP
                            </label>
                            <div className="mt-2">
                              <input
                              type ="text"
                                id="namaPegawai"
                                name="namaPegawai"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                />
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full items-center gap-4 ">
                          <div className="w-[50%]">
                            <label
                              form="country"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Pendidikan Yang Ditamatkan
                            </label>
                            <div className="mt-2">
                              <select
                                id="country"
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
  
                          <div className="w-[50%]">
                            <label
                              form="country"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Umur
                            </label>
                            <div className="mt-2">
                              <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                              >
                                <option value="30">&lt; 30 Tahun</option>
                                <option>30-40 Tahun</option>
                                <option>41-50 Tahun</option>
                                <option value="50">&gt; 50 Tahun Keatas</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full items-center gap-4 ">
                          <div className="w-[50%]">
                            <label
                              form="country"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Masa Kerja
                            </label>
                            <div className="mt-2">
                              <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                              >
                                <option value ="10">&lt; 10 Tahun</option>
                                <option>10 - 15 Tahun</option>
                                <option>16 - 20 Tahun</option>
                                <option value ="20">&gt; 20 Tahun Keatas</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    );
  };
  
  export default Form1PegawaiTeladan;
  