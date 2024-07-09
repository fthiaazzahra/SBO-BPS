const data = [
    {
      no: 1,
      title: "Berorientasi pelayanan, yaitu memahami dan memenuhi kebutuhan masyarakat, ramah, cekatan, solutif, dapat diandalkan, dan melakukan perbaikan tiada henti.",
    },
    {
      no: 2,
      title: "Akuntabel, yaitu melaksanakan tugas dengan jujur, bertanggungjawab, cermat, disiplin berintegritas tinggi, menggunakan kekayaan dan barang milik negara secara bertanggungjawab, efektif, efisien, dan tidak menyalahgunakan kewenangan jabatan",
    },
    {
      no: 3,
      title:
        "Kompeten, yaitu meningkatkan kompetensi diri untuk menjawab tantangan yang selalu berubah, membantu orang lain belajar, dan melaksanakan tugas dengan kualitas terbaik",
    },
    {
      no: 4,
      title:
        "Harmonis, yaitu menghargai setiap orang apapun latar belakangnya, suka menolong orang lain, dan membangun lingkungan kerja yang kondusif",
    },
    {
      no: 5,
      title:
        "Loyal, yaitu memegang teguh ideologi Pancasila, Undang-Undang Dasar Negara Republik Indonesia Tahun 1945, setia kepada Negara Kesatuan Republik Indonesia serta pemerintahan yang sah, menjaga nama baik sesama ASN, Pimpinan, Instansi, dan Negara, dan menjaga rahasia jabatan dan negara.",
    },
    {
      no: 6,
      title:
        "Adaptif, yaitu cepat menyesuaikan diri menghadapi perubahan, terus berinovasi dan mengembangkan kreativitas, dan bertindak proaktif.",
    },
    {
      no: 7,
      title:
        "Kolaboratif, yaitu memberi kesempatan kepada berbagai pihak untuk berkontribusi, terbuka dalam bekerja sama untuk menghasilkan nilai tambah, dan menggerakkan pemanfaatan berbagai sumberdaya untuk tujuan bersama.",
    },
  ];
  
  const ListPriker = () => {
    return (
      <div>
        <div className="mb-10">
          <h1 className="text-4xl text-black font-bold">
            Indikator Perilaku Kerja Pegawai
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
  
  export default ListPriker;
  