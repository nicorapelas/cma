import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__image-wrap">
        <img
          src="/images/hero/we-love-montessori.jpg"
          alt="Children lying on grass spelling We Love Montessori"
          className="hero__image"
        />
      </div>

      <div className="hero__content container">
        <p className="hero__tagline">
          Nurturing <span className="hero__accent hero__accent--purple">Curiosity</span>.
          Inspiring <span className="hero__accent hero__accent--pink">Independence</span>.
          Building Bright <span className="hero__accent hero__accent--blue">Futures</span>.
        </p>

        <div className="hero__banner">
          A Montessori environment for children from{' '}
          <strong>18 months</strong> up to <strong>Grade R</strong>.
        </div>

        <div className="hero__actions">
          <Link to="/contact" className="btn btn--green hero__btn">
            <span aria-hidden="true">📅</span> Book a Tour
          </Link>
          <Link to="/contact" className="btn btn--yellow hero__btn">
            <span aria-hidden="true">✏️</span> Enrol Now
          </Link>
        </div>
      </div>
    </section>
  );
}
