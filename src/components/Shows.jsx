import "./Shows.css";

export default function Shows() {
  const shows = [
    {
      date: "12 Jun",
      city: "Barcelona",
      venue: "Sala Upload",
    },
    {
      date: "28 Jun",
      city: "Valencia",
      venue: "Loco Club",
    },
    {
      date: "10 Jul",
      city: "Madrid",
      venue: "El Sol",
    },
  ];

  return (
    <section className="shows" id="shows">
      <div className="shows-inner">
        <div className="shows-heading">
          <p className="shows-kicker">Directo</p>
          <h2>Próximos conciertos</h2>
        </div>

        <div className="shows-list">
          {shows.map((show, index) => (
            <div className="show-item" key={index}>
              <div className="show-date">{show.date}</div>

              <div className="show-info">
                <span className="show-city">{show.city}</span>
                <span className="show-venue">{show.venue}</span>
              </div>

              <div className="show-action">Entradas</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}