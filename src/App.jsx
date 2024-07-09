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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dasar-hukum" element={<DasarHukum />} />
        <Route path="/priker" element={<Priker/>} />
        <Route path="/leadbo" element={<LeadBO/>} />
        <Route path="/pebo" element={<PeBO/>} />
        <Route path="/sysbo" element={<SysBO/>} />
      </Routes>
    </Router>
  );
}

export default App;
