import { useState } from 'react';
import { contactInfo } from '../data/navigation';
import './ContactPage.css';

const INQUIRY_OPTIONS = [
  { value: 'tour', label: 'Book a tour' },
  { value: 'enrolment', label: 'Enrolment enquiry' },
  { value: 'general', label: 'General enquiry' },
];

const API_BASE = process.env.REACT_APP_API_URL || '';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  inquiryType: 'tour',
  message: '',
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('submitting');
    setFeedback(null);

    try {
      const response = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus('error');
        setFeedback(
          Array.isArray(data.errors) ? data.errors.join(' ') : data.message || 'Something went wrong.'
        );
        return;
      }

      setStatus('success');
      setFeedback(data.message);
      setForm(initialForm);
    } catch {
      setStatus('error');
      setFeedback('Unable to reach the server. Please try again or email us directly.');
    }
  }

  return (
    <section className="contact section">
      <div className="container contact__grid">
        <div className="contact__intro">
          <h1>Contact Us</h1>
          <p>
            Book a tour, ask about enrolment, or send us a message. We will get back to you as soon
            as we can.
          </p>

          <ul className="contact__details">
            <li>
              <span className="contact__label">Email</span>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </li>
            <li>
              <span className="contact__label">Phone</span>
              <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>{contactInfo.phone}</a>
            </li>
            <li>
              <span className="contact__label">Address</span>
              <address>{contactInfo.address}</address>
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="contact__field">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              minLength={2}
              value={form.name}
              onChange={handleChange}
              disabled={status === 'submitting'}
            />
          </div>

          <div className="contact__field">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={handleChange}
              disabled={status === 'submitting'}
            />
          </div>

          <div className="contact__field">
            <label htmlFor="contact-phone">Phone (optional)</label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={handleChange}
              disabled={status === 'submitting'}
            />
          </div>

          <div className="contact__field">
            <label htmlFor="contact-inquiry">I would like to</label>
            <select
              id="contact-inquiry"
              name="inquiryType"
              value={form.inquiryType}
              onChange={handleChange}
              disabled={status === 'submitting'}
            >
              {INQUIRY_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="contact__field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={6}
              required
              minLength={10}
              value={form.message}
              onChange={handleChange}
              disabled={status === 'submitting'}
            />
          </div>

          {feedback && (
            <p
              className={`contact__feedback ${
                status === 'success' ? 'contact__feedback--success' : 'contact__feedback--error'
              }`}
              role="status"
            >
              {feedback}
            </p>
          )}

          <button
            type="submit"
            className="btn btn--green contact__submit"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending…' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  );
}
