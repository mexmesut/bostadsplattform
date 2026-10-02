const project = {
  name: 'Tomt A + Tomt B',
  status: 'Förberedelse / granskning',
  summary: 'Nybyggnadsprojekt med två tomter parallellt, befintliga lägenheter i hyresdrift ersätts med ny bostadsproduktion.',
  phase: 'Kommungranskning',
  timeline: 'Säsong 2026/2027',
  owner: 'Ägare / projektansvarig',
};

const kpis = [
  { label: 'Projektstatus', value: 'På väg mot beslut', tone: 'blue' },
  { label: 'Arkitektstatus', value: 'Skisser i arbete', tone: 'amber' },
  { label: 'Kommungranskning', value: '3 aktörer parallellt', tone: 'green' },
  { label: 'Risknivå', value: 'Medel', tone: 'red' },
];

const actors = [
  { name: 'Aktör 1', stage: 'Antagande', status: 'Pågår', detail: 'Nära beslut / svar väntar' },
  { name: 'Aktör 2', stage: 'Granskning', status: 'I process', detail: 'Dokument och ritningar under uppdatering' },
  { name: 'Aktör 3', stage: 'Granskning', status: 'I process', detail: 'Parallell process med övriga aktörer' },
];

const tasks = [
  { title: 'Säkerställ komplett arkitektpaket', owner: 'Arkitekt', date: 'Idag', status: 'Pågår' },
  { title: 'Kravlista kommunaktörer', owner: 'Projektledare', date: '1-2 dagar', status: 'Planerat' },
  { title: 'Representant för kommunkontakt', owner: 'Ägare', date: 'Nästa vecka', status: 'Behöver tillsättas' },
  { title: 'Underjordiskt garage – kostnadsberäkning', owner: 'Konsult', date: 'Vecka 2', status: 'Behöver bekräftelse' },
  { title: 'Fuktsäkerhets-/grundutredning', owner: 'Konsult', date: 'Vecka 3', status: 'Planerat' },
];

const costs = [
  { label: 'Underjordiskt garage', value: '20 000–30 000 kr/kvm', note: 'Rimlig budgetnivå i Sverige' },
  { label: 'Geoteknik / markutredning', value: '250 000–800 000 kr', note: 'Beroende på markförhållanden' },
  { label: 'Grund & dränering', value: 'Hög volymkostnad', note: 'Kan påverka totalbudget kraftigt' },
  { label: 'Risk för fördröjning', value: 'Medel', note: 'Om dokument och ritningar inte är fullständiga' },
];

const actions = [
  'Inrätta tydlig ansvarig representant mot kommunen',
  'Sammanfatta vad varje aktör kräver för beslut och dokument',
  'Säkerställ att arkitektens skisser är “inlämningsklara” inför granskning',
  'Skapa checklistor med deadlines och svarstider',
  'Följ upp om parterna ligger före eller efter andra aktörer',
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
          <a className="nav-item active" href="#">Översikt</a>
          <a className="nav-item" href="#">Tomter</a>
          <a className="nav-item" href="#">Granskning</a>
          <a className="nav-item" href="#">Kostnad</a>
          <a className="nav-item" href="#">Dokument</a>
          <a className="nav-item" href="#">Automation</a>
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
          {kpis.map((item) => (
            <div key={item.label} className={`kpi-card ${item.tone}`}>
              <p>{item.label}</p>
              <h3>{item.value}</h3>
            </div>
          ))}
        </div>

        <div className="main-grid">
          <div className="panel wide">
            <div className="panel-head">
              <h3>Granskande aktörer</h3>
              <button className="ghost-button">Visa detaljer</button>
            </div>

            <div className="project-list">
              {actors.map((actor) => (
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
              <h3>Aktiviteter</h3>
              <button className="ghost-button">Se schema</button>
            </div>

            <ul className="task-list">
              {tasks.map((task) => (
                <li key={task.title}>
                  <div>
                    <strong>{task.title}</strong>
                    <span>{task.owner}</span>
                  </div>
                  <div className="task-meta">
                    <small>{task.date}</small>
                    <span className="status-pill">{task.status}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bottom-grid">
          <div className="panel">
            <div className="panel-head">
              <h3>Garage- och kostnadsöversikt</h3>
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
              {actions.map((action) => (
                <li key={action}>{action}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
