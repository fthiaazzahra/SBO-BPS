import axios from "axios";
import { useState } from "react";

const PostCoba = () => {
  const [foto, setFoto] = useState("");
  const [error, setError] = useState("");

  //   const handleFileChange = (e) => {
  //     const file = e.target.files[0];
  //     if (file) {
  //       const reader = new FileReader();
  //       reader.onloadend = () => {
  //         console.log(
  //           "File berhasil dibaca sebagai string base64:",
  //           reader.result
  //         );
  //         setFoto(reader.result);
  //       };
  //       reader.onerror = (error) => {
  //         console.error("Terjadi kesalahan saat membaca file:", error);
  //         setError("Terjadi kesalahan saat membaca file");
  //       };
  //       reader.readAsDataURL(file);
  //     }
  //   };

  const handleClick = async () => {
    if (!foto) {
      setError("Silakan pilih file terlebih dahulu");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/kandidat", {
        nomor_kandidat: "Kandidat 1",
        nama_kandidat: "Aang",
        foto: foto,
      });
      alert("Data berhasil diunggah!");
      console.log("Respons:", response);
    } catch (error) {
      console.error("Terjadi kesalahan saat mengunggah data:", error);
      setError("Terjadi kesalahan saat mengunggah data");
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center h-[500px]">
      {error && <p className="text-red-500">{error}</p>}
      <input type="file" onChange={handleFileChange} />
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        disabled={!foto} // tombol dinonaktifkan sampai foto dipilih
      >
        Klik
      </button>
    </div>
  );
};

export default PostCoba;
