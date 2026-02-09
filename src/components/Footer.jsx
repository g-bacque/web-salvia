import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} SALVIA. Todos los derechos reservados.</p>

        <div className="footer-links">
          <a href="https://www.instagram.com/tu_banda" target="_blank" rel="noopener noreferrer" className="icon-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.5a1 1 0 11-2 0 1 1 0 012 0z"/></svg>
          </a>

          <a href="https://www.facebook.com/tu_banda" target="_blank" rel="noopener noreferrer" className="icon-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5 3.657 9.128 8.438 9.879v-6.987h-2.54v-2.892h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.892h-2.33V21.88C18.343 21.128 22 17 22 12z"/></svg>
          </a>

          <a href="https://open.spotify.com/artist/tu_id" target="_blank" rel="noopener noreferrer" className="icon-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12 2C6.477 2 2 6.478 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.522-4.477-10-10-10zm4.765 14.554a.75.75 0 01-1.028.244c-2.812-1.705-6.35-2.086-10.518-1.164a.75.75 0 11-.25-1.476c4.514-.766 8.391-.323 11.501 1.35a.75.75 0 01.294 1.046zm.145-3.13a.75.75 0 01-1.03.254c-2.555-1.55-6.451-2.01-9.445-1.119a.75.75 0 11-.292-1.457c3.388-.676 7.674-.188 10.568 1.274a.75.75 0 01.191 1.048zm.028-3.17a.75.75 0 01-1.033.246c-2.252-1.353-5.715-1.752-8.398-.976a.75.75 0 11-.33-1.448c2.965-.675 6.824-.24 9.264 1.096a.75.75 0 01.497.882z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
