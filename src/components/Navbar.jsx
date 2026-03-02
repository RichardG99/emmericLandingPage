export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <div className="nav-logo">
          <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
          </svg>
          Emmeric 
        </div>

        <div className="nav-links">
          <a href="#features" className="nav-link">Produkt</a>
          <a href="#how" className="nav-link">Hur det fungerar</a>
          <a href="#waitlist" className="nav-link">Om oss</a>
        </div>

        <a href="#waitlist" className="btn btn-dark btn-sm">Anmäl intresse</a>
      </div>
    </nav>
  )
}
