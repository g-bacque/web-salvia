import "./Music.css";
import bandLadder from "../assets/images/salvia-ep-3.png";

export default function Music() {
  const tracks = [
    {
      title: "Puedo Ser Todo",
      url: "https://soundcloud.com/gaspar-bacque/puedo-ser-todo-m2-2/s-4D96s5dKpSo?si=795816a8236044ae95b4759624420eed&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    {
      title: "Siempre te Extraño",
      url: "https://soundcloud.com/gaspar-bacque/siempre-te-extrano-m3-1/s-gcrKOO12Xx6?si=0c40b461161640b2994ecceb71877607&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    {
      title: "De eso se Trata Estar con Vos",
      url: "https://soundcloud.com/gaspar-bacque/de-eso-se-trata-estar-con-vos-m2-1-5/s-mVMhmfwPsrT?si=f45eaabb398941f7b13184df605b9fdd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    {
      title: "En Todo lo que Hay",
      url: "https://soundcloud.com/gaspar-bacque/en-todo-lo-que-hay-m2-4/s-j4otOXDwdTH?si=0e3371d425c44c999e6194c5e4fd6222&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    {
      title: "Canción para Rosario",
      url: "https://soundcloud.com/gaspar-bacque/cancion-para-rosario_m3-6/s-XQ68tTD9JTq?si=afda65caecb3454fbf55a5dc7b37e977&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    {
      title: "No me Parece",
      url: "https://soundcloud.com/gaspar-bacque/no-me-parece-m3-3/s-89TkS8eIxs9?si=35d4e0bb6464476f9a132a4f0d7120be&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
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