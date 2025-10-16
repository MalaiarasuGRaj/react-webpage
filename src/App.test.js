import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app hero title', () => {
  render(<App />);
  const title = screen.getByText(/Building Digital Excellence/i);
  expect(title).toBeInTheDocument();
});
