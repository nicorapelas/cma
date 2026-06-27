export default function WhyChooseIcon({ type }) {
  const icons = {
    children: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <circle cx="8" cy="6" r="3" />
        <circle cx="16" cy="6" r="3" />
        <circle cx="12" cy="14" r="3" />
        <path d="M4 20c0-3 2.5-5 6-5s6 2 6 5" />
      </svg>
    ),
    hands: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M12 2C9 6 6 8 6 12c0 3.3 2.7 6 6 6s6-2.7 6-6c0-4-3-6-6-10z" />
      </svg>
    ),
    heart: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    globe: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  };

  return icons[type] || null;
}
