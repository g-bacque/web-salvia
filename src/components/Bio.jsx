import "./Bio.css";
import bandSitting from "../assets/images/band-sitting-transparent-2.png";

export default function Bio() {
  return (
    <section className="bio" id="bio">
      <div className="bio-content">
        <p className="bio-kicker">Salvia</p>

        <h2>Canciones para lo que no siempre se dice.</h2>

        <div className="bio-text">
          <p>
            Salvia nace de canciones que no se escriben rápido. De darle vueltas
            a lo que pasa cuando nadie mira.
          </p>

          <p>
            No buscamos sonar fuerte. Buscamos sonar cerca.
          </p>
        </div>
      </div>

      <div className="bio-image-wrap">
        <img
          src={bandSitting}
          alt="Salvia sentados"
          className="bio-image"
        />
      </div>
    </section>
  );
}