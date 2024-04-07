import "./App.css";
import Header from "./components/header/Header";

import { Routes, Route } from "react-router-dom";
import Members from "./components/members/Members";
import Gallery from "./components/gallery/Gallery";
import Admin from "./components/admin/Admin";
import Footer from "./components/footer/Footer";
import BackToTop from "./components/backtoTop/BackToTop";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/member" element={<Members />} />
        <Route path="/" element={<Members />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
