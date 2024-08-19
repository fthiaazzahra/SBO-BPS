/* eslint-disable no-unused-vars */
import axios from "axios";
import { RadioButton } from "primereact/radiobutton";
import { useState } from "react";
import Select from "react-select";
import { Toast } from "primereact/toast";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const data = [
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
  { name: ` Pegawai melaksanakan tugas dengan kualitas terbaik.`, key: "9" },
  {
    name: `Pegawai menghargai setiap orang apapun latar belakangnya`,
    key: "10",
  },
  { name: `Pegawai suka menolong orang lain`, key: "11" },
  { name: `Pegawai membangun lingkungan kerja yang kondusif`, key: "12" },
  {
    name: `Pegawai memegang teguh ideologi Pancasila,Undang-Undang Dasar Negara Republik Indonesia tahun 1945, setia kepada Negara Kesatuan Republik Indonesia serta pemerintahan yang sah`,
    key: "13",
  },
  {
    name: `Pegawai menjaga nama baik sesama ASN, pimpinan, instansi, dan negara.`,
    key: "14",
  },
  { name: `Pegawai menjaga rahasia jabatan dan negara`, key: "15" },
  { name: ` Pegawai cepat menyesuaikan diri menghadapi perubahan`, key: "16" },
  {
    name: ` Pegawai terus berinovasi dan mengembangkan kreativitas`,
    key: "17",
  },
  { name: `Pegawai bertindak proaktif `, key: "18" },
  {
    name: `Pegawai memberi kesempatan kepada berbagai pihak untuk berkontribusi`,
    key: "19",
  },
  {
    name: `Pegawai terbuka dalam bekerja sama untuk menghasilkan nilai tambah`,
    key: "20",
  },
  {
    name: `Pegawai menggerakkan pemanfaatan berbagai sumberdaya untuk tujuan bersama`,
    key: "21",
  },
];

const options = [
  { value: "diyah", label: "Diyah Citra Ayu Kurnia Sukma, S.E., M.Si" },
  { value: "iis", label: "Iis Irmawati, A.Md" },
  { value: "ika", label: "Ika Nuryani, SST, M.Stat." },
];

const optionsTriwulan = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
];

const categories = [
  { name: "1", key: "1" },
  { name: "2", key: "2" },
  { name: "3", key: "3" },
  { name: "4", key: "4" },
];

const FormKandidat3 = () => {
  const navigate = useNavigate();
  const [desable, setDesable] = useState(false);
  const toastCenter = useRef(null);
  const [load, setLoad] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [selectedTriwulan, setSelectedTriwulan] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const { value, label } = selectedCandidate || {};
  const { value: valueTriwulan, label: labelTriwulan } = selectedTriwulan || {};

  const showMessage = (event, ref, severity, detail) => {
    ref.current.show({
      severity: severity,
      summary: severity === "success" ? "Success" : "Error",
      detail: detail,
      life: 3000,
    });
  };

  // Inisialisasi state selections sebagai array dengan panjang yang sama dengan jumlah pertanyaan
  const [selections, setSelections] = useState(Array(data.length).fill(null));

  const [
    pertanyaan_1,
    pertanyaan_2,
    pertanyaan_3,
    pertanyaan_4,
    pertanyaan_5,
    pertanyaan_6,
    pertanyaan_7,
    pertanyaan_8,
    pertanyaan_9,
    pertanyaan_10,
    pertanyaan_11,
    pertanyaan_12,
    pertanyaan_13,
    pertanyaan_14,
    pertanyaan_15,
    pertanyaan_16,
    pertanyaan_17,
    pertanyaan_18,
    pertanyaan_19,
    pertanyaan_20,
    pertanyaan_21,
  ] = selections;
  console.log(pertanyaan_1);
  // Fungsi untuk menangani perubahan pilihan radio button
  const handleSelection = (questionKey, value) => {
    // Mengonversi questionKey menjadi indeks array
    const index = parseInt(questionKey) - 1;

    // Memperbarui state selections dengan nilai baru pada indeks yang sesuai
    setSelections((prevSelections) => {
      // Salin array sebelumnya
      const newSelections = [...prevSelections];
      // Set nilai baru pada indeks yang sesuai
      newSelections[index] = value;
      // Kembalikan array yang sudah diperbarui
      return newSelections;
    });
  };
  console.log(localStorage.getItem("umur"));

  // Mencetak selections ke konsol untuk debug
  console.log(selections);

  // Fungsi untuk menangani submit form
  const handleSubmit = async (e) => {
    if (selections.includes(null)) {
      alert("Semua pertanyaan harus diisi!");
      return;
    }
    e.preventDefault();

    // Lakukan aksi submit, misalnya mengirim data ke server
    console.log("Form submitted:", selections);
    console.log(localStorage.getItem("umur"));

    try {
      setLoad(true);
      await axios.post(
        "https://aang.umkmpalangan.my.id/survey_karyawan_teladan",
        {
          triwulan: "2",
          nama_lengkap: localStorage.getItem("nama"),
          nip: localStorage.getItem("nip"),
          jenis_kelamin: localStorage.getItem("jkl"),
          pendidikan: localStorage.getItem("pendidikan"),
          umur: localStorage.getItem("umur"),
          masa_kerja: localStorage.getItem("masaKerja"),
          nomor_kandidat: `Kandidat 3`,
          nama_kandidat: "Nani Hendrayani, S.IP",
          pertanyaan_1: pertanyaan_1,
          pertanyaan_2: pertanyaan_2,
          pertanyaan_3: pertanyaan_3,
          pertanyaan_4: pertanyaan_4,
          pertanyaan_5: pertanyaan_5,
          pertanyaan_6: pertanyaan_6,
          pertanyaan_7: pertanyaan_7,
          pertanyaan_8: pertanyaan_8,
          pertanyaan_9: pertanyaan_9,
          pertanyaan_10: pertanyaan_10,
          pertanyaan_11: pertanyaan_11,
          pertanyaan_12: pertanyaan_12,
          pertanyaan_13: pertanyaan_13,
          pertanyaan_14: pertanyaan_14,
          pertanyaan_15: pertanyaan_15,
          pertanyaan_16: pertanyaan_16,
          pertanyaan_17: pertanyaan_17,
          pertanyaan_18: pertanyaan_18,
          pertanyaan_19: pertanyaan_19,
          pertanyaan_20: pertanyaan_20,
          pertanyaan_21: pertanyaan_21,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setTimeout(() => {
        setLoad(false);
        showMessage(e, toastCenter, "success", "Data Berhasil Disimpan");
        setDesable(true);
        navigate("/finish-survey");
      }, 3000);
    } catch (error) {
      setLoad(false);
      showMessage(e, toastCenter, "error", "Please fill out all fields");
    }
  };

  const handleCandidateChange = (selectedOption) => {
    setSelectedCandidate(selectedOption);
  };
  console.log(selectedCandidate);
  const handleTriwulan = (selectedOption) => {
    setSelectedTriwulan(selectedOption);
  };
  return (
    <div className="flex flex-col h-12rem gap-7 items-center ">
      <div className="form-group w-full lg:w-1/2">
        <div className="flex items-stretch gap-4">
          <img
            src="/img/hijab.avif"
            alt=""
            className="aspect-square w-20 rounded-lg object-cover"
          />

          <div>
            <h3 className="text-lg/tight font-medium text-gray-900">
              Nani Hendrayani, S.IP
            </h3>

            <p className="mt-0.5 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates voluptas distinctio nesciunt quas non animi.
            </p>
          </div>
        </div>
        {/* <Select
          id="pegawaiSelect"
          value={selectedTriwulan}
          onChange={handleTriwulan}
          options={optionsTriwulan}
          placeholder="Pilih Triwulan"
        /> */}
      </div>
      {data.map((item, idx) => (
        // Render setiap item dalam data sebagai div terpisah
        <div
          key={item.key}
          className="border-2 flex flex-col gap-4 py-4 px-4 w-full lg:w-1/2 rounded-md shadow-md p-2 surface-border border-round surface-ground align-items-center font-medium"
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
                    // Render setiap kategori sebagai radio button
                    <div
                      key={category.key}
                      className="flex flex-col text-center md:justify-center items-center"
                    >
                      <div className="border-2 border-[#002B6A] rounded-full flex items-center lg:justify-center">
                        <RadioButton
                          inputId={`category1_${item.key}_${category.key}`}
                          name={`category1_${item.key}`}
                          value={category.key}
                          onChange={(e) => handleSelection(item.key, e.value)}
                          checked={selections[idx] === category.key}
                        />
                      </div>
                      <label htmlFor={`category1_${item.key}_${category.key}`}>
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
                <h1 className="text-center rounded-sm uppercase bg-yellow-400 text-white">
                  Kinerja
                </h1>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="w-full flex justify-end">
        <button
          onClick={handleSubmit}
          className={`inline-block rounded bg-green-500 px-4 py-2 font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 ${
            desable ? "hidden" : "block"
          }`}
        >
          {load ? (
            <span className="loading loading-dots loading-md "></span>
          ) : (
            "Submit and Finish"
          )}
        </button>
      </div>
      <Toast ref={toastCenter} position="center" />
    </div>
  );
};

export default FormKandidat3;
