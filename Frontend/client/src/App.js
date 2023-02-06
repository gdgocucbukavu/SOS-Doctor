import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./theme/globalStyles";
import Accueil from "./pages/Accueil/Accueil";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
      </Routes>
    </div>
  );
}

export default App;
