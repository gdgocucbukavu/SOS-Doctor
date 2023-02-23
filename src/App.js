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
import Divers from "./pages/Divers/Divers";
import { useEffect, useState } from "react";
import heart from "./pages/Accueil/Assets/heart.json";
import Lottie from "lottie-react";
import InstallPWA from "./components/PromptPwa";

function App() {
  const [loading, setLoading] = useState(true);
  const [showBtn, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setTimeout(() => {
      setShow(true);
    }, 5000);
  });
  return (
    <div className="App">
      <GlobalStyle />

      {loading && (
        <div
          style={{
            width: "100%",
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Lottie
            animationData={heart}
            loop={true}
            style={{
              width: "200px",
            }}
          />
        </div>
      )}

      {!loading && (
        <>
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
            <Route path="/divers" element={<Divers />} />
          </Routes>
          {showBtn && <InstallPWA />}
          <ChatContainer />
        </>
      )}
    </div>
  );
}

export default App;
