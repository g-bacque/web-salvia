import "./Header.css";

export default function Header({ activePage, onNavClick }) {
  const handleNavClick = (e, page) => {
    e.preventDefault();

    onNavClick(page);

    if (page === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="header">
      <div className="logo">SALVIA</div>

      <nav className="nav">
        <a
          href="#home"
          className={activePage === "home" ? "active" : ""}
          onClick={(e) => handleNavClick(e, "home")}
        >
          Home
        </a>

        <a
          href="#bio"
          className={activePage === "bio" ? "active" : ""}
          onClick={(e) => handleNavClick(e, "bio")}
        >
          Bio
        </a>

        <a
          href="#music"
          className={activePage === "music" ? "active" : ""}
          onClick={(e) => handleNavClick(e, "music")}
        >
          Música
        </a>

        <a
          href="#shows"
          className={activePage === "shows" ? "active" : ""}
          onClick={(e) => handleNavClick(e, "shows")}
        >
          Shows
        </a>

        <a
          href="#contact"
          className={activePage === "contact" ? "active" : ""}
          onClick={(e) => handleNavClick(e, "contact")}
        >
          Contacto
        </a>
      </nav>
    </header>
  );
}