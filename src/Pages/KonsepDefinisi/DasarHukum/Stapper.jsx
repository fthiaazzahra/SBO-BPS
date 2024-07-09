import axios from "axios";
import { useEffect, useState } from "react";

const ListDasarHukum = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/dasar_hukum_get"
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

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
