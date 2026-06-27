import { Link } from 'react-router-dom';
import './PlaceholderPage.css';

export default function PlaceholderPage({ title, description }) {
  return (
    <section className="placeholder section">
      <div className="container placeholder__inner">
        <h1>{title}</h1>
        <p>{description}</p>
        <Link to="/" className="btn btn--green">Back to Home</Link>
      </div>
    </section>
  );
}
