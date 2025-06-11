import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Success from './pages/Success';
import { CartProvider, useCart } from './context/CartContext';

function Navbar() {
  const { state } = useCart();
  return (
    <div className="flex justify-between p-4 shadow-md bg-white">
      <Link to="/" className="text-xl font-bold">Shop</Link>
      <Link to="/cart">Cart ({state.cart.length})</Link>
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
