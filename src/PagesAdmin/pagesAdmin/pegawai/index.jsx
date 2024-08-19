import { Button, Input, Typography } from "@material-tailwind/react";
import Layout from "../../Layout/Index";
import { PegawaiForm } from "./form";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import DialogForm from "./dialog";

const PegawaiPage = () => {
  return (
    <Layout>
      <div className=" px-4 py-8 flex items-center justify-between gap-8">
        <div>
          <Typography variant="h5" color="blue-gray">
            Data Pegawai
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            See information about all members
          </Typography>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <Button variant="outlined" size="sm">
            view all
          </Button>

          <DialogForm />
        </div>
        <div className="w-full md:w-72">
          <Input
            label="Search"
            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
          />
        </div>
      </div>
      <div className="h-screen top-0 overflow-y-auto">
        <PegawaiForm />
      </div>
    </Layout>
  );
};

export default PegawaiPage;
