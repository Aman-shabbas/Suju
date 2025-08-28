import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ChatBox from '../../src/components/ChatBox';

describe('ChatBox', () => {
  test('renders a list of messages with user and bot text', () => {
    const messages = [
      { user: 'Hello', bot: 'Hi there!' },
      { user: 'Where is aman?', bot: '123 Green Street, Bangalore' },
    ];

    render(<ChatBox messages={messages} />);

    expect(screen.getAllByText(/you:/i).length).toBe(2);
    expect(screen.getAllByText(/bot:/i).length).toBe(2);

    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByText('Hi there!')).toBeInTheDocument();
    expect(screen.getByText('Where is aman?')).toBeInTheDocument();
    expect(screen.getByText('123 Green Street, Bangalore')).toBeInTheDocument();
  });

  test('renders nothing when messages is empty', () => {
    render(<ChatBox messages={[]} />);
    const boxes = screen.queryAllByText(/you:/i);
    expect(boxes.length).toBe(0);
  });
});
