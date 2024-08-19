import { Typography } from "@material-tailwind/react";
import Layout from "../../Layout/Index";
import ProgressButton from "./btnHitung";

// import { PegawaiForm } from "./form";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

// import DialogForm from "./dialog";

const HitungNilaiSBO = () => {
  return (
    <Layout>
      <div className="h-screen top-0 overflow-y-auto">
        <div className=" px-4 py-8 flex items-center justify-between gap-8 bg-[#E9781A]">
          <div>
            <Typography variant="h5" color="white">
              Hitung Nilai Survey SBO
            </Typography>
            <Typography color="white" className="mt-1 font-normal">
              Hitung Nilai Survey Sistem Budaya Organisasi
            </Typography>
          </div>
        </div>
        <ProgressButton />
      </div>
    </Layout>
  );
};

export default HitungNilaiSBO;
