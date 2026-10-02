* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #f3f6fb;
  color: #111827;
}

button {
  font: inherit;
  cursor: pointer;
}

.page-shell {
  display: grid;
  grid-template-columns: 280px 1fr;
  min-height: 100vh;
}

.sidebar {
  background: linear-gradient(180deg, #0f172a 0%, #111827 100%);
  color: #f8fafc;
  padding: 28px 20px;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 30px;
}

.brand-badge {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  display: grid;
  place-items: center;
  font-weight: 700;
}

.eyebrow {
  margin: 0 0 4px;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.85;
}

.eyebrow.muted {
  color: #64748b;
}

.brand-wrap h1,
.topbar h2,
.panel-head h3,
.sidebar-card h3 {
  margin: 0;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 28px;
}

.nav-item {
  color: #dbeafe;
  text-decoration: none;
  padding: 10px 12px;
  border-radius: 10px;
  transition: 0.2s ease;
}

.nav-item:hover,
.nav-item.active {
  background: rgba(148, 163, 184, 0.16);
}

.sidebar-card {
  background: rgba(148, 163, 184, 0.1);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 14px;
  padding: 18px 16px;
  line-height: 1.5;
}

.content {
  padding: 28px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.primary-button,
.ghost-button {
  border: none;
  border-radius: 10px;
  padding: 10px 16px;
  font-weight: 700;
}

.primary-button {
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  color: white;
}

.ghost-button {
  background: #eff6ff;
  color: #1d4ed8;
}

.kpi-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  margin-bottom: 24px;
}

.kpi-card {
  padding: 18px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.04);
  border: 1px solid rgba(148, 163, 184, 0.12);
}

.kpi-card p,
.kpi-card span {
  margin: 0;
  color: #475569;
}

.kpi-card h3 {
  margin: 12px 0 8px;
  font-size: clamp(1.6rem, 2vw, 2.2rem);
}

.kpi-card.blue { border-top: 4px solid #3b82f6; }
.kpi-card.green { border-top: 4px solid #22c55e; }
.kpi-card.amber { border-top: 4px solid #f59e0b; }
.kpi-card.red { border-top: 4px solid #ef4444; }

.main-grid,
.bottom-grid {
  display: grid;
  grid-template-columns: 1.7fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.panel {
  background: white;
  border-radius: 18px;
  padding: 20px;
  border: 1px solid rgba(148, 163, 184, 0.12);
  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.04);
}

.panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.project-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.project-row {
  display: grid;
  grid-template-columns: 1.1fr 1.3fr 0.9fr;
  gap: 16px;
  align-items: center;
  padding-bottom: 14px;
  border-bottom: 1px solid #e2e8f0;
}

.project-row:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.project-row strong,
.task-list strong {
  display: block;
  margin-bottom: 4px;
}

.project-row span,
.project-row small,
.task-list span,
.task-list small,
.activity-list li,
.timeline-header span,
.timeline-item small {
  color: #64748b;
}

.progress-box {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.progress-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
}

.progress-bar,
.mini-bar {
  background: #e2e8f0;
  border-radius: 999px;
  overflow: hidden;
  height: 10px;
}

.progress-bar > div,
.mini-bar > div {
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #2563eb, #8b5cf6);
}

.money-box {
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: right;
}

.task-list,
.activity-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.task-list li {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #eef2f7;
}

.task-list li:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.task-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
}

.status-pill {
  background: #e0f2fe;
  color: #075985;
  padding: 5px 8px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
}

.timeline-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.timeline-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 980px) {
  .page-shell {
    grid-template-columns: 1fr;
  }

  .kpi-grid,
  .main-grid,
  .bottom-grid {
    grid-template-columns: 1fr;
  }

  .project-row {
    grid-template-columns: 1fr;
  }

  .money-box {
    text-align: left;
  }
}
