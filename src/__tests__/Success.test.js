import { render, screen } from '@testing-library/react';
import Success from '../pages/Success';

test('displays success message', () => {
  render(<Success />);
  expect(screen.getByText(/Order placed successfully!/i)).toBeInTheDocument();
});