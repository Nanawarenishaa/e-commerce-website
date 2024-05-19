
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import SmNav from "./Components/SmNav";
import Product from "./Components/Product";

const App = () => {
  return (
  <BrowserRouter >
  <SmNav />
  <Navbar />
  <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/product" element={<Product />}/>
  </Routes>
  <Product />
  <Footer />
  </BrowserRouter>
  );
};

export default App;
