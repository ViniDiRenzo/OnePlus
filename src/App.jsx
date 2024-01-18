import "./scss/main.scss";
import { Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import Hero from "./Hero";

import { Home, About, Projects, Contact } from "./Pages";
import Footer from "./Footer";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          {/* this route is for the link in the logo */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
