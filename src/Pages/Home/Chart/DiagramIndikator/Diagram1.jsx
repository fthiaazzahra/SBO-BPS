/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import axios from "axios";
import VerticalBarDemo from "../DiagramBatang";

export default function Diagram1({ tahun, triwulan }) {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  const [dataPliker, setDataPliker] = useState({});
  const [dataLeadbo, setDataLeadbo] = useState({});
  const [dataPeople, setDataPeople] = useState({});
  const [dataSystem, setDataSystem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // const [harapan, setHarapan] = useState([]);
  // const [kinerja, setKinerja] = useState([]);
  // console.log(harapan);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const responses = await Promise.all([
          axios.get(
            `https://aang.umkmpalangan.my.id/gap-survey-priker/${tahun}/${triwulan}`
          ),
          axios.get(
            `https://aang.umkmpalangan.my.id/gap-survey-leadbo/${tahun}/${triwulan}`
          ),
          axios.get(
            `https://aang.umkmpalangan.my.id/gap-survey-pebo/${tahun}/${triwulan}`
          ),
          axios.get(
            `https://aang.umkmpalangan.my.id/gap-survey-sysbo/${tahun}/${triwulan}`
          ),
        ]);

        setDataPliker(responses[0].data);
        setDataLeadbo(responses[1].data);
        setDataPeople(responses[2].data);
        setDataSystem(responses[3].data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [tahun, triwulan]);
  console.log(dataPliker.totalX);
  const harapan = [
    dataPliker.totalX,
    dataLeadbo.totalX,
    dataPeople.totalX,
    dataSystem.totalX,
  ];
  const kinerja = [
    dataPliker.totalY,
    dataLeadbo.totalY,
    dataPeople.totalY,
    dataSystem.totalY,
  ];

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const createChartData = (data) => ({
      labels: ["Harapan", "Kinerja"],
      datasets: [
        {
          data: [data.totalX, data.totalY],
          backgroundColor: [
            documentStyle.getPropertyValue("--yellow-500"),
            documentStyle.getPropertyValue("--blue-500"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--yellow-400"),
            documentStyle.getPropertyValue("--blue-400"),
          ],
        },
      ],
    });

    const options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
    };

    setChartData({
      pliker: createChartData(dataPliker),
      leadbo: createChartData(dataLeadbo),
      people: createChartData(dataPeople),
      system: createChartData(dataSystem),
    });
    setChartOptions(options);
  }, [dataPliker, dataLeadbo, dataPeople, dataSystem]);

  // useEffect(() => {
  //   setHarapan([dataPliker.totalX, dataLeadbo.totalX, dataPeople.totalX]);
  //   setKinerja([dataPliker.totalY, dataLeadbo.totalY, dataPeople.totalY]);
  // }, [tahun, triwulan]);
  return (
    <div className="">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="pb-4">
            <VerticalBarDemo newHarapan={harapan} newKinerja={kinerja} />
          </div>
          <div className="card grid md:grid-cols-2 lg:grid-cols-4 md:py-8 overflow-auto gap-4">
            <ChartCard
              title="Priker"
              data={chartData.pliker}
              options={chartOptions}
            />
            <ChartCard
              title="Lead-BO"
              data={chartData.leadbo}
              options={chartOptions}
            />
            <ChartCard
              title="People"
              data={chartData.people}
              options={chartOptions}
            />
            <ChartCard
              title="System"
              data={chartData.system}
              options={chartOptions}
            />
          </div>
        </>
      )}
    </div>
  );
}

function ChartCard({ title, data, options }) {
  return (
    <div className="p-4 rounded-md border-2 shadow-lg relative">
      <div className="absolute top-0 left-0 border rounded-br-badge rounded-tl-[5px] px-4 bg-[#E9781A] text-white">
        <span>{title}</span>
      </div>
      <Chart type="pie" data={data} options={options} className="" />
    </div>
  );
}
