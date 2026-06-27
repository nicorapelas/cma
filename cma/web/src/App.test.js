import { render, screen } from '@testing-library/react';
import App from './App';

test('renders school name on homepage', () => {
  render(<App />);
  const heading = screen.getAllByText(/Carletonville Montessori Academy/i);
  expect(heading.length).toBeGreaterThan(0);
});
