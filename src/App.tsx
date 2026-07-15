import { useState, type CSSProperties } from 'react';
import './App.css';

type DinoStyle = CSSProperties & {
  '--x': string;
  '--y': string;
  '--delay': string;
};

const dinosaurs = [
  { id: 1, label: 'Spot the tiny triceratops', icon: '🦖', style: { '--x': '15%', '--y': '30%', '--delay': '0s' } },
  { id: 2, label: 'Spot the bright stegosaurus', icon: '🦕', style: { '--x': '78%', '--y': '22%', '--delay': '0.4s' } },
  { id: 3, label: 'Spot the canyon raptor', icon: '🦖', style: { '--x': '70%', '--y': '72%', '--delay': '0.8s' } },
  { id: 4, label: 'Spot the fern brachiosaurus', icon: '🦕', style: { '--x': '27%', '--y': '76%', '--delay': '1.2s' } },
] satisfies { id: number; label: string; icon: string; style: DinoStyle }[];

function App() {
  const [score, setScore] = useState(0);

  return (
    <main className="dino-page">
      <section className="dino-card" aria-labelledby="dino-title">
        <p className="eyebrow">jurassic field notes</p>
        <h1 id="dino-title">Dinosaur day trip.</h1>
        <p className="intro">
          Pack your fossil brush and step into a leafy prehistoric valley. Tap the dinosaurs as they stomp through the dig site and keep count of every sighting.
        </p>

        <div className="game" aria-label="Click the wandering dinosaurs game">
          <div className="dino-valley">
            {dinosaurs.map((dinosaur) => (
              <button
                className="dino-button"
                key={dinosaur.id}
                onClick={() => setScore((currentScore) => currentScore + 1)}
                style={dinosaur.style as CSSProperties}
                type="button"
                aria-label={dinosaur.label}
              >
                {dinosaur.icon}
              </button>
            ))}
          </div>

          <div className="score-card">
            <span>Dino sightings</span>
            <strong>{score}</strong>
            <button type="button" onClick={() => setScore(0)}>
              Reset the trail
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
