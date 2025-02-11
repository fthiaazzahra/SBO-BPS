import { useState } from "react";
import { RadioButton } from "primereact/radiobutton";

export default function DynamicDemo() {
  const [selectedCategoryKey1, setSelectedCategoryKey1] = useState("");
  const [selectedCategoryKey2, setSelectedCategoryKey2] = useState("");
  const [selections, setSelections] = useState([]);
  const [prikerValue, setPrikerValue] = useState([]);

  console.log("Harapan:", selectedCategoryKey1);
  console.log("Kinerja:", selectedCategoryKey2);
  console.log("Selections:", selections);

  const categories = [
    { name: "1", key: "1" },
    { name: "2", key: "2" },
    { name: "3", key: "3" },
    { name: "4", key: "4" },
  ];
  const categories2 = [
    { name: "1", key: "1" },
    { name: "2", key: "2" },
    { name: "3", key: "3" },
    { name: "4", key: "4" },
  ];

  const handleSelection1 = (value) => {
    selections.push({ type: "harapan", value: value });
    setSelectedCategoryKey1(value);
  };

  console.log("prikerValue:", prikerValue);

  const handleSelection2 = (value) => {
    selections.push({ type: "kinerja", value: value });
    setSelectedCategoryKey2(value);
  };

  return (
    <div className="card flex justify-center w-full">
      <div className="flex flex-col lg:flex-row md:justify-center gap-4 md:gap-20 w-full ">
        <div className="flex flex-col  gap-3 w-full justify-center  lg:justify-between   top-0 lg:w-1/2 overflow-auto md:gap-10">
          <div className="flex gap-8 w-full justify-between">
            {categories.map((category) => {
              return (
                <div
                  key={category.key}
                  className="flex flex-col text-center md:justify-center items-center"
                >
                  <div className="border-2 border-[#002B6A] rounded-full flex items-center lg:justify-center">
                    <RadioButton
                      inputId={`category1_${category.key}`}
                      name="category1"
                      value={category.key}
                      onChange={(e) => handleSelection1(e.value)}
                      checked={selectedCategoryKey1 === category.key}
                    />
                  </div>
                  <label htmlFor={`category1_${category.key}`} className="">
                    {category.name}
                  </label>
                </div>
              );
            })}
          </div>
          <h1 className="text-center uppercase  bg-yellow-400 text-white">
            Harapan
          </h1>
        </div>

        <div className="flex flex-col  w-full lg:w-1/2 gap-4 md:gap-8  overflow-auto justify-between ">
          <div className="w-full flex justify-between">
            {categories2.map((category) => {
              return (
                <div
                  key={category.key}
                  className="flex flex-col text-center justify-center items-center"
                >
                  <div className="border-2 border-[#002B6A] rounded-full flex items-center justify-center">
                    <RadioButton
                      inputId={`category2_${category.key}`}
                      name="category2"
                      value={category.key}
                      onChange={(e) => handleSelection2(e.value)}
                      checked={selectedCategoryKey2 === category.key}
                    />
                  </div>
                  <label htmlFor={`category2_${category.key}`} className="">
                    {category.name}
                  </label>
                </div>
              );
            })}
          </div>

          <h1 className="text-center uppercase bg-blue-500 text-white">
            Kinerja
          </h1>
        </div>
      </div>
    </div>
  );
}
