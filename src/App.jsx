import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import HomePage from "./Pages/Home/Index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DasarHukum from "./Pages/KonsepDefinisi/DasarHukum/Index";

import Priker from "./Pages/Penilaian/Priker/index";
import LeadBO from "./Pages/Penilaian/LeadBO/indexLead";
import PeBO from "./Pages/Penilaian/PeBO/indexPe";
import SysBO from "./Pages/Penilaian/SysBO/indexSys";
import Nilainilai from "./Pages/KonsepDefinisi/NilaiInti/Index";
import FormPenialain from "./Pages/FormPenilaian/Index";
import PenilaianBudayaOrganisasi from "./Pages/Penilaian-Budaya-Organisasi/Index";
import EndQuist from "./Pages/FormPenilaian/TheEnd";
import HasilSBO from "./Pages/HasilPenilaian/Hasil-SBO/Index";
import HasilPegawaiTeladan from "./Pages/HasilPenilaian/Hasil-PegawaiTeladan/Index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dasar-hukum" element={<DasarHukum />} />
        <Route path="/nilai-nilai" element={<Nilainilai />} />

        <Route path="/priker" element={<Priker />} />
        <Route path="/leadbo" element={<LeadBO />} />
        <Route path="/pebo" element={<PeBO />} />
        <Route path="/sysbo" element={<SysBO />} />
        <Route path="/Form-penilaian" element={<FormPenialain />} />
        <Route path="/finish-survey" element={<EndQuist />} />
        <Route path="/hasil-survey-SBO" element={<HasilSBO />} />
        <Route
          path="/hasil-survey-pegawai-teladan"
          element={<HasilPegawaiTeladan />}
        />

        <Route
          path="/penilaian-budaya-organisasi"
          element={<PenilaianBudayaOrganisasi />}
        />
      </Routes>
    </Router>
  );
}

export default App;
