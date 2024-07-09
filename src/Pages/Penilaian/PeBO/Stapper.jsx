const data = [
    {
      no: 1,
      title: "Pegawai memahami dan memenuhi kebutuhan masyarakat",
    },
    {
      no: 2,
      title: "Pegawai ramah, cekatan, solutif dan dapat diandalkan",
    },
    {
      no: 3,
      title:
        "Pegawai melakukan perbaikan tiada henti",
    },
    {
      no: 4,
      title:
        "Pegawai melaksanakan tugas dengan jujur, bertanggungjawab, cermat, disiplin dan berintegritas tinggi",
    },
    {
      no: 5,
      title:
        "Pegawai menggunakan kekayaan dan barang milik negara secara bertanggung jawab, efektif, dan efisien",
    },
    {
      no: 6,
      title:
        "Pegawai tidak menyalahgunakan kewenangan jabatan",
    },
    {
      no: 7,
      title:
        "Pegawai meningkatkan kompetensi diri untuk menjawab tantangan yang selalu berubah",
    },
    {
      no: 8,
      title:
        "Pegawai membantu orang lain belajar",
    },
    {
      no: 9,
      title:
        "Pegawai melaksanakan tugas dengan kualitas terbaik",
    },
    {
      no: 10,
      title:
        "Pegawai menghargai setiap orang apapun latar belakangnya ",
    },
    {
      no: 11,
      title:
        "Pegawai suka menolong orang lain",
    },
    {
      no: 12,
      title:
        "Pegawai membangun lingkungan kerja yang kondusif",
    },
    {
      no: 13,
      title:
        "Pegawai memegang teguh ideologi Pancasila,Undang-Undang Dasar Negara Republik Indonesia tahun 1945, setia kepada Negara Kesatuan Republik Indonesia serta pemerintahan yang sah",
    },
    {
       no: 14,
       title:
        "Pegawai menjaga nama baik sesama ASN, pimpinan, instansi, dan negara",
    },
    {
        no: 15,
        title:
         "Pegawai menjaga rahasia jabatan dan negara",
    },
    {
        no: 16,
        title: 
        "Pegawai cepat menyesuaikan diri menghadapi perubahan",
    },
    {
        no: 17,
        title:
        "Pegawai terus berinovasi dan mengembangkan kreativitas",
    },
    {
        no: 18,
        title:
        "Pegawai bertindak proaktif",
    },
    {
        no: 19,
        tittle:
        "Pegawai memberi kesempatan kepada berbagai pihak untuk berkontribusi",
    },
    {
        no: 20,
        title: 
        "Pegawai terbuka dalam bekerja sama untuk menghasilkan nilai tambah",
    },
    {
        no: 21,
        title:
        "Pegawai menggerakkan pemanfaatan berbagai sumberdaya untuk tujuan bersama"
    }
  ];
  
  const ListPeBO = () => {
    return (
      <div>
        <div className="mb-10">
          <h1 className="text-4xl text-black font-bold">
            Indikator People Budaya Organisasi
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
  
  export default ListPeBO;
  