import { useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const tabs = ['all', 'mobile', 'laptop', 'tablet'];

export default function Home() {
  const [category, setCategory] = useState('all');
  const { dispatch } = useCart();
  const filtered = category === 'all' ? products : products.filter(p => p.category === category);

  return (
    <div className="p-4">
      <div className="flex gap-4 mb-4">
        {tabs.map(tab => (
          <button key={tab} onClick={() => setCategory(tab)} className="px-4 py-2 bg-blue-500 text-white rounded">
            {tab.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map(p => (
          <div key={p.id} className="border p-4 rounded shadow">
            <h2 className="text-lg font-bold">{p.name}</h2>
            <p>${p.price}</p>
            <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: p })} className="mt-2 bg-green-500 text-white px-3 py-1 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}