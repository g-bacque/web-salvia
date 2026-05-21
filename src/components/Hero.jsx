import "./Hero.css";
import heroBand from "../assets/images/band-pink.jpg";
import logo from "../assets/images/salvia-logo-4.png";

export default function Hero() {
  return (
    <section className="hero">
      <img src={heroBand} alt="Salvia band" className="hero-image" />

      <div className="hero-shade" />

      <div className="hero-content">
        {//  <p className="hero-kicker">Rock nacional argentino con espíritu pop</p> 
        }
        <h1 className="hero-title">
        <img src={logo} alt="Salvia" />
        </h1>
        {//         <p className="hero-phrase">Canciones nacidas entre Buenos Aires y Barcelona.</p>        
        }

      </div>
    </section>
  );
}
