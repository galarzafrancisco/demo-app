import { useParams, Link } from 'react-router-dom';
import { guitars } from '../data/guitars';
import './ProductPage.css';

function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const guitar = guitars.find((g) => g.id === id);

  if (!guitar) {
    return (
      <div className="product-container">
        <div className="not-found">
          <h2>Guitar Not Found</h2>
          <p>Sorry, we couldn't find the guitar you're looking for.</p>
          <Link to="/" className="back-link">← Back to Collection</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product-container">
      <Link to="/" className="back-link">← Back to Collection</Link>

      <div className="product-layout">
        <div className="product-image-section">
          <div className="product-image-large">{guitar.imageUrl}</div>
        </div>

        <div className="product-details-section">
          <div className="product-header">
            <div className="product-category">{guitar.category}</div>
            <h1 className="product-title">{guitar.name}</h1>
            <div className="product-model">{guitar.model}</div>
            <div className="product-price">${guitar.price.toLocaleString()}</div>
          </div>

          <div className="product-description">
            <h2>Description</h2>
            <p>{guitar.description}</p>
          </div>

          <div className="product-features">
            <h2>Features</h2>
            <ul className="features-list">
              {guitar.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="product-actions">
            <button className="btn-primary">Add to Cart</button>
            <button className="btn-secondary">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
