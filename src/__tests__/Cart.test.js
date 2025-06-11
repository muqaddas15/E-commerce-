import { render, screen } from '@testing-library/react';
import { CartProvider } from '../context/CartContext';
import Cart from '../pages/Cart';
import { BrowserRouter } from 'react-router-dom';

test('renders empty cart message', () => {
  render(
    <CartProvider>
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    </CartProvider>
  );
  expect(screen.getByText(/No items in cart/i)).toBeInTheDocument();
});