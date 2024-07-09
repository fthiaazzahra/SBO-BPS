const data = [
    {
      no: 1,
      title: "BPS Kabupaten Tasikmalaya memberikan sanksi terhadap pegawai yang melakukan tindakan yang tidak sesuai dengan BerAKHLAK",
    },
    {
      no: 2,
      title: "BPS Kabupaten Tasikmalaya memiliki standar yang jelas dalam mengimplementasikan BerAKHLAK",
    },
    {
      no: 3,
      title:
        "BPS Kabupaten Tasikmalaya memberikan penghargaan kepada pegawai yang menunjukkan nilai BerAKHLAK yang sangat baik",
    },
    {
      no: 4,
      title:
        "BPS Kabupaten Tasikmalaya telah memiliki media (email, telepon, sms, whatsapp, dll) untuk menampung keluhan dari stakeholder (eksternal dan internal)",
    },
    {
      no: 5,
      title:
        "BPS Kabupaten Tasikmalaya telah memiliki sarana bagi pegawainya untuk dapat secara aktif menyuarakan pendapat mereka dalam upaya untuk meningkatkan nilai BerAKHLAK menjadi budaya organisasi",
    },
    {
      no: 6,
      title:
        "BPS Kabupaten Tasikmalaya memiliki sejumlah inisiatif atau program untuk meningkatkan BerAKHLAK menjadi budaya organisasi",
    },
    {
      no: 7,
      title:
        "Peraturan Menteri Pendayagunaan Aparatur Negara dan Reformasi Briokrasi Nomor 39 Tahun 2012 tentang Pedoman Pengembangan Budaya Kerja (Berita Negara Republik Indonesia Nomor 751 Tahun 2012);BPS Kabupaten Tasikmalaya telah melaksanakan/ mengimplementasikan inisiatif atau program untuk meningkatkan BerAKHLAK menjadi budaya dalam pekerjaan sehari-hari",
    },
    {
      no: 8,
      title:
        "Pegawai yang menunjukkan kualitas pelayanan yang luar biasa diberi prioritas kesempatan untuk meningkatkan kompetensinya",
    },
    {
      no: 9,
      title:
        "Terdapat jalur/media komunikasi untuk mensosialisasikan BerAKHLAK dan budaya pelayanan kepada semua pegawai BPS secara rutin (misalnya melalui Community, Varia Statistik, email, whatsapp group, dll)",
    },
    {
      no: 10,
      title:
        "Inisiatif atau program peningkatan nilai BerAKHLAK dilakukan dengan mendengarkan saran/masukan dari stakeholder (internal dan eksternal) ",
    },
    {
      no: 11,
      title:
        "Penghargaan yang berkaitan dengan implementasi nilai BerAKHLAK dalam meningkatkan kualitas pelayanan diberikan secara adil dan transparan",
    },
  ];
  
  const ListSysBO = () => {
    return (
      <div>
        <div className="mb-10">
          <h1 className="text-4xl text-black font-bold">
           Indikator System Berorganisasi
          </h1>
        </div>
        <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
          {data.map((item) => (
            <li className="mb-10 ms-6" key={item.no}>
              <span className="absolute flex items-center justify-center w-8 h-8 bg-[#002B6A] rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                <span className="text-white">{item.no}</span>
              </span>
              <h3 className="text-base text-black text-justify">{item.title}</h3>
              
            </li>
          ))}
        </ol>
      </div>
    );
  };
  
  export default ListSysBO;
  