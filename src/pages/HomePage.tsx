import { Link } from 'react-router-dom';
import { guitars } from '../data/guitars';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="store-title">Premium Guitars</h1>
          <p className="store-tagline">Discover your sound with legendary instruments</p>
        </div>
      </header>

      <section className="guitars-section">
        <div className="section-header">
          <h2 className="section-title">Our Collection</h2>
          <p className="section-subtitle">Handpicked guitars from the world's finest makers</p>
        </div>

        <div className="guitars-grid">
          {guitars.map((guitar) => (
            <Link
              key={guitar.id}
              to={`/guitar/${guitar.id}`}
              className="guitar-card"
            >
              <div className="guitar-image">{guitar.imageUrl}</div>
              <div className="guitar-info">
                <div className="guitar-brand">{guitar.brand}</div>
                <h3 className="guitar-name">{guitar.model}</h3>
                <p className="guitar-description">{guitar.description}</p>
                <div className="guitar-footer">
                  <span className="guitar-price">${guitar.price.toLocaleString()}</span>
                  <span className="view-details">View Details →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>Premium Guitars © 2026 - Where passion meets perfection</p>
      </footer>
    </div>
  );
}

export default HomePage;
