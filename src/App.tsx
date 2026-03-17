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
    name: 'Acoustic Guitar',
    category: 'Strings',
    price: 499,
    image: '🎸',
    description: 'Classic 6-string acoustic guitar with rich, warm tones'
  },
  {
    id: 2,
    name: 'Grand Piano',
    category: 'Keys',
    price: 8999,
    image: '🎹',
    description: 'Professional grand piano with 88 weighted keys'
  },
  {
    id: 3,
    name: 'Drum Set',
    category: 'Percussion',
    price: 1299,
    image: '🥁',
    description: 'Complete 5-piece drum set with cymbals and hardware'
  },
  {
    id: 4,
    name: 'Violin',
    category: 'Strings',
    price: 699,
    image: '🎻',
    description: 'Hand-crafted violin with bow and case included'
  },
  {
    id: 5,
    name: 'Saxophone',
    category: 'Wind',
    price: 1599,
    image: '🎷',
    description: 'Alto saxophone with professional-grade construction'
  },
  {
    id: 6,
    name: 'Trumpet',
    category: 'Brass',
    price: 899,
    image: '🎺',
    description: 'Bb trumpet with clear, powerful tone'
  },
  {
    id: 7,
    name: 'Electric Guitar',
    category: 'Strings',
    price: 799,
    image: '🎸',
    description: 'Solid body electric guitar with dual pickups'
  },
  {
    id: 8,
    name: 'Synthesizer',
    category: 'Electronic',
    price: 1299,
    image: '🎹',
    description: 'Modern digital synthesizer with 61 keys'
  },
  {
    id: 9,
    name: 'Cello',
    category: 'Strings',
    price: 1899,
    image: '🎻',
    description: 'Full-size cello with rich, deep resonance'
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
