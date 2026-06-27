import { Link } from 'react-router-dom';
import {
  contactInfo,
  footerQuickLinksLeft,
  footerQuickLinksRight,
} from '../../data/navigation';
import './Footer.css';

function SectionHeading({ children }) {
  return (
    <h3 className="footer__heading">
      {children}
      <span className="footer__heading-line" aria-hidden="true">
        <span className="footer__heart">♡</span>
      </span>
    </h3>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__main container">
        <div className="footer__col footer__col--contact">
          <SectionHeading>Contact Us</SectionHeading>
          <ul className="footer__contact-list">
            <li>
              <span className="footer__icon" aria-hidden="true">✉</span>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </li>
            <li>
              <span className="footer__icon" aria-hidden="true">☎</span>
              <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>{contactInfo.phone}</a>
            </li>
            <li>
              <span className="footer__icon" aria-hidden="true">📍</span>
              <address>{contactInfo.address}</address>
            </li>
          </ul>
        </div>

        <div className="footer__divider" aria-hidden="true" />

        <div className="footer__col footer__col--links">
          <SectionHeading>Quick Links</SectionHeading>
          <div className="footer__links-grid">
            <ul>
              {footerQuickLinksLeft.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}><span aria-hidden="true">› </span>{link.label}</Link>
                </li>
              ))}
            </ul>
            <ul>
              {footerQuickLinksRight.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}><span aria-hidden="true">› </span>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__col footer__col--brand">
          <img
            src="/images/logo/footer-brand.png"
            alt="Carletonville Montessori Academy"
            className="footer__tree"
          />
          <p className="footer__brand-name">Carletonville Montessori Academy</p>
          <p className="footer__brand-tagline">Freeing the Child&apos;s Potential</p>
        </div>
      </div>

      <div className="footer__bar">
        <div className="footer__bar-inner container">
          <p className="footer__tagline">
            <span className="footer__tagline-heart" aria-hidden="true">♡</span>
            Nurturing <em className="text-purple">Curiosity</em>. Inspiring{' '}
            <em className="text-pink">Independence</em>. Building Bright{' '}
            <em className="text-blue">Futures</em>.
          </p>
          <p className="footer__copyright">
            © 2018–{year} Carletonville Montessori Academy. All rights reserved.
          </p>
          <div className="footer__social">
            <span>Follow Us</span>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__facebook"
              aria-label="Follow us on Facebook"
            >
              f
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
