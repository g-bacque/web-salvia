import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Bio from "./components/Bio";
import Music from "./components/Music";
import Videos from "./components/Videos";
import Footer from "./components/Footer";
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
          {activePage === "videos" && <Videos />}
        </>
      ) : (
        // modo landing completo: todas las secciones visibles
        <>
          <Hero />
          <Bio />
          <Music />
          <Videos />
        </>
      )}
        <Footer />
    </>
  );
}

export default App;

