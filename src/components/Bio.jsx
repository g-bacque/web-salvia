import "./Bio.css";
import bioPhoto from "../assets/images/bio-photo.png";

export default function Bio() {
  return (
    <section className="bio" id="bio">
      <div className="bio-text">
        <h2>Quiénes somos</h2>
        <p>
          SALVIA es una banda de Rock Pop con una energía que combina lo crudo y lo
          melódico. Nuestra música busca conectar de manera directa con el público,
          siempre manteniendo autenticidad y actitud en cada canción.
        </p>
      </div>

      <div className="bio-image">
        <img src={bioPhoto} alt="SALVIA banda" />
      </div>
    </section>
  );
}
