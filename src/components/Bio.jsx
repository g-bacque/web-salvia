import "./Bio.css";
import bandSitting from "../assets/images/band-sitting-transparent-2.png";

export default function Bio() {
  return (
    <section className="bio" id="bio">
      <div className="bio-content">
        <p className="bio-kicker">Salvia</p>

        <h2>Rock Pop argentino mediterráneo.</h2>

        <div className="bio-text">
          <p>
          Salvia es una banda de pop-rock nacida en Barcelona en 2022.

          </p>

          <p>
          Surgió del encuentro entre un grupo de inmigrantes que encontraron en la ciudad una fuente de inspiración y un nuevo hogar.          </p>
          <p>
          Sus canciones originales combinan las raíces del rock nacional argentino con espíritu pop y pinceladas de soul y funk.          </p>          
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