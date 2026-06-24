import './App.css';

const focusAreas = [
  'AI platforms that people can actually use',
  'Cloud, data and Kubernetes foundations',
  'Secure self-service without enterprise theatre',
  'Turning messy ambiguity into a shippable path',
];

const proofPoints = [
  {
    label: '15+ years',
    text: 'Building systems across banking, media, retail, telco and manufacturing.',
  },
  {
    label: '150+ datasets',
    text: 'GitOps database change platform across BigQuery and Spanner, with governance built in.',
  },
  {
    label: '4 weeks',
    text: 'Designed, trained and productionised a live cricket wicket prediction model for Fox Sports.',
  },
];

const work = [
  {
    title: 'Senior AI Engineer, Macquarie Bank',
    period: '2025 - now',
    text: 'Working on agentic AI platform strategy: MCP, internal registries, governance, access patterns, evals and developer enablement inside a regulated bank.',
  },
  {
    title: 'Senior Platform Engineer, Macquarie Bank',
    period: '2021 - 2025',
    text: 'Helped build the GCP data platform foundations behind AI, regulatory reporting and self-service infrastructure. Lots of GitOps, Kubernetes, BigQuery, Spanner, Argo CD and practical governance.',
  },
  {
    title: 'Senior Consultant, Servian',
    period: '2017 - 2021',
    text: 'GCP early adopter and hands-on architect/engineer across ASX, Fox Sports, Optus, Service NSW, Westfield, Cuscal and others. Sold the work, designed it, then built it.',
  },
];

const principles = [
  'I like small teams with high trust and low ceremony.',
  'I prefer plain English over slideware and architecture cosplay.',
  'I care about leverage: what unlocks speed, safety or clarity for a lot of people.',
  'I will go deep technically, but only when it helps the product or the organisation move.',
];

const tools = [
  'AI agents',
  'MCP',
  'Google Cloud',
  'Kubernetes',
  'BigQuery',
  'Spanner',
  'Terraform',
  'Argo CD',
  'Node.js',
  'React',
  'Python',
  'PyTorch',
];

function App() {
  return (
    <main className="page-shell">
      <section className="hero" aria-labelledby="profile-title">
        <nav className="top-bar" aria-label="Profile links">
          <a href="https://github.com/galarzafrancisco">GitHub</a>
          <a href="#experience-title">Experience</a>
        </nav>

        <div className="hero-grid">
          <div>
            <p className="eyebrow">Francisco Galarza - Manly, NSW</p>
            <h1 id="profile-title">I build the boring platform bits that make ambitious teams faster.</h1>
            <p className="intro">
              Product-minded platform and AI engineer. I am aiming for Lead, CTO, Principal or Staff-level work where the job is to make hard technical calls, build trust, and turn vague problems into useful systems.
            </p>
            <p className="plain-note">
              Not a LinkedIn thought-leader type. More of a "show me the problem, show me the constraints, let's make the thing better" type.
            </p>
          </div>

          <aside className="profile-card" aria-label="What I am good at">
            <p className="card-kicker">Good at</p>
            <ul>
              {focusAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="proof-grid" aria-label="Quick proof points">
        {proofPoints.map((point) => (
          <article className="proof-card" key={point.label}>
            <strong>{point.label}</strong>
            <p>{point.text}</p>
          </article>
        ))}
      </section>

      <section className="split-section">
        <div>
          <p className="section-label">What I do</p>
          <h2>Find the leverage, then build the path.</h2>
        </div>
        <div className="body-copy">
          <p>
            I have spent years around data platforms, cloud foundations, Kubernetes, production incidents, AI/ML systems and enterprise security. The pattern is usually the same: the tech is only half the problem. The other half is helping people make decisions, remove friction, and trust the system enough to use it.
          </p>
          <p>
            Recently that has meant working on agentic AI enablement in a bank: MCP strategy, internal registries, governance, auth, evaluations and developer workflows. Before that it was GCP data platform foundations, GitOps schema management, ingress modernisation and self-service infrastructure visibility.
          </p>
        </div>
      </section>

      <section className="work-section" aria-labelledby="experience-title">
        <p className="section-label">Experience</p>
        <h2 id="experience-title">A few chapters</h2>
        <div className="timeline">
          {work.map((item) => (
            <article className="timeline-item" key={item.title}>
              <div>
                <h3>{item.title}</h3>
                <span>{item.period}</span>
              </div>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="principles-section">
        <div>
          <p className="section-label">How I work</p>
          <h2>Direct, curious, allergic to nonsense.</h2>
        </div>
        <ul className="principle-list">
          {principles.map((principle) => (
            <li key={principle}>{principle}</li>
          ))}
        </ul>
      </section>

      <section className="toolbox-section" aria-labelledby="toolbox-title">
        <p className="section-label">Toolbox</p>
        <h2 id="toolbox-title">Comfortable from strategy to shell.</h2>
        <div className="toolbox">
          {tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>Freediving, underwater photography, running and piano when I am not making computers less annoying.</p>
      </footer>
    </main>
  );
}

export default App;
