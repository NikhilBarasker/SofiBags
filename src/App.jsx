import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home.jsx";
import Header from "./Components/Header.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import SchoolBags from "./Components/SchoolBags.jsx";
import Collage from "./Components/Collage.jsx";
import Trolley from "./Components/Trolley.jsx";
import Tiffin from "./Components/Tiffin.jsx";
import Office from "./Components/Office.jsx";

function App() {
  return (
    <div className="main">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/schoolBags" element={<SchoolBags />} />
        <Route path="/collageBags" element={<Collage />} />
        <Route path="/trolley" element={<Trolley />} />
        <Route path="/tiffin" element={<Tiffin />} />
        <Route path="/office" element={<Office />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
