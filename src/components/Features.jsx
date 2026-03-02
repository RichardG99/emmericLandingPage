const features = [
  {
    icon: '⚖️',
    title: 'Marknadsföringslagen (MFL)',
    desc: 'Kontroll mot vilseledande reklam, otillbörliga affärsmetoder och jämförande marknadsföring.',
  },
  {
    icon: '📋',
    title: 'ICC:s Regler för reklam',
    desc: 'Säkerställ att marknadsföringen är vederhäftig, hederlig och laglig enligt ICC:s internationella ramverk.',
  },
  {
    icon: '🔒',
    title: 'GDPR & datainsamling',
    desc: 'Identifierar personuppgiftshantering i annonser som kan strida mot dataskyddsförordningen.',
  },
  {
    icon: '💬',
    title: 'Influencer & sociala medier',
    desc: 'Korrekt märkning av sponsrat innehåll och dolda annonser enligt Konsumentverkets riktlinjer.',
  },
  {
    icon: '💰',
    title: 'Prismarknadsföring',
    desc: 'Validerar jämförelsepriser, reapriser och att moms redovisas korrekt i marknadsföringen.',
  },
  {
    icon: '🍀',
    title: 'Miljöpåståenden',
    desc: 'Flaggar vaga eller ogrundade hållbarhetspåståenden — skyddar mot anklagelser om greenwashing.',
  },
]

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-header">
          <p className="section-label">Vad Emmeric kontrollerar</p>
          <h2 className="section-heading">
            <br />Regelområden
          </h2>
          <p className="section-sub">
            Emmeric täcker det regelverket som svenska marknadsföringsteam
            måste förhålla sig till.
          </p>
        </div>

        <div className="features-grid">
          {features.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-icon-wrap">{f.icon}</div>
              <p className="feature-title">{f.title}</p>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
