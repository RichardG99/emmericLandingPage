const steps = [
  {
    num: '01',
    title: 'Ladda upp ditt material',
    desc: 'Klistra in annonstext, ladda upp kampanjbeskrivning eller länka till publicerat innehåll. Emmeric förstår kontext.',
  },
  {
    num: '02',
    title: 'AI analyserar mot regelverket',
    desc: 'Emmeric jämför ditt innehåll mot MFL, ICC:s regler, Konsumentverkets riktlinjer och GDPR i realtid.',
  },
  {
    num: '03',
    title: 'Få konkreta åtgärder',
    desc: 'Tydliga flaggningar med exakt hänvisning till regelbrott — och förslag på hur du formulerar om för att bli godkänd.',
  },
]

export default function HowItWorks() {
  return (
    <section className="how" id="how">
      <div className="container">
        <div className="how-inner">

          <div className="how-left">
            <p className="section-label">Hur det fungerar</p>
            <h2 className="section-heading">
              Från text till<br />trygghet på sekunder
            </h2>
            <p className="section-sub">
              Emmeric är byggt för att passa in i ditt arbetsflöde —
              inte lägga till ett nytt steg.
            </p>
          </div>

          <div className="how-steps">
            {steps.map((s) => (
              <div className="how-step" key={s.num}>
                <span className="how-step-num">{s.num}</span>
                <div className="how-step-content">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
