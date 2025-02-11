/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";

const Pliker = [
  "Berorientasi pelayanan",

  "Akuntabel",

  "Kompeten",

  "Harmonis",

  "Loyal",

  "Adaptif",

  "Kolaboratif",
];
const LeadBO = [
  "Pegawai menerima masukan secara rutin",
  "Pimpinan memberikan contoh yang baik",
  "Pimpinan memeberikan pujian",
  "Pimpinan melakukan program coaching",
  "Pimpinan bukan hanya bicara, tapi mengambil tindakan",
  "Pimpinan menekankan pentingnya BerAKHLAK",
  "Pimpinan melaksanakan perogram mentoring",
  "Pimpinan mendorong untuk memberikan layanan terbaik",
];
const People = [
  "Pegawai memenuhi kebutuhan masyarakat",
  "Pegawai ramah, cekatan, solutif dan dapat diandalkan",
  "Pegawai melakukan perbaikan tiada henti",
  "Pegawai jujur, bertanggung jawab, cermat, disiplin dan berintegritas tinggi",
  "Kekayaan dan barang milik negara digunakan secara bertanggungjawab, efektif, dan efisien",
  "Pegawai tidak menyalahgunakan kewenangan jabatan",
  "Pegaeai meningkatkan kompetensi diri",
  "Pegawai membantu orang lain belajar",
  "Pegawai melaksanakan tugas dengan kualitas terbaik",
  "Pegawai menghargai setiap orang apapun latar belakangnya",
  "Pegawai suka menolong orang lain",
  "Pegawai membangun lingkungan yang kondusif",
  "Pegawai memegang teguh ideologi pancasila UUD 1945",
  "Pegawai menjaga nama baik ASN",
  "Pegawai menjaga rahasia jabatan dan negara",
  "pegawai cepat menyesuaikan diri",
  "Pegawai terus berinovasi",
  "Pegawai bertindak proaktif",
  "Pegawai memberi kesempatan untuk berkontribusi",
  "Pegawai terbaka dalam bekerjasama",
  "Pegawai menggerakan pemanfaatan berbagai sumberdaya",
];

const System = [
  "BPS Kab.Tasikmalaya memberkan sanksi untuk pegawai yang tidak berakhlak",
  "BPS Kab. Tasikmalaya memiliki standar yang jelas",
  "BPS Kab. Tasikmalaya memberikan penghargaan kepada pegawai",
  "BPS Kab. Tasikmalaya telah memiliki media sosial",
  "BPS Kab. Tasikmalaya memiliki sarana bagi pegawai",
  "BPS Kab. Tasikmalaya memiliki sejumlah inisiatif atau program",
  "BPS Kab. Tasikmalaya melaksanakan inisiatif atau program",
  "Pegawai menjujukan kualitas pelayanan yang luar biasa",
  "Terdapat jalur atau media komunikasi untuk mensosialisasikan BerAKHLAK",
  "Perogram peningkatan BerAKHLAK dilakukan dengan mendengarkan saran atau masukan",
  "Penghargaan yang berkaitan dengan nilai BerAKHLAK dilakukan secara adil dan transparan",
];

const Tables = ({ tahun, triwulan }) => {
  const [dataPliker, setDataPliker] = useState([]);
  const [dataLeadbo, setDataLeadbo] = useState([]);
  const [dataPeople, setDataPeople] = useState([]);
  const [dataSystem, setDataSystem] = useState([]);
  const [isLoadingPliker, setIsLoadingPliker] = useState(true);

  console.log(tahun, triwulan);

  useEffect(() => {
    const getPertanyaan = async () => {
      setIsLoadingPliker(true);
      try {
        const response = await axios.get(
          `https://aang.umkmpalangan.my.id/gap-survey-priker/${tahun}/${triwulan}`
        );
        setDataPliker(response.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoadingPliker(false);
      }
    };

    const getPertanyaanLead = async () => {
      setIsLoadingPliker(true);
      try {
        const response = await axios.get(
          `https://aang.umkmpalangan.my.id/gap-survey-leadbo/${tahun}/${triwulan}`
        );
        setDataLeadbo(response.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoadingPliker(false);
      }
    };
    const getPertanyaanPeople = async () => {
      setIsLoadingPliker(true);
      try {
        const response = await axios.get(
          `https://aang.umkmpalangan.my.id/gap-survey-pebo/${tahun}/${triwulan}`
        );
        setDataPeople(response.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoadingPliker(false);
      }
    };
    const getPertanyaanSystem = async () => {
      setIsLoadingPliker(true);
      try {
        const response = await axios.get(
          `https://aang.umkmpalangan.my.id/gap-survey-sysbo/${tahun}/${triwulan}`
        );
        setDataSystem(response.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoadingPliker(false);
      }
    };
    getPertanyaan();
    getPertanyaanLead();
    getPertanyaanPeople();
    getPertanyaanSystem();
  }, [tahun, triwulan]);

  console.log(dataPliker);

  return (
    <div>
      <div className="rounded-lg flex flex-col gap-4 pb-20">
        <div className="overflow-x-auto rounded-t-lg">
          <table className="min-w-full divide-y-2 border divide-gray-200 bg-white text-sm">
            <thead className="bg-[#002B6A]">
              <tr className="uppercase">
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  No
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Indikator
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Harapan
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Kinerja
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Tahun
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Triwulan
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Gap
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Konversi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {isLoadingPliker
                ? Array.from({ length: 5 }).map((_, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap px-4 py-2">
                        <div className="h-2.5 bg-gray-300 rounded-full w-6 mb-2.5"></div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <div className="h-2.5 bg-gray-300 rounded-full w-32 mb-2.5"></div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <div className="h-2.5 bg-gray-300 rounded-full w-12 mb-2.5"></div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <div className="h-2.5 bg-gray-300 rounded-full w-12 mb-2.5"></div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <div className="h-2.5 bg-gray-300 rounded-full w-12 mb-2.5"></div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <div className="h-2.5 bg-gray-300 rounded-full w-12 mb-2.5"></div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <div className="h-2.5 bg-gray-300 rounded-full w-12 mb-2.5"></div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <div className="h-2.5 bg-gray-300 rounded-full w-12 mb-2.5"></div>
                      </td>
                    </tr>
                  ))
                : dataPliker.map((item, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {Pliker[index]}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {item.x}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {item.y}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {item.tahun}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {item.triwulan}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {item.gap}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {item.konversi}
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto rounded-t-lg">
          <table className="min-w-full divide-y-2 border divide-gray-200 bg-white text-sm">
            <thead className="bg-[#002B6A]">
              <tr className="uppercase">
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  No
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Indikator
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Harapan
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Kinerja
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Tahun
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Triwulan
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Gap
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Konversi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {isLoadingPliker
                ? Array.from({ length: 5 }).map((_, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap px-4 py-2">
                        <div className="h-2.5 bg-gray-300 rounded-full w-6 mb-2.5"></div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <div className="h-2.5 bg-gray-300 rounded-full w-32 mb-2.5"></div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <div className="h-2.5 bg-gray-300 rounded-full w-12 mb-2.5"></div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <div className="h-2.5 bg-gray-300 rounded-full w-12 mb-2.5"></div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <div className="h-2.5 bg-gray-300 rounded-full w-12 mb-2.5"></div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <div className="h-2.5 bg-gray-300 rounded-full w-12 mb-2.5"></div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <div className="h-2.5 bg-gray-300 rounded-full w-12 mb-2.5"></div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <div className="h-2.5 bg-gray-300 rounded-full w-12 mb-2.5"></div>
                      </td>
                    </tr>
                  ))
                : dataLeadbo.map((item, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {LeadBO[index]}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {item.x}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {item.y}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {item.tahun}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {item.triwulan}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {item.gap}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {item.konversi}
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto rounded-t-lg">
          <table className="min-w-full divide-y-2 border divide-gray-200 bg-white text-sm">
            <thead className="bg-[#002B6A]">
              <tr className="uppercase">
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  No
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Indikator
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Harapan
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Kinerja
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Tahun
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Triwulan
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Gap
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Konversi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {isLoadingPliker
                ? Array.from({ length: 5 }).map((_, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap px-4 py-2">
                        <div className="h-2.5 bg-gray-300 rounded-full w-6 mb-2.5"></div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <div className="h-2.5 bg-gray-300 rounded-full w-32 mb-2.5"></div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <div className="h-2.5 bg-gray-300 rounded-full w-12 mb-2.5"></div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <div className="h-2.5 bg-gray-300 rounded-full w-12 mb-2.5"></div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <div className="h-2.5 bg-gray-300 rounded-full w-12 mb-2.5"></div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <div className="h-2.5 bg-gray-300 rounded-full w-12 mb-2.5"></div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <div className="h-2.5 bg-gray-300 rounded-full w-12 mb-2.5"></div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <div className="h-2.5 bg-gray-300 rounded-full w-12 mb-2.5"></div>
                      </td>
                    </tr>
                  ))
                : dataPeople.map((item, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {People[index]}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {item.x}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {item.y}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {item.tahun}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {item.triwulan}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {item.gap}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {item.konversi}
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto rounded-t-lg">
          <table className="min-w-full divide-y-2 border divide-gray-200 bg-white text-sm">
            <thead className="bg-[#002B6A]">
              <tr className="uppercase">
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  No
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Indikator
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Harapan
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Kinerja
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Tahun
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Triwulan
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Gap
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Konversi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {isLoadingPliker
                ? Array.from({ length: 5 }).map((_, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap px-4 py-2">
                        <div className="h-2.5 bg-gray-300 rounded-full w-6 mb-2.5"></div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <div className="h-2.5 bg-gray-300 rounded-full w-32 mb-2.5"></div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <div className="h-2.5 bg-gray-300 rounded-full w-12 mb-2.5"></div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <div className="h-2.5 bg-gray-300 rounded-full w-12 mb-2.5"></div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <div className="h-2.5 bg-gray-300 rounded-full w-12 mb-2.5"></div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <div className="h-2.5 bg-gray-300 rounded-full w-12 mb-2.5"></div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <div className="h-2.5 bg-gray-300 rounded-full w-12 mb-2.5"></div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <div className="h-2.5 bg-gray-300 rounded-full w-12 mb-2.5"></div>
                      </td>
                    </tr>
                  ))
                : dataSystem.map((item, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {System[index]}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {item.x}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {item.y}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {item.tahun}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {item.triwulan}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {item.gap}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {item.konversi}
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
        {/* Repeat similar structure for other tables */}
      </div>
    </div>
  );
};

export default Tables;
