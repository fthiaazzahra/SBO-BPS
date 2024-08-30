import { useState } from "react";
import { useRef } from "react";

import { Toast } from "primereact/toast";
import { Dropdown } from "primereact/dropdown";

const Form1PegawaiTeladan = () => {
  const [load, setLoad] = useState(false);
  const toastCenter = useRef(null);
  const [triwulan, setTriwulan] = useState(null);

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

    localStorage.setItem("triwulan", triwulan);
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

                  <Dropdown
                    value={triwulan}
                    options={["1", "2", "3", "4"]}
                    onChange={(e) => setTriwulan(e.value)}
                    placeholder="Triwulan"
                    className="w-full border rounded-md shadow-sm mt-4"
                  />
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
