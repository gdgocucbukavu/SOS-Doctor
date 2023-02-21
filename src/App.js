import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./theme/globalStyles";
import Accueil from "./pages/Accueil/Accueil";
import HopitalProche from "./pages/HopitalProche/HopitalProche";
import QuickTest from "./pages/Quicktest/QuickTest";
import Chercher from "./pages/RechercheHopital/Chercher";
import Secours from "./pages/Secours/Secours";
import Navbar from "./components/Navbar";
import ScrollToTop from "./fonctions/ScrollToTop";
import Map from "./pages/map/Map";
import "./app.css";
import ChatContainer from "./components/ChatContainer";
import Maternite from "./pages/Maternite/Maternite";
import Sexualite from "./pages/Sexualite/Sexualite";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Quicktest" element={<QuickTest />} />
        <Route path="/hopitalProche" element={<HopitalProche />}>
          <Route path="/hopitalProche//proche" element={<Chercher />} />
        </Route>
        <Route path="hopitalProche/map" element={<Map />} />
        <Route path="*" element={<Accueil />} />
        <Route path="/Secours" element={<Secours />} />
        <Route path="/Sexualite" element={<Sexualite />} />
        <Route path="/Maternite" element={<Maternite />} />
      </Routes>

      <ChatContainer />
    </div>
  );
}

export default App;
