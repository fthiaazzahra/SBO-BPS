const Form1BudayaOrganisasi = () => {
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
                      Form Penilaian Budaya Organisasi BPS Kabupaten Tasikmalaya
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
                            <select
                              id="country"
                              name="country"
                              autoComplete="country-name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                            >
                              <option>United States</option>
                              <option>Canada</option>
                              <option>Mexico</option>
                            </select>
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
                            <select
                              id="country"
                              name="country"
                              autocomplete="country-name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                              <option>United States</option>
                              <option>Canada</option>
                              <option>Mexico</option>
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
                            Jens Tambunan
                          </label>
                          <div className="mt-2">
                            <select
                              id="country"
                              name="country"
                              autoComplete="country-name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                            >
                              <option>United States</option>
                              <option>Canada</option>
                              <option>Mexico</option>
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
                              <option>United States</option>
                              <option>Canada</option>
                              <option>Mexico</option>
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
                              <option>United States</option>
                              <option>Canada</option>
                              <option>Mexico</option>
                            </select>
                          </div>
                        </div>
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
                              <option>United States</option>
                              <option>Canada</option>
                              <option>Mexico</option>
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

export default Form1BudayaOrganisasi;
