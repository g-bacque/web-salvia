import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Bio from "./components/Bio";
import Music from "./components/Music";
import Footer from "./components/Footer";
import Shows from "./components/Shows";
import "./styles/global.css";

function App() {
  const [activePage, setActivePage] = useState("home"); // sección actual
  const [singleSection, setSingleSection] = useState(false); // modo solo sección

  const handleNavClick = (page) => {
    if (page === "home") {
      // volver a landing completo
      setSingleSection(false);
      setActivePage("home");
    } else {
      // abrir solo esa sección
      setSingleSection(true);
      setActivePage(page);
    }
  };

  return (
    <>
      <Header activePage={activePage} onNavClick={handleNavClick} />

      {singleSection ? (
        <>
          {activePage === "home" && <Hero />}
          {activePage === "bio" && <Bio />}
          {activePage === "music" && <Music />}
          {activePage === "shows" && <Shows />}
      
        </>
      ) : (
        // modo landing completo: todas las secciones visibles
        <>
          <Hero />
          <Bio />
          <Music />
          <Shows />
        </>
      )}
        <Footer />
    </>
  );
}

export default App;

