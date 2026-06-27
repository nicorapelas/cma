import { Link } from 'react-router-dom';
import './Quote.css';

export default function Quote() {
  return (
    <section className="quote section">
      <div className="quote__inner">
        <figure className="quote__portrait">
          <img
            src="/images/quote/maria-montessori.jpg"
            alt="Maria Montessori"
            className="quote__portrait-img"
          />
        </figure>

        <blockquote className="quote__content">
          <div className="quote__text-wrap">
            <span className="quote__mark quote__mark--open" aria-hidden="true">&ldquo;</span>
            <p className="quote__text">
              Free the child&apos;s potential, and you will transform him into the world.
            </p>
            <span className="quote__mark quote__mark--close" aria-hidden="true">&rdquo;</span>
          </div>

          <footer className="quote__attribution">
            <cite>Maria Montessori</cite>
            <p className="quote__role">
              Italian Physician, Educator &amp; Founder of the Montessori Method
            </p>
          </footer>

          <Link to="/about-montessori" className="btn btn--green btn--arrow quote__btn">
            Learn More About Montessori
          </Link>
        </blockquote>
      </div>
    </section>
  );
}
