// import axios from "axios";
// import { useEffect, useState } from "react";

const data = [
  {
    no: 1,
    title:
      "Pegawai menerima masukan secara rutin dari pimpinan mengenai implementasi nilai BerAKHLAK dalam pelaksanaan tugas sehari-hari",
  },
  {
    no: 2,
    title:
      "Pimpinan memberikan contoh yang baik dalam implementasi nilai-nilai BerAKHLAK",
  },
  {
    no: 3,
    title:
      "Pimpinan memberikan pujian ketika salah seorang bawahan memberikan pelayanan terbaik kepada stakeholder (internal dan eksternal) sesuai dengan nilai BerAKHLAK",
  },
  {
    no: 4,
    title:
      "Pimpinan melakukan program coaching yang efektif untuk membantu pegawai mengembangkan kompetensi mereka. (Note: Coaching adalah teknik atau proses yang dilakukan untuk membuka potensi seseorang dalam rangka mengoptimalkan kinerja dan pengembangan dirinya dengan cara memberikan tools, pengetahuan, dan kesempatan yang dibutuhkan)",
  },
  {
    no: 5,
    title:
      "Pimpinan bukan hanya berbicara, tetapi mengambil tindakan yang nyata untuk meningkatkan nilai BerAKHLAK sebagai budaya organisasi",
  },
  {
    no: 6,
    title:
      "Pimpinan menekankan secara berulang-ulang tentang pentingnya BerAKHLAK diimplementasikan dalam pekerjaan sehari-hari",
  },
  {
    no: 7,
    title:
      "Pimpinan melaksanakan program mentoring yang efektif untuk membantu pegawai mengembangkan kompetensi. (note: Mentoring adalah proses membimbing/melatih yang dilakukan oleh orang yang ahli di bidang tertentu terhadap pegawai yang membutuhkan peningkatan kompetensi di bidang tersebut)",
  },
  {
    no: 8,
    title:
      "Pimpinan Mendorong Semua Bawahannya Untuk Selalu Memberikan Layanan Terbaik",
  },
];

const ListDasarHukum = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:5000/dasar_hukum_get"
  //       );
  //       setData(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getData();
  // }, []);

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-2xl md:text-4xl text-black font-bold">
          Dasar Umum untuk pelaksanaan Survei Budaya Organisasi
        </h1>
      </div>
      <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {data.map((item) => (
          <li className="mb-10 ms-6" key={item.no}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-[#002B6A] rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
              <span className="text-white">{item.no}</span>
            </span>
            <h3 className="text-base text-black text-justify">{item.title}</h3>
            <p className="text-sm">Step details here</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ListDasarHukum;
