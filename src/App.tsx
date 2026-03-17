import './App.css'

function App() {
  return (
    <div className="container">
      <div className="profile-header">
        <div className="profile-banner"></div>
        <div className="profile-info">
          <div className="avatar">
            <div className="avatar-inner">JD</div>
          </div>
          <div className="profile-details">
            <h1 className="profile-name">Jordan Davis</h1>
            <p className="profile-username">@jordandev</p>
            <p className="profile-bio">
              Full-stack developer passionate about building modern web applications.
              Love working with React, TypeScript, and cloud technologies.
            </p>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <div className="stat-card">
          <div className="stat-value">1.2K</div>
          <div className="stat-label">Followers</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">847</div>
          <div className="stat-label">Following</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">243</div>
          <div className="stat-label">Posts</div>
        </div>
      </div>

      <div className="content-section">
        <div className="section-title">Skills & Interests</div>
        <div className="skills-grid">
          <div className="skill-tag">React</div>
          <div className="skill-tag">TypeScript</div>
          <div className="skill-tag">Node.js</div>
          <div className="skill-tag">Kubernetes</div>
          <div className="skill-tag">CI/CD</div>
          <div className="skill-tag">GraphQL</div>
        </div>
      </div>

      <div className="content-section">
        <div className="section-title">Recent Projects</div>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-icon">⚡</div>
            <h3>Async Task Manager</h3>
            <p>Real-time task management with async state handling</p>
            <div className="project-tech">React • WebSocket • Redis</div>
          </div>

          <div className="project-card">
            <div className="project-icon">🚀</div>
            <h3>Cloud Deploy Pipeline</h3>
            <p>GitOps workflow with automated Kubernetes deployment</p>
            <div className="project-tech">K8s • ArgoCD • GitHub Actions</div>
          </div>

          <div className="project-card">
            <div className="project-icon">🎯</div>
            <h3>Design System</h3>
            <p>Component library with modern UI patterns</p>
            <div className="project-tech">React • Storybook • CSS-in-JS</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
