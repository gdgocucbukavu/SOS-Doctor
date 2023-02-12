import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./theme/globalStyles";
import Accueil from "./pages/Accueil/Accueil";
import HopitalProche from "./pages/HopitalProche/HopitalProche";
import QuickTest from "./pages/Quicktest/QuickTest";
import Navbar from "./components/Navbar";
import ScrollToTop from "./fonctions/ScrollToTop";
import Map from "./pages/map/Map";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Quicktest" element={<QuickTest />} />
        <Route path="/hopitalProche" element={<HopitalProche />}></Route>
        <Route path="hopitalProche/map" element={<Map />} />
        <Route path="*" element={<Accueil />} />
      </Routes>
    </div>
  );
}

export default App;
