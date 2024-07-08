const data = [
  {
    no: 1,
    title: "Undang- Undang Dasar Negara Republik Indonesia Tahun 1945",
  },
  {
    no: 2,
    title: "Undang-Undang Nomor 16 Tahun 1997 tentang Statistik",
  },
  {
    no: 3,
    title:
      "Undang-Undang Nomor 28 Tahun 199 tentang Penyelenggaraan Negara yang Bersih dan Bebas dari Korupsi, Kolusi, dan Nepotisme",
  },
  {
    no: 4,
    title:
      "Undang-Undang Nomor 5 Tahun 2014 tentang Aparatur Sipil Negara. (Lembaran Negara Republik Indonesia Nomor 191 Tahun 2013);",
  },
  {
    no: 5,
    title:
      "Peraturan Presiden Republik Indonesia Nomor 86 Tahun 2007 tentang Badan Pusat Statistik (Lembaran Negara Republik Indonesia Tahun 2007 Nomor 39);",
  },
  {
    no: 6,
    title:
      "Peraturan Menteri Pendayagunaan Aperatur Negara dan Reformasi Birokrasi Nomor 10 Tahun 2011 tentang Pedoman Pelaksaan Program Manjemen Perubahan;",
  },
  {
    no: 7,
    title:
      "Peraturan Menteri Pendayagunaan Aparatur Negara dan Reformasi Briokrasi Nomor 39 Tahun 2012 tentang Pedoman Pengembangan Budaya Kerja (Berita Negara Republik Indonesia Nomor 751 Tahun 2012);",
  },
  {
    no: 8,
    title:
      "Peraturan Menteri Pendayagunaan Aperatur Negara dan Reformasi Biroaksi Nomor 27 Tahun 2014 tentang Pedoman Pembangunan Agen Perubahan di Instansi Pemerintah (Berita Negara Republik Indonesia Tahun 2014 Nomor 1455);",
  },
  {
    no: 9,
    title:
      "Peraturan Menteri Pendayagunaan Aparatur Negara dan Reformasi Birokasi Nomor 25 Tahun 2020 tentang Road Map Reformasi Biroaksi 2020-2024 (Berita Negara Republik Indonesia Nomor 441 Tahun 2020) sebagaimana telah diubah dengan Peraturan Menteri Pendayagunaan Aperatur Negara dan Reformasi Biroaksi Nomor 3 Tahun 2023 tentang Perubahan Atas Peraturan Menteri Pendayagunaan Aparatur Negara dan Reformasi Birokrasi Nomor 25 Tahun 2020 tentang Road Map Reformasi Birokrasi 2020–2024 (Berita Negara Republik Indonesia Nomor 233 Tahun 2023);",
  },
  {
    no: 10,
    title:
      "Peraturan Kepala Badan Pusat Statistik Nomor 7 Tahun 2013 tentang Kode Etik Pegawai di Lingkungan Badan Pusat Statistik; ",
  },
  {
    no: 11,
    title:
      "Peraturan Kepala Badan Pusat Statistik Nomor 87 Tahun 2017 tentang Organisasi dan Tata Kerja Politeknik Statistika STIS; 12.Peraturan Badan Pusat Statistik Nomor 7 Tahun 2020 tentang Organisasi dan Tata Kerja Badan Pusat Statistik (Berita Negara Republik Indonesia Tahun 2020 Nomor 1585);  dan",
  },
  {
    no: 12,
    title:
      "Peraturan Badan Pusat Statistik Nomor 8 Tahun 2020 tentang Organisasi dan Tata Kerja Badan Pusat Statistik Provinsi dan Badan Pusat Statistik Kabupaten/Kota (Lembaran Negara Republik Indonesia Tahun 2020 Nomor 1586).",
  },
];

const ListDasarHukum = () => {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-4xl text-black font-bold">
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
