import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  test('displays welcome message', () => {
    render(<App />);
    // Update this test based on your actual App component content
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });
});
