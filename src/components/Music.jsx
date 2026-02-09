import "./Music.css";

export default function Music() {
  return (
    <section className="music" id="music">
      <h2>Nuestra música</h2>
      <p>Escucha nuestros singles y álbumes más recientes.</p>

      <div className="music-tracks">
        {/* Ejemplo de embed de Spotify */}
        <iframe
          src="https://open.spotify.com/embed/album/2aTOtEL4zJUa0C3mzPxljF?si=8CJunJqISBGl3wnq2_eHCA" 
          width="300"
          height="380"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>

        <iframe
          src="https://open.spotify.com/embed/album/038Y4v1G0LqH7caexuMk9J?si=boVwI8IjQ9mzAE88-Lg15g.com/embed/track/7ouMYWpwJ422jRcDASZB7P"
          width="300"
          height="380"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>

        {/* Puedes duplicar este bloque con tus tracks */}
      </div>
    </section>
  );
}
