import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./theme/globalStyles";
import Accueil from "./pages/Accueil/Accueil";
import QuickTest from "./pages/Quicktest/QuickTest";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Quicktest" element={<QuickTest/>} />
      </Routes>
    </div>
  );
}

export default App;
