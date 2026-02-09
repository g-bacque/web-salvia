import "./Hero.css";
import noise from "../assets/images/noise.png";
import logo from "../assets/images/salvia-logo.png";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ "--noise": `url(${noise})` }}
    >
      <div className="overlay" />

      <div className="hero-content">
        <img
          src={logo}
          alt="SALVIA"
          className="hero-logo"
        />

        <p>Rock Pop</p>

        <a
          className="cta"
          href="https://open.spotify.com/intl-es/artist/5lXjjAsrzJSSIjxmVdMzug?si=kk-yr6xMTtWTQ8e98XObBg"
          target="_blank"
          rel="noreferrer"
        >
          Escuchar
        </a>
      </div>
    </section>
  );
}
