import "./Videos.css";

export default function Videos() {
  return (
    <section className="videos" id="videos">
      <h2>Video destacado</h2>
      <p>Mira nuestro último videoclip directamente desde YouTube.</p>

      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/DyaBh3LzQWc"
          title="SALVIA Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
