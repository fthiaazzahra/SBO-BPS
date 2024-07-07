import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import HomePage from "./Pages/Home/Index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DasarHukum from "./Pages/KonsepDefinisi/DasarHukum/Index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dasar-hukum" element={<DasarHukum />} />
      </Routes>
    </Router>
  );
}

export default App;
