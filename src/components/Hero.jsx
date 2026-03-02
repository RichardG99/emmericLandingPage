export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">

        {/* LEFT */}
        <div className="hero-left">
          <div className="hero-regulations">
            <div className="hero-reg-pills">
              <span className="reg-pill"><span className="reg-pill-dot" />MFL</span>
              <span className="reg-pill"><span className="reg-pill-dot" />ICC</span>
              <span className="reg-pill"><span className="reg-pill-dot" />GDPR</span>
              <span className="reg-pill"><span className="reg-pill-dot" />Konsumentverket</span>
            </div>
          </div>

          <h1 className="hero-headline">
            <span className="hero-headline-line1">AI för trygg</span>
            <span className="hero-headline-line2">marknadsföring</span>
          </h1>

          <p className="hero-sub">
            Emmeric analyserar din marknadsföring mot svenska lagar och flaggar
            problem innan du publicerar — automatiskt.
          </p>

          <div className="hero-ctas">
            <a href="#waitlist" className="btn btn-dark">Anmäl intresse</a>
            <a href="#how" className="btn btn-outline">Hur det fungerar</a>
          </div>

          <div className="hero-trust">
            <p className="hero-trust-label">Byggt för svenska marknaden</p>
            <div className="hero-trust-logos">
              <span className="trust-logo">Marknadsförare</span>
              <span className="trust-logo">Byråer</span>
              <span className="trust-logo">E-handel</span>
              <span className="trust-logo">Startups</span>
            </div>
          </div>
        </div>

        {/* RIGHT — floating compliance cards */}
        <div className="hero-right">

          <div className="compliance-card card-a">
            <span className="card-ref">ICC Art. 1</span>
            <div className="card-lines">
              <div className="card-line" />
              <div className="card-line short" />
              <div className="card-line med" />
            </div>
            <div className="card-footer">
              <span className="card-status ok">Godkänd</span>
              <div className="card-ai-btn">→</div>
            </div>
          </div>

          <div className="compliance-card card-b">
            <span className="card-ref">MFL § 10 Analys</span>
            <div className="card-lines">
              <div className="card-line" />
              <div className="card-line" />
              <div className="card-line short" />
              <div className="card-line med" />
            </div>
            <div className="card-footer">
              <span className="card-status warn">Granskas</span>
              <div className="card-ai-btn">→</div>
            </div>
          </div>

          <div className="compliance-card card-c">
            <span className="card-ref">GDPR Art. 6</span>
            <div className="card-lines">
              <div className="card-line" />
              <div className="card-line med" />
              <div className="card-line short" />
            </div>
            <div className="card-footer">
              <span className="card-status ok">Compliant</span>
              <div className="card-ai-btn">→</div>
            </div>
          </div>

          <div className="compliance-card card-d">
            <span className="card-ref">Prisinformation</span>
            <div className="card-lines">
              <div className="card-line short" />
              <div className="card-line" />
            </div>
            <div className="card-footer">
              <span className="card-status err">Åtgärd krävs</span>
              <div className="card-ai-btn">→</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
