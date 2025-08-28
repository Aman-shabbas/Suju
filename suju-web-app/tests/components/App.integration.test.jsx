import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import App from '../../src/App';

jest.mock('axios');

describe('App Integration', () => {
  test('sending a message adds both user and bot messages', async () => {
    axios.post.mockResolvedValueOnce({ data: { response: 'Mocked address' } });

    render(<App />);

    const input = screen.getByPlaceholderText(/message/i);
    const sendImg = screen.getByRole('img', { name: /send/i });

    fireEvent.change(input, { target: { value: 'Where is aman?' } });
    fireEvent.click(sendImg);

    // User message should appear
    expect(await screen.findByText('Where is aman?')).toBeInTheDocument();

    // Bot response should appear
    await waitFor(() => {
      expect(screen.getByText('Mocked address')).toBeInTheDocument();
    });
  });
});
