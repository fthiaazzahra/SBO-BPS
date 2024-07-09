import Footer from "../../../Components/Navbar/Footer/Footer";
import Navbar from "../../../Components/Navbar/Index";
import Jumbotron from "../DasarHukum/Jumbotron";

const akhlak = [
  {
    no: 1,
    title:
      "Berorientasi Pelayanan, yaitu komitmen memberikan pelayanan prima demi kepuasan masyarakat;",
  },
  {
    no: 2,
    title:
      "Akuntabel, yaitu bertanggung jawab atas kepercayaan yang diberikan;",
  },
  {
    no: 3,
    title: "Harmonis, yaitu saling peduli dan menghargai perbedaan",
  },
  {
    no: 4,
    title:
      "Loyal, yaitu berdedikasi dan mengutamakan kepentingan Bangsa dan Negara",
  },
  {
    no: 5,
    title:
      "Adaptif, yaitu terus berinovasi dan antusias dalam menggerakan serta menghadapi perubahan; dan ",
  },
  {
    no: 6,
    title: "Kolaboratif, yaitu membangun kerja sama yang sinegris",
  },
];

const values = [
  {
    category: "Berorientasi Pelayanan",
    points: [
      "Memahami dan memenuhi kebutuhan masyarakat;",
      "Ramah, cekatan, solutif, dan dapat diandalkan;",
      "Melakukan perbaikan tiada henti",
    ],
  },
  {
    category: "Akuntabel",
    points: [
      "Melaksanakan tugas dengan jujur, bertanggung jawab, cermat, disiplin dan berintegritas tinggi;",
      "Menggunakan kekayaan dan barang milik negara secara bertanggung jawab, efektif, dan efisien;",
      "Tidak menyalahgunakan kewenangan jabatan.",
    ],
  },
  {
    category: "Kompeten",
    points: [
      "Meningkatkan kompetensi diri untuk menjawab tantangan yang selalu berubah;",
      "Membantu orang lain belajar;",
      "Melaksanakan tugas dengan kualitas terbaik.",
    ],
  },
  {
    category: "Harmonis",
    points: [
      "Menghargai setiap orang apapun latar belakangnya;",
      "Suka menolong orang lain;",
      "Membangun lingkungan kerja yang kondusif.",
    ],
  },
  {
    category: "Loyal",
    points: [
      "Memegang teguh ideologi Pancasila, Undang-Undang Dasar Negara Republik Indonesia tahun 1945, setia kepada Negara Kesatuan Republik Indonesia serta pemerintahan yang sah;",
      "Menjaga nama baik sesama ASN, pimpinan, instansi, dan negara;",
      "Menjaga rahasia jabatan dan negara.",
    ],
  },
  {
    category: "Adaptif",
    points: [
      "Cepat menyesuaikan diri menghadapi perubahan;",
      "Terus berinovasi dan mengembangkan kreativitas;",
      "Bertindak proaktif.",
    ],
  },
  {
    category: "Kolaboratif",
    points: [
      "Memberi kesempatan kepada berbagai pihak untuk berkontribusi;",
      "Terbuka dalam bekerja sama untuk menghasilkan nilai tambah;",
      "Menggerakkan pemanfaatan berbagai sumber daya untuk tujuan bersama.",
    ],
  },
];

const Nilainilai = () => {
  return (
    <>
      <Navbar />
      <div className="w-full pt-[90px]">
        <Jumbotron title={"Nilai Inti"} />
      </div>
      <div className="w-full flex items-center justify-center py-8">
        <img src="/img/logo-berakhlak.png" alt="" className="" />
      </div>

      <div className="bg-white px-10 md:px-20 py-10 flex gap-4">
        <div className="w-full ">
          <h1 className="text-black text-base text-justify mb-4">
            Mengacu kepada Surat Edaran Menteri Pendayagunaan Aparatur Negara
            dan Reformasi Birokrasi Nomor 20 Tahun 2021 tentang Implementasi
            Core Values dan Employer Branding Aparatur Sipil Negara tertanggal
            26 Agustus 2021, BPS telah mengimplementasikan dan terus
            menyosialisasikan Core Values BERAKHLAK dan Employer Branding Bangga
            melayani Bangsa. Core values ASN BerAKHLAK sebagaimana dimaksud
            adalah sebagai berikut :{" "}
          </h1>
          <div className="mb-4">
            {akhlak.map((item) => (
              <div key={item.no}>
                <h1 className="text-black text-base">
                  {item.no}. {item.title}
                </h1>
              </div>
            ))}
          </div>
          <h1 className="text-black text-base text-justify mb-4">
            Penjabaran dari core values ASN BerAKHLAK juga tertuang pada Surat
            Edaran Menteri Pendayagunaan Aparatur Negara dan Reformasi Birokrasi
            Nomor 20 Tahun 2021 tentang Implementasi Core Values dan Employer
            Branding Aparatur Sipil Negara berupa panduan perilaku BerAKHLAK
            sebagai berikut:
          </h1>

          {values.map((item, key) => (
            <div key={key}>
              <h1 className="text-black text-base">
                {key + 1}. {item.category}
              </h1>

              <ul>
                {item.points.map((point) => (
                  <li className="text-black text-base" key={point}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-black text-base">
              Nilai-nilai dasar BerAKHLAK menjadi dasar penguatan budaya kerja
              di BPS untuk mendukung pencapaian kinerja individu dan tujuan
              organisasi/instansi sehingga perlu dilihat seberapa besar
              implementasi nilai dasar tersebut di BPS. Berdasarkan Road Map
              Nasional Penguatan Budaya Kerja ASN BerAKHLAK, setelah pencanangan
              tahun 2021, tahapan selanjutnya pada tahun 2022 adalah sosialisasi
              dan internalisasi budaya BerAKHLAK. BPS telah melaksanakan
              berbagai sosialisasi dan internalisasi tersebut, sehingga pada
              tahun 2023 dilaksanakan SBO untuk menilai seberapa besar
              implementasi BerAKHLAK di BPS.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Nilainilai;
