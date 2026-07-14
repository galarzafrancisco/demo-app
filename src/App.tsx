import { useState, type CSSProperties } from 'react';
import './App.css';

type StarStyle = CSSProperties & {
  '--x': string;
  '--y': string;
  '--delay': string;
};

const stars = [
  { id: 1, label: 'Pop star 1', style: { '--x': '14%', '--y': '26%', '--delay': '0s' } },
  { id: 2, label: 'Pop star 2', style: { '--x': '82%', '--y': '18%', '--delay': '0.4s' } },
  { id: 3, label: 'Pop star 3', style: { '--x': '72%', '--y': '72%', '--delay': '0.8s' } },
  { id: 4, label: 'Pop star 4', style: { '--x': '25%', '--y': '76%', '--delay': '1.2s' } },
] satisfies { id: number; label: string; style: StarStyle }[];

function App() {
  const [score, setScore] = useState(0);

  return (
    <main className="hello-page">
      <section className="hello-card" aria-labelledby="hello-title">
        <p className="eyebrow">tiny landing page</p>
        <h1 id="hello-title">Hello, sunshine.</h1>
        <p className="intro">
          Welcome to a very small, very cheerful corner of the web. There is no complicated demo here anymore, just a friendly hello and a pocket-sized star popping game.
        </p>

        <div className="game" aria-label="Click the bouncing stars game">
          <div className="game-sky">
            {stars.map((star) => (
              <button
                className="star-button"
                key={star.id}
                onClick={() => setScore((currentScore) => currentScore + 1)}
                style={star.style as CSSProperties}
                type="button"
                aria-label={star.label}
              >
                *
              </button>
            ))}
          </div>

          <div className="score-card">
            <span>Star pops</span>
            <strong>{score}</strong>
            <button type="button" onClick={() => setScore(0)}>
              Reset the sky
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
