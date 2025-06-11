import { renderHook, act } from '@testing-library/react';
import { CartProvider, useCart } from '../context/CartContext';

test('adds and clears cart in context', () => {
  const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;
  const { result } = renderHook(() => useCart(), { wrapper });

  act(() => {
    result.current.dispatch({ type: 'ADD_TO_CART', payload: { id: 1, name: 'Phone', price: 999 } });
  });
  expect(result.current.state.cart.length).toBe(1);

  act(() => {
    result.current.dispatch({ type: 'CLEAR_CART' });
  });
  expect(result.current.state.cart.length).toBe(0);
});