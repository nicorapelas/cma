import { Link } from 'react-router-dom';
import './CTABar.css';

function CalendarIcon() {
  return (
    <span className="cta-bar__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 9h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 3v3M16 3v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="8.5" cy="12.5" r="1" fill="currentColor" />
        <circle cx="12" cy="12.5" r="1" fill="currentColor" />
        <circle cx="15.5" cy="12.5" r="1" fill="currentColor" />
        <circle cx="8.5" cy="16" r="1" fill="currentColor" />
        <circle cx="12" cy="16" r="1" fill="currentColor" />
        <circle cx="15.5" cy="16" r="1" fill="currentColor" />
      </svg>
    </span>
  );
}

export default function CTABar() {
  return (
    <section className="cta-bar">
      <div className="container cta-bar__inner">
        <div className="cta-bar__text">
          <CalendarIcon />
          <p>
            Come and experience the Montessori difference. Book a tour today and see how
            we nurture your child&apos;s potential.
          </p>
        </div>
        <div className="cta-bar__actions">
          <Link to="/contact" className="btn btn--outline">Book a Tour</Link>
          <Link to="/contact" className="btn btn--yellow">Enrol Now</Link>
        </div>
      </div>
    </section>
  );
}
