import './App.css'

function App() {
  return (
    <div className="container">
      <div className="hero">
        <div className="badge">DEMO APPLICATION</div>
        <h1 className="title">
          Taico Demo App
        </h1>
        <p className="subtitle">
          Showcasing the power of asynchronous coding
        </p>
      </div>

      <div className="features">
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Async First</h3>
          <p>Built to demonstrate asynchronous coding patterns and real-time capabilities</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🚀</div>
          <h3>Modern Stack</h3>
          <p>Powered by React, Vite, and deployed with GitOps on Kubernetes</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🎯</div>
          <h3>Production Ready</h3>
          <p>CI/CD pipeline with automated testing and deployment workflows</p>
        </div>
      </div>
    </div>
  )
}

export default App
