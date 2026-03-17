import './App.css';

interface Instrument {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

const instruments: Instrument[] = [
  {
    id: 1,
    name: 'Martin D-28',
    category: 'Strings',
    price: 3299,
    image: '🎸',
    description: 'Legendary dreadnought acoustic guitar with iconic tone'
  },
  {
    id: 2,
    name: 'Nord Piano 5',
    category: 'Keys',
    price: 4299,
    image: '🎹',
    description: 'Premium stage piano with authentic acoustic sound'
  },
  {
    id: 3,
    name: 'Pearl Masters Maple',
    category: 'Percussion',
    price: 2899,
    image: '🥁',
    description: 'Professional 5-piece maple shell drum set'
  },
  {
    id: 4,
    name: 'Stradivarius Copy',
    category: 'Strings',
    price: 1499,
    image: '🎻',
    description: 'Master-crafted violin with exceptional resonance'
  },
  {
    id: 5,
    name: 'Selmer Paris Series III',
    category: 'Wind',
    price: 4999,
    image: '🎷',
    description: 'Professional alto saxophone with rich, warm sound'
  },
  {
    id: 6,
    name: 'Bach Stradivarius 180',
    category: 'Brass',
    price: 2799,
    image: '🎺',
    description: 'Professional Bb trumpet with legendary clarity'
  },
  {
    id: 7,
    name: 'Fender Telecaster',
    category: 'Strings',
    price: 1899,
    image: '🎸',
    description: 'Classic solid body electric with signature twang'
  },
  {
    id: 8,
    name: 'Prophet 5',
    category: 'Electronic',
    price: 3999,
    image: '🎹',
    description: 'Legendary analog synthesizer reborn for modern players'
  },
  {
    id: 9,
    name: 'Gretsch White Falcon',
    category: 'Strings',
    price: 5499,
    image: '🎸',
    description: 'Iconic hollow-body electric with vintage aesthetic'
  },
  {
    id: 10,
    name: 'Yamaha DX7',
    category: 'Electronic',
    price: 1799,
    image: '🎹',
    description: 'Classic FM synthesizer that defined the 80s sound'
  },
  {
    id: 11,
    name: 'Nord Electro 6',
    category: 'Keys',
    price: 2999,
    image: '🎹',
    description: 'Portable keyboard with organ, piano, and synth sounds'
  }
];

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1 className="logo">🎵 Harmony Haven</h1>
          <p className="tagline">Where Music Comes Alive</p>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <h2 className="hero-title">Discover Your Sound</h2>
          <p className="hero-subtitle">Explore our curated collection of premium instruments</p>
        </section>

        <section className="catalog">
          <div className="catalog-header">
            <h3>Our Instruments</h3>
            <div className="category-filters">
              <span className="filter-tag">All</span>
              <span className="filter-tag">Strings</span>
              <span className="filter-tag">Keys</span>
              <span className="filter-tag">Wind</span>
              <span className="filter-tag">Percussion</span>
              <span className="filter-tag">Brass</span>
              <span className="filter-tag">Electronic</span>
            </div>
          </div>

          <div className="instrument-grid">
            {instruments.map((instrument) => (
              <div key={instrument.id} className="instrument-card">
                <div className="instrument-image">{instrument.image}</div>
                <div className="instrument-info">
                  <span className="category-badge">{instrument.category}</span>
                  <h4 className="instrument-name">{instrument.name}</h4>
                  <p className="instrument-description">{instrument.description}</p>
                  <div className="instrument-footer">
                    <span className="price">${instrument.price}</span>
                    <button className="add-to-cart">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Harmony Haven. Crafting musical dreams since 1990.</p>
      </footer>
    </div>
  );
}

export default App;
