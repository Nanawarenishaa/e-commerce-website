
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import SmNav from "./Components/SmNav";
import FashionCards from "./Components/FashionCards";
import ElectronicCards from "./Components/ElectronicCards";
import JwellaryCards from "./Components/JwellaryCard";

const App = () => {
  return (
  <BrowserRouter >
  <SmNav />
  <Navbar />
  <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/fashion" element={<FashionCards />}/>
    <Route path="/electronics" element={<ElectronicCards />}/>
    <Route path="/jewellary" element={<JwellaryCards />}/>
  </Routes>
  <Footer />
  </BrowserRouter>
  );
};

export default App;
