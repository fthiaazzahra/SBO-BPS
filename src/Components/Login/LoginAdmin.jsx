import { useState } from "react";
import { Button, Dialog, Input } from "@material-tailwind/react";

const LoginAdmin = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div>
      <Button onClick={handleOpen} className="bg-yellow-500">
        Login Admin
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        className="flex gap-4 items-center"
      >
        <div className="flex flex-col gap-4 p-6 w-1/2">
          <h4 className="text-2xl font-semibold">Login Pegawai</h4>

          <Input label="Your NIP" type="number" className="outline-none" />
          <Input label="Your Password" type="password" />

          <Button onClick={handleOpen}>Sign In</Button>
        </div>
        <div>
          <img src="/public/img/bps.jpeg" alt="" />
        </div>
      </Dialog>
    </div>
  );
};

export default LoginAdmin;
