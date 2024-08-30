import { RadioButton } from "primereact/radiobutton";
import { useRef, useState, useEffect } from "react";
import { Toast } from "primereact/toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: 1, key: 1 },
  { name: 2, key: 2 },
  { name: 3, key: 3 },
  { name: 4, key: 4 },
];

const FormSystem = () => {
  const navigate = useNavigate();
  const [desable, setDesable] = useState(false);
  const [dataSystem, setDataSystem] = useState([]);
  const toastCenter = useRef(null);
  const [loader, setLoader] = useState(false);
  const [harapanSelections, setHarapanSelections] = useState([]);
  const [kinerjaSelections, setKinerjaSelections] = useState([]);

  useEffect(() => {
    const getPertanyaan = async () => {
      try {
        const response = await axios.get(
          "https://aang.umkmpalangan.my.id/pertanyaan_system_get"
        );
        setDataSystem(response.data);
        setHarapanSelections(new Array(response.data.length).fill(null));
        setKinerjaSelections(new Array(response.data.length).fill(null));
      } catch (error) {
        setLoader(false);
        console.error(error);
      }
    };
    getPertanyaan();
  }, []);

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

  const handleSaveSystem = async (e) => {
    e.preventDefault();

    if (harapanSelections.includes(null) || kinerjaSelections.includes(null)) {
      showMessage("warn", "Peringatan", "Semua pertanyaan harus diisi!");
      return;
    }

    try {
      setLoader(true);
      const response = await axios.post(
        "https://aang.umkmpalangan.my.id/isiSurvey",
        {
          triwulan: localStorage.getItem("triwulan"),
          label: "SysBO",
          nama: localStorage.getItem("name"),
          score_harapan: harapanSelections,
          score_kinerja: kinerjaSelections,
        }
      );
      if (response.status === 201) {
        showMessage("success", "Success", "Jawaban Kamu Berhasil Disimpan");
        setDesable(true);
        navigate("/finish-survey");
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
        {dataSystem.map((item, index) => (
          <div
            key={item.nomor}
            className="border-2 flex flex-col gap-4 py-4 px-4 rounded-md shadow-md p-2 surface-border border-round surface-ground align-items-center font-medium"
          >
            <div className="pb-4 flex gap-2">
              <span className="rounded-full text-black">{item.nomor}</span>
              <p className="text-justify">{item.pertanyaan_system}</p>
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
          className={`inline-block rounded bg-green-500 px-4 py-2 font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 ${
            desable ? "hidden" : "block"
          }`}
          onClick={handleSaveSystem}
        >
          {loader ? (
            <span className="loading loading-dots loading-md"></span>
          ) : (
            "Submit and Finish"
          )}
        </button>
      </div>
    </>
  );
};

export default FormSystem;
