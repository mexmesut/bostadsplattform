const project = {
  name: 'Tomt A + Tomt B',
  status: 'Förberedelse / granskning',
  summary: 'Nybyggnadsprojekt med två tomter i nära läge där befintliga hyreslägenheter ersätts med nyproduktion och ett underjordiskt garage.' ,
  phase: 'Kommungranskning',
  timeline: 'Plan 2026/2027',
  owner: 'Ägare / projektansvarig',
};

const overviewCards = [
  { label: 'Projektstatus', value: 'På väg mot beslut', tone: 'blue' },
  { label: 'Arkitektstatus', value: 'Skisser i arbete', tone: 'amber' },
  { label: 'Kommungranskning', value: '3 aktörer parallellt', tone: 'green' },
  { label: 'Risknivå', value: 'Medel', tone: 'red' },
];

const tomter = [
  {
    name: 'Tomt A',
    type: 'Bostadsproduktion',
    progress: 42,
    status: 'Förberedelse',
    area: '4 200 kvm',
    note: 'Boendeyta och planlösning under bearbetning',
  },
  {
    name: 'Tomt B',
    type: 'Bostadsproduktion',
    progress: 36,
    status: 'Förberedelse',
    area: '3 900 kvm',
    note: 'Parallell process för bygglovs- och kommungranskning',
  },
];

const reviewActors = [
  { name: 'Aktör 1', stage: 'Antagande', status: 'Pågår', detail: 'Nära beslut / svar väntar' },
  { name: 'Aktör 2', stage: 'Granskning', status: 'I process', detail: 'Dokument och ritningar under uppdatering' },
  { name: 'Aktör 3', stage: 'Granskning', status: 'I process', detail: 'Parallell process med övriga aktörer' },
];

const documents = [
  { title: 'Arkitektpaket', owner: 'Arkitekt', date: 'Idag', status: 'Pågår' },
  { title: 'Granskningslista kommunen', owner: 'Projektledare', date: '1–2 dagar', status: 'Planerat' },
  { title: 'Representant mot kommun', owner: 'Ägare', date: 'Nästa vecka', status: 'Behöver tillsättas' },
  { title: 'Garage – kostnadsunderlag', owner: 'Konsult', date: 'Vecka 2', status: 'Behöver bekräftelse' },
  { title: 'Geoteknik och grund', owner: 'Konsult', date: 'Vecka 3', status: 'Planerat' },
];

const costs = [
  { label: 'Underjordiskt garage', value: '20 000–30 000 kr/kvm', note: 'Rimlig kostnadsnivå i Sverige.' },
  { label: 'Geoteknik / markutredning', value: '250 000–800 000 kr', note: 'Beroende på markförhållanden och grundkrav.' },
  { label: 'Grund & dränering', value: 'Hög volymkostnad', note: 'Kan påverka totalbudget kraftigt.' },
  { label: 'Risk för fördröjning', value: 'Medel', note: 'Om dokument, skisser eller ritningar inte är fullständiga.' },
];

const milestones = [
  { phase: '1. Avstämning med arkitekt', date: 'Nu', status: 'Pågår' },
  { phase: '2. Kommunaktörslista och krav', date: '1–3 dagar', status: 'Planerat' },
  { phase: '3. Fastställ representant mot kommunen', date: 'Nästa vecka', status: 'Behöver tillsättas' },
  { phase: '4. Garage-budget + grundutredning', date: 'Vecka 2–3', status: 'Pågår' },
  { phase: '5. Inlämning / granskning', date: 'Vecka 4+', status: 'Kommande' },
];

const nextSteps = [
  'Inrätta tydlig ansvarig representant mot kommunen.',
  'Sammanfatta vad varje aktör kräver för beslut och dokument.',
  'Säkerställ att arkitektens skisser är inlämningsklara inför granskning.',
  'Skapa checklistor med deadlines och svarstider.',
  'Följ upp om aktörer ligger före eller efter andra aktörer.',
  'Få säkrad kostnadsberäkning för underjordiskt garage innan nästa beslutspunkt.',
];

export default function Home() {
  return (
    <main className="page-shell">
      <aside className="sidebar">
        <div className="brand-wrap">
          <div className="brand-badge">BP</div>
          <div>
            <p className="eyebrow">Plattform</p>
            <h1>Bostadsportal</h1>
          </div>
        </div>

        <nav className="nav">
          <a className="nav-item active" href="#overview">Översikt</a>
          <a className="nav-item" href="#tomter">Tomter</a>
          <a className="nav-item" href="#review">Granskning</a>
          <a className="nav-item" href="#budget">Kostnad</a>
          <a className="nav-item" href="#plan">Nästa steg</a>
        </nav>

        <div className="sidebar-card">
          <p className="eyebrow muted">Projekt</p>
          <h3>{project.name}</h3>
          <p>{project.phase}</p>
        </div>
      </aside>

      <section className="content">
        <header className="topbar">
          <div>
            <p className="eyebrow muted">Fastighetsutveckling</p>
            <h2>{project.name}</h2>
          </div>
          <button className="primary-button">Ny rapport</button>
        </header>

        <section id="overview" className="section-block">
          <div className="project-summary">
            <div>
              <span className="status-tag">{project.status}</span>
              <p>{project.summary}</p>
            </div>
            <div className="summary-meta">
              <small>Fas</small>
              <strong>{project.phase}</strong>
              <small>Tidsplan</small>
              <strong>{project.timeline}</strong>
              <small>Ansvar</small>
              <strong>{project.owner}</strong>
            </div>
          </div>

          <div className="kpi-grid">
            {overviewCards.map((item) => (
              <div key={item.label} className={`kpi-card ${item.tone}`}>
                <p>{item.label}</p>
                <h3>{item.value}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="tomter" className="section-block">
          <div className="panel-head">
            <h3>Tomter och byggstatus</h3>
            <button className="ghost-button">Visa detaljer</button>
          </div>

          <div className="project-grid">
            {tomter.map((tomt) => (
              <div key={tomt.name} className="mini-panel">
                <div className="mini-header">
                  <div>
                    <strong>{tomt.name}</strong>
                    <span>{tomt.type}</span>
                  </div>
                  <span className="mini-status">{tomt.status}</span>
                </div>

                <div className="progress-box">
                  <div className="progress-label">
                    <span>{tomt.progress}%</span>
                    <small>{tomt.area}</small>
                  </div>
                  <div className="progress-bar">
                    <div style={{ width: `${tomt.progress}%` }} />
                  </div>
                </div>

                <p>{tomt.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="review" className="section-block">
          <div className="main-grid">
            <div className="panel wide">
              <div className="panel-head">
                <h3>Granskande aktörer</h3>
                <button className="ghost-button">Visa detaljer</button>
              </div>

              <div className="project-list">
                {reviewActors.map((actor) => (
                  <div key={actor.name} className="project-row">
                    <div>
                      <strong>{actor.name}</strong>
                      <span>{actor.stage}</span>
                    </div>

                    <div className="progress-box">
                      <div className="progress-label">
                        <span>{actor.status}</span>
                      </div>
                      <div className="progress-bar">
                        <div style={{ width: actor.status === 'Pågår' ? '65%' : '50%' }} />
                      </div>
                    </div>

                    <div className="money-box">
                      <span>{actor.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel">
              <div className="panel-head">
                <h3>Dokumentstatus</h3>
                <button className="ghost-button">Se schema</button>
              </div>

              <ul className="task-list">
                {documents.map((item) => (
                  <li key={item.title}>
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.owner}</span>
                    </div>
                    <div className="task-meta">
                      <small>{item.date}</small>
                      <span className="status-pill">{item.status}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="budget" className="section-block">
          <div className="bottom-grid">
            <div className="panel">
              <div className="panel-head">
                <h3>Garage och kostnadsöversikt</h3>
              </div>

              <div className="timeline-list">
                {costs.map((cost) => (
                  <div key={cost.label} className="timeline-item">
                    <div className="timeline-header">
                      <span>{cost.label}</span>
                      <strong>{cost.value}</strong>
                    </div>
                    <small>{cost.note}</small>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel">
              <div className="panel-head">
                <h3>Viktiga nästa steg</h3>
              </div>

              <ul className="activity-list">
                {nextSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="plan" className="section-block">
          <div className="panel full-width-panel">
            <div className="panel-head">
              <h3>Projektplan och milstolpar</h3>
            </div>

            <div className="milestone-list">
              {milestones.map((item) => (
                <div key={item.phase} className="milestone-item">
                  <div className="milestone-left">
                    <strong>{item.phase}</strong>
                    <small>{item.date}</small>
                  </div>
                  <span className="phase-pill">{item.status}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
