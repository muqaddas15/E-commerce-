import { render, screen, fireEvent } from '@testing-library/react';
import { CartProvider } from '../context/CartContext';
import Home from '../pages/Home';

test('renders category buttons', () => {
  render(<CartProvider><Home /></CartProvider>);
  expect(screen.getByText(/MOBILE/i)).toBeInTheDocument();
});