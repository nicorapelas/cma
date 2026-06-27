import { Link } from 'react-router-dom';
import './Welcome.css';

export default function Welcome() {
  return (
    <section className="welcome section">
      <div className="welcome__decor welcome__decor--left" aria-hidden="true">🌿</div>
      <div className="welcome__decor welcome__decor--right" aria-hidden="true">🍃</div>

      <div className="container welcome__grid">
        <div className="welcome__image-wrap">
          <img
            src="/images/welcome/geography.jpg"
            alt="Child working with a Montessori world map puzzle"
            className="welcome__image"
          />
        </div>

        <div className="welcome__text">
          <h2 className="welcome__title">
            Welcome to <span>Carletonville Montessori Academy</span>
          </h2>
          <p>
            At Carletonville Montessori Academy, we believe every child carries within them
            the person they will become. Our nurturing environment respects each child&apos;s
            unique potential, fostering independence, curiosity, and a lifelong love of learning.
          </p>
          <p>
            Through the Montessori method, children develop at their own pace in a carefully
            prepared environment filled with hands-on materials that engage the mind, body,
            and spirit.
          </p>
          <Link to="/about-montessori" className="btn btn--green btn--arrow">
            Discover Our School
          </Link>
        </div>
      </div>
    </section>
  );
}
