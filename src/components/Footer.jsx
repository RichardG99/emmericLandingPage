export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="nav-logo" style={{ fontSize: '0.95rem' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
          Emmeric
        </span>

        <p className="footer-copy">© 2025 Emmeric. Alla rättigheter förbehållna.</p>

        <div className="footer-links">
          <a href="#" className="footer-link">Integritetspolicy</a>
          <a href="#" className="footer-link">Villkor</a>
          <a href="#waitlist" className="footer-link">Kontakt</a>
        </div>
      </div>
    </footer>
  )
}
