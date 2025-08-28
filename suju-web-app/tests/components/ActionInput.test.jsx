import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ActionInput from '../../src/components/ActionInput';

describe('ActionInput', () => {
  test('renders input with placeholder and calls setInput on change', () => {
    const setInput = jest.fn();
    render(<ActionInput input="" setInput={setInput} sendMessage={jest.fn()} keyHandler={jest.fn()} />);
    const input = screen.getByPlaceholderText(/message/i);
    fireEvent.change(input, { target: { value: 'Hello' } });
    expect(setInput).toHaveBeenCalledWith('Hello');
  });

  test('calls keyHandler on Enter key', () => {
    const keyHandler = jest.fn();
    render(<ActionInput input="" setInput={jest.fn()} sendMessage={jest.fn()} keyHandler={keyHandler} />);
    const input = screen.getByPlaceholderText(/message/i);
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(keyHandler).toHaveBeenCalledWith('Enter');
  });

  test('clicking send image triggers sendMessage', () => {
    const sendMessage = jest.fn();
    render(<ActionInput input="Hello" setInput={jest.fn()} sendMessage={sendMessage} keyHandler={jest.fn()} />);
    const sendImg = screen.getByRole('img', { name: /send/i });
    fireEvent.click(sendImg);
    expect(sendMessage).toHaveBeenCalled();
  });
});
