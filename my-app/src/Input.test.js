import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './components/Input';

test('that input is displayed', () => {
    render(<Input />);
    const input = screen.getByPlaceholderText('Start typing')
    expect(input).toBeInTheDocument();
})

test('that p starts blank', () => {
    render(<Input />);
    const paragraph = document.querySelector('p')
    expect(paragraph).toHaveTextContent('Input is:')
});

test('that p changes with input', () => {
    render(<Input />);
    const paragraph = document.querySelector('p')
    const input = document.querySelector('input')
    
    expect(paragraph).toHaveTextContent('Input is:')
    
    fireEvent.change(input, {target: {value: '123'}})
    expect(paragraph).toHaveTextContent('Input is: 123')
});