import "./Header.css";

export default function Header({ activePage, onNavClick }) {
    const handleHomeClick = (e) => {
    e.preventDefault();

    // Volvemos al modo landing (todas las secciones)
    setActiveSection("home");

    // Scroll suave arriba
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
    return (
    <header className="header">
      <div className="logo">SALVIA</div>

      <nav className="nav">
<a
  href="#home"
  className={activePage === "home" ? "active" : ""}
  onClick={(e) => {
    e.preventDefault();
    onNavClick("home");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }}
>
  Home
</a>


        <a
          href="#bio"
          className={activePage === "bio" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            onNavClick("bio");
          }}
        >
          Bio
        </a>

        <a
          href="#music"
          className={activePage === "music" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            onNavClick("music");
          }}
        >
          Música
        </a>

        <a
          href="#videos"
          className={activePage === "videos" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            onNavClick("videos");
          }}
        >
          Videos
        </a>

        <a href="#shows">Shows</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
}
