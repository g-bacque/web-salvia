import "./Music.css";
import bandLadder from "../assets/images/no-me-parece-cover-v7 copia.png";
import livePoster from "../assets/images/live-poster.png";

export default function Music() {
  const tracks = [
    {
      title: "Puedo Ser Todo",
      url: "https://untitled.stream/library/track/ef5bbL12kBdDkFim0HjOW",
    },
    {
      title: "Siempre te Extraño",
      url: "https://untitled.stream/library/track/9CWVSwLSCH2RgkkGqPb0Q",
    },
    {
      title: "De eso se Trata Estar con Vos",
      url: "https://untitled.stream/library/track/TUmnhX1ObAYfFqhjYzcZA",
    },
    {
      title: "En Todo lo que Hay",
      url: "https://untitled.stream/library/track/u79SwrtdbIelLooLIYmIw",
    },
    {
      title: "Canción para Rosario",
      url: "https://untitled.stream/library/track/Pb2O0w6uVtC70QsCpeNFN",
    },
    {
      title: "No me Parece",
      url: "https://untitled.stream/library/track/Pk1RRnag515qq2oONLTAP",
    },            
  ];

  return (
    <section className="music" id="music">
      <div className="music-inner">
        <div className="music-block">
          <div className="music-heading">
            <p className="music-kicker">Música</p>
            <h2>Escuchar</h2>
            <p className="music-subtitle">
              Primer EP publicado en 2026.
            </p>
          </div>

          <div className="album-layout">
  <div className="music-layout">
            <div className="track-list">
              {tracks.map((track, index) => (
                <a
                  href={track.url}
                  target="_blank"
                  rel="noreferrer"
                  className="track-item"
                  key={track.title}
                >
                  <span className="track-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="track-title">{track.title}</span>

                  <span className="track-link">SoundCloud ↗</span>
                </a>
              ))}
            </div>
                        <div className="album-cover">
              <p className="album-label">Demo / 2026</p>
              <img src={bandLadder} alt="Salvia tapa de disco" />
            </div>
            </div>



          </div>
        </div>

        <div className="music-block music-live">
          <div className="music-heading">
            <p className="music-kicker">En vivo</p>
            <h2>En Vivo</h2>
            <p className="music-subtitle">
              Un registro en vivo de nuestra etapa actual.
            </p>
          </div>

          <div className="video-wrap">
              <a
                href="https://www.youtube.com/watch?v=DyaBh3LzQWc"
                target="_blank"
                rel="noreferrer"
                className="video-poster"
                aria-label="Ver video de Salvia en YouTube"
              >
                <img src={livePoster} alt="Salvia en vivo" />

                <span className="youtube-icon">
                  ▶
                </span>
              </a>
          </div>
        </div>
      </div>
    </section>
  );
}