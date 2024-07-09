import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import HomePage from "./Pages/Home/Index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DasarHukum from "./Pages/KonsepDefinisi/DasarHukum/Index";
import Nilainilai from "./Pages/KonsepDefinisi/NilaiInti/Index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dasar-hukum" element={<DasarHukum />} />
        <Route path="/nilai-nilai" element={<Nilainilai />} />
      </Routes>
    </Router>
  );
}

export default App;
