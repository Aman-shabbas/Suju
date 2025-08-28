import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../src/App';

describe('App Component', () => {
  test('renders input with placeholder', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/message/i);
    expect(input).toBeInTheDocument();
  });

  test('renders send control (image icon)', () => {
    render(<App />);
    const sendImg = screen.getByRole('img', { name: /send/i });
    expect(sendImg).toBeInTheDocument();
  });
});
