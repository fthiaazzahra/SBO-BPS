import { Typography } from "@material-tailwind/react";
import Layout from "../../Layout/Index";
import { KipUp } from "./kipup";
// import { PegawaiForm } from "./form";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

// import DialogForm from "./dialog";

const HitungNilaiPegawaiTeladan = () => {
  return (
    <Layout>
      <div className="h-screen top-0 overflow-y-auto">
        <div className=" px-4 py-8 flex items-center justify-between gap-8 bg-[#E9781A]">
          <div>
            <Typography variant="h5" color="white">
              Hitung Nilai Survey Pegawai Teladan
            </Typography>
            <Typography color="white" className="mt-1 font-normal">
              See information about all members
            </Typography>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="px-4 py-10">
            <KipUp />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HitungNilaiPegawaiTeladan;
