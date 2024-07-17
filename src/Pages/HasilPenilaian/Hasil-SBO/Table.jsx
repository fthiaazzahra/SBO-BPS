const data = [
  {
    name: "John Doe",
    dob: "24/05/1995",
    role: "Web Developer",
    salary: "$120,000",
  },
  {
    name: "Jane Doe",
    dob: "04/11/1980",
    role: "Web Designer",
    salary: "$100,000",
  },
  {
    name: "Gary Barlow",
    dob: "24/05/1995",
    role: "Singer",
    salary: "$20,000",
  },
  {
    name: "John Doe",
    dob: "24/05/1995",
    role: "Web Developer",
    salary: "$120,000",
  },
  {
    name: "Jane Doe",
    dob: "04/11/1980",
    role: "Web Designer",
    salary: "$100,000",
  },
  {
    name: "Gary Barlow",
    dob: "24/05/1995",
    role: "Singer",
    salary: "$20,000",
  },
  {
    name: "Gary Barlow",
    dob: "24/05/1995",
    role: "Singer",
    salary: "$20,000",
  },
];
const Tables = () => {
  // Data objek untuk tabel
  // Tambahkan data sesuai kebutuhan
  //   ];

  // State untuk pagination
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const usersPerPage = 3;

  // Menghitung index data yang akan ditampilkan pada halaman ini
  //   const indexOfLastUser = currentPage * usersPerPage;
  //   const indexOfFirstUser = indexOfLastUser - usersPerPage;
  //   const currentUsers = data.slice(indexOfFirstUser, indexOfLastUser);

  // Fungsi untuk mengubah halaman
  //   const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="rounded-lg flex flex-col gap-4 pb-20">
        <div className="overflow-x-auto rounded-t-lg">
          <div className="text-base font-semibold pb-2">Prilaku Kerja</div>
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
                  Gap
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Konpersi
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {data.map((user, index) => (
                <tr key={index}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {index + 1}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {user.name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {user.dob}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {user.role}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {user.salary}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {user.salary}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto rounded-t-lg">
          <div className="text-base font-semibold pb-2">
            Leader Budaya Organisasi
          </div>
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
                  Gap
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Konpersi
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {data.map((user, index) => (
                <tr key={index}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {index + 1}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {user.name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {user.dob}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {user.role}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {user.salary}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {user.salary}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto rounded-t-lg">
          <div className="text-base font-semibold pb-2">
            People Budaya Organisasi
          </div>
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
                  Gap
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Konpersi
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {data.map((user, index) => (
                <tr key={index}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {index + 1}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {user.name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {user.dob}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {user.role}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {user.salary}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {user.salary}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto rounded-t-lg">
          <div className="text-base font-semibold pb-2">
            System Budaya Organisasi
          </div>
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
                  Gap
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Konpersi
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {data.map((user, index) => (
                <tr key={index}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {index + 1}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {user.name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {user.dob}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {user.role}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {user.salary}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {user.salary}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {/* <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
          <ol className="flex justify-end gap-1 text-xs font-medium">
            <li>
              <a
                href="#"
                className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <span className="sr-only">Prev Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            {data.map((_, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900 ${
                    currentPage === index + 1
                      ? "border-blue-600 bg-blue-600 text-white"
                      : ""
                  }`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </a>
              </li>
            ))}

            <li>
              <a
                href="#"
                className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === Math.ceil(data.length / usersPerPage)}
              >
                <span className="sr-only">Next Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ol>
        </div> */}
      </div>
    </div>
  );
};

export default Tables;
