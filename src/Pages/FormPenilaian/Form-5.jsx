import { RadioButton } from "primereact/radiobutton";
import { useRef, useState } from "react";
import { Toast } from "primereact/toast";
import axios from "axios";

const dataPeople = [
  { name: `Pegawai memahami dan memenuhi kebutuhan masyarakat`, key: "1" },
  { name: `Pegawai ramah, cekatan, solutif dan dapat diandalkan.`, key: "2" },
  { name: `Pegawai melakukan perbaikan tiada henti.`, key: "3" },
  {
    name: `Pegawai melaksanakan tugas dengan jujur, bertanggungjawab, cermat, disiplin dan berintegritas tinggi `,
    key: "4",
  },
  {
    name: `Pegawai menggunakan kekayaan dan barang milik negara secara bertanggung jawab, efektif, dan efisien `,
    key: "5",
  },
  { name: `Pegawai tidak menyalahgunakan kewenangan jabatan`, key: "6" },
  {
    name: ` Pegawai meningkatkan kompetensi diri untuk menjawab tantangan yang selalu berubah`,
    key: "7",
  },
  { name: `Pegawai membantu orang lain belajar`, key: "8" },
  { name: `Pegawai membantu orang lain belajar`, key: "9" },
  {
    name: `Pegawai menghargai setiap orang apapun latar belakangnya`,
    key: "10",
  },
  { name: `Pegawai suka menolong orang lain`, key: "11" },
];

const categories = [
  { name: "1", key: "1" },
  { name: "2", key: "2" },
  { name: "3", key: "3" },
  { name: "4", key: "4" },
];

const FormSystem = () => {
  const toastCenter = useRef(null);
  const [loader, setLoader] = useState(false);
  const [harapanSelections, setHarapanSelections] = useState(
    new Array(dataPeople.length).fill(null)
  );
  const [kinerjaSelections, setKinerjaSelections] = useState(
    new Array(dataPeople.length).fill(null)
  );
  const [error, setError] = useState(null);

  const showMessage = (severity, summary, detail) => {
    toastCenter.current.show({
      severity: severity,
      summary: summary,
      detail: detail,
      life: 3000,
    });
  };

  const handleSelection = (type, index, value) => {
    const setState =
      type === "harapan" ? setHarapanSelections : setKinerjaSelections;
    setState((prevSelections) => {
      const updatedSelections = [...prevSelections];
      updatedSelections[index] = value;
      return updatedSelections;
    });
  };

  const validateForm = () => {
    const allAnsweredHarapan = harapanSelections.every(
      (selection) => selection !== null
    );
    const allAnsweredKinerja = kinerjaSelections.every(
      (selection) => selection !== null
    );
    if (!allAnsweredHarapan || !allAnsweredKinerja) {
      setError("Semua pertanyaan harus dijawab.");
      return false;
    }
    setError(null);
    return true;
  };

  const handleSaveSystem = async () => {
    if (!validateForm()) {
      showMessage("error", "Error", error);
      return;
    }
    try {
      setLoader(true);
      const response = await axios.post("http://localhost:5000/isiSurvey", {
        triwulan: localStorage.getItem("triwulan"),
        label: "SysBO",
        nama: localStorage.getItem("name"),
        jenis_kelamin: localStorage.getItem("gender"),
        umur: localStorage.getItem("umur"),
        pendidikan: localStorage.getItem("Pendidikan"),
        masa_kerja: localStorage.getItem("timeKerja"),
        score_harapan: harapanSelections,
        score_kinerja: kinerjaSelections,
      });
      if (response.status === 201) {
        showMessage("success", "Success", "Jawaban Kamu Berhasil Disimpan");
      }
      setLoader(false);
    } catch (error) {
      setLoader(false);
      showMessage("error", "Error", "Internal Server Error");
    }
  };

  return (
    <>
      <Toast ref={toastCenter} position="center" />
      <div className="flex flex-col h-12rem gap-7">
        {dataPeople.map((item, index) => (
          <div
            key={item.key}
            className="border-2 flex flex-col gap-4 py-4 px-4 rounded-md shadow-md p-2 surface-border border-round surface-ground align-items-center font-medium"
          >
            <div className="pb-4 flex gap-2">
              <span className="rounded-full text-black">{item.key}</span>
              <p className="text-justify">{item.name}</p>
            </div>
            <div className="card flex justify-center w-full">
              <div className="flex flex-col lg:flex-row md:justify-center gap-4 md:gap-20 w-full">
                <div className="flex flex-col gap-3 w-full justify-center lg:justify-between top-0 lg:w-1/2 overflow-auto md:gap-10">
                  <div className="flex gap-8 w-full justify-between">
                    {categories.map((category) => (
                      <div
                        key={category.key}
                        className="flex flex-col text-center md:justify-center items-center"
                      >
                        <div className="border-2 border-[#002B6A] rounded-full flex items-center lg:justify-center">
                          <RadioButton
                            inputId={`harapan_${item.key}_${category.key}`}
                            name={`harapan_${item.key}`}
                            value={category.key}
                            onChange={(e) =>
                              handleSelection("harapan", index, e.value)
                            }
                            checked={harapanSelections[index] === category.key}
                          />
                        </div>
                        <label htmlFor={`harapan_${item.key}_${category.key}`}>
                          {category.name}
                        </label>
                      </div>
                    ))}
                  </div>
                  <h1 className="text-center uppercase bg-yellow-400 text-white">
                    Harapan
                  </h1>
                </div>
                <div className="flex flex-col gap-3 w-full justify-center lg:justify-between top-0 lg:w-1/2 overflow-auto md:gap-10">
                  <div className="flex gap-8 w-full justify-between">
                    {categories.map((category) => (
                      <div
                        key={category.key}
                        className="flex flex-col text-center md:justify-center items-center"
                      >
                        <div className="border-2 border-[#002B6A] rounded-full flex items-center lg:justify-center">
                          <RadioButton
                            inputId={`kinerja_${item.key}_${category.key}`}
                            name={`kinerja_${item.key}`}
                            value={category.key}
                            onChange={(e) =>
                              handleSelection("kinerja", index, e.value)
                            }
                            checked={kinerjaSelections[index] === category.key}
                          />
                        </div>
                        <label htmlFor={`kinerja_${item.key}_${category.key}`}>
                          {category.name}
                        </label>
                      </div>
                    ))}
                  </div>
                  <h1 className="text-center uppercase bg-blue-500 text-white">
                    Kinerja
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-4 items-center">
        <button
          className="inline-block rounded bg-indigo-600 px-4 py-2 font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
          onClick={handleSaveSystem}
        >
          {loader ? (
            <span className="loading loading-dots loading-md"></span>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </>
  );
};

export default FormSystem;
