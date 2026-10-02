const summary = [
  { label: 'Totalt byggprojekt', value: '12', delta: '+2 sedan månad', tone: 'blue' },
  { label: 'Pågående byggstarter', value: '7', delta: '3 i planering', tone: 'green' },
  { label: 'Budget i drift', value: '€ 48.6M', delta: '96% av plan', tone: 'amber' },
  { label: 'Risknivå', value: 'Låg', delta: '2 avvikelser', tone: 'red' },
];

const projects = [
  {
    name: 'Norrby Park',
    type: 'Flerbostadshus',
    progress: 74,
    status: 'I byggnation',
    value: '€ 12.4M',
    nextMilestone: 'Taksystem klar',
  },
  {
    name: 'Sundsvik Homes',
    type: 'Kvalitetsprojekt',
    progress: 58,
    status: 'I produktion',
    value: '€ 9.7M',
    nextMilestone: 'Väggar + infästningar',
  },
  {
    name: 'Åkerud 7',
    type: 'Småhusområde',
    progress: 31,
    status: 'Förberedelse',
    value: '€ 6.2M',
    nextMilestone: 'Markarbeten',
  },
];

const tasks = [
  { title: 'Kostnadsuppföljning', owner: 'Ekonomi', date: 'Idag', status: 'På gång' },
  { title: 'Bygglovsstatus', owner: 'Fastighet', date: 'Imorgon', status: 'I granskning' },
  { title: 'Leverantörsavtal', owner: 'Inköp', date: 'Onsdag', status: 'Godkänd' },
  { title: 'Kvalitetskontroll', owner: 'Projektledning', date: 'Fredag', status: 'Schemalagd' },
];

const timeline = [
  { phase: 'Planering', percent: 100, label: 'Klar' },
  { phase: 'Förberedelse', percent: 86, label: 'Aktiv' },
  { phase: 'Byggnation', percent: 63, label: 'Aktiv' },
  { phase: 'Slutförande', percent: 18, label: 'Kommande' },
];

const activities = [
  'Norrby Park: 18 arbetslag aktiva',
  'Sundsvik Homes: 2 leverantörer försenade',
  'Åkerud 7: 3 dokument behövs för godkännande',
  'Nytt KPI-grupp: CO2-värdering för byggmaterial',
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
          <a className="nav-item" href="#">Projekt</a>
          <a className="nav-item" href="#">Budget</a>
          <a className="nav-item" href="#">Tidsplan</a>
          <a className="nav-item" href="#">Dokument</a>
          <a className="nav-item" href="#">Automation</a>
        </nav>

        <div className="sidebar-card">
          <p className="eyebrow muted">Nästa milstolpe</p>
          <h3>Projektmöte</h3>
          <p>Onsdag 14:00 – samordning för Norrby Park</p>
        </div>
      </aside>

      <section className="content">
        <header className="topbar">
          <div>
            <p className="eyebrow muted">Fastighetsutveckling</p>
            <h2>Projektöversikt</h2>
          </div>
          <button className="primary-button">Ny rapport</button>
        </header>

        <div className="kpi-grid">
          {summary.map((item) => (
            <div key={item.label} className={`kpi-card ${item.tone}`}>
              <p>{item.label}</p>
              <h3>{item.value}</h3>
              <span>{item.delta}</span>
            </div>
          ))}
        </div>

        <div className="main-grid">
          <div className="panel wide">
            <div className="panel-head">
              <h3>Projektportfölj</h3>
              <button className="ghost-button">Visa alla</button>
            </div>

            <div className="project-list">
              {projects.map((project) => (
                <div key={project.name} className="project-row">
                  <div>
                    <strong>{project.name}</strong>
                    <span>{project.type}</span>
                  </div>

                  <div className="progress-box">
                    <div className="progress-label">
                      <span>{project.progress}%</span>
                      <small>{project.status}</small>
                    </div>
                    <div className="progress-bar">
                      <div style={{ width: `${project.progress}%` }} />
                    </div>
                  </div>

                  <div className="money-box">
                    <span>{project.value}</span>
                    <small>{project.nextMilestone}</small>
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
              <h3>Fasstatus</h3>
            </div>

            <div className="timeline-list">
              {timeline.map((item) => (
                <div key={item.phase} className="timeline-item">
                  <div className="timeline-header">
                    <span>{item.phase}</span>
                    <strong>{item.label}</strong>
                  </div>
                  <div className="mini-bar">
                    <div style={{ width: `${item.percent}%` }} />
                  </div>
                  <small>{item.percent}%</small>
                </div>
              ))}
            </div>
          </div>

          <div className="panel">
            <div className="panel-head">
              <h3>Senaste händelser</h3>
            </div>

            <ul className="activity-list">
              {activities.map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
