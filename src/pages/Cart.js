import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Cart() {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();
  const subtotal = state.cart.reduce((sum, item) => sum + item.price, 0);

  const handleOrder = () => {
    dispatch({ type: 'CLEAR_CART' });
    navigate('/success');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {state.cart.length === 0 ? (
        <p>No items in cart. <Link to="/" className="text-blue-500">Shop now</Link></p>
      ) : (
        <>
          <ul>
            {state.cart.map((item, index) => (
              <li key={index} className="border-b py-2">{item.name} - ${item.price}</li>
            ))}
          </ul>
          <p className="mt-4 font-bold">Subtotal: ${subtotal.toFixed(2)}</p>
          <button onClick={handleOrder} className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
            Proceed to Order
          </button>
        </>
      )}
    </div>
  );
}