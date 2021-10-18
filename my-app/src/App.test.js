import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { Input } from './components/Input';

test('that input field shows up', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText("Start typing")
  expect(inputElement).toBeInTheDocument();
});
