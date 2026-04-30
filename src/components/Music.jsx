import "./Music.css";
import bandLadder from "../assets/images/salvia-ep.png";

export default function Music() {
  const tracks = [
    {
      title: "Puedo ser todo",
      url: "https://soundcloud.com/gaspar-bacque/puedo-ser-todo-m2-2/s-4D96s5dKpSo",
    },
    {
      title: "Nombre canción 2",
      url: "#",
    },
    {
      title: "Nombre canción 3",
      url: "#",
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
              Canciones para quedarse un rato más.
            </p>
          </div>

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
              <img src={bandLadder} alt="Salvia tapa de disco" />
            </div>
          </div>
        </div>

        <div className="music-block music-live">
          <div className="music-heading">
            <p className="music-kicker">En vivo</p>
            <h2>Ver y escuchar</h2>
            <p className="music-subtitle">
              Una canción en directo, con el ruido y el aire de estar ahí.
            </p>
          </div>

          <div className="video-wrap">
            <iframe
              title="Salvia en vivo"
              src="https://www.youtube.com/embed/DyaBh3LzQWc"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}