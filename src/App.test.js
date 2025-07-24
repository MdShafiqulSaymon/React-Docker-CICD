import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/My React App with Docker & CI\/CD/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders deployment message', () => {
  render(<App />);
  const messageElement = screen.getByText(/Successfully deployed with GitHub Actions!/i);
  expect(messageElement).toBeInTheDocument();
});