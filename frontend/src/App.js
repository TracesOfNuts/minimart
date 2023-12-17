import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/products');
      const products = await response.json();
      setProducts(products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Jack's Minimart!
        </p>
      </header>
      <div className="product-list">
          {products.map(product => (
            <div className="product" key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </div>
    </div>
  );
}

export default App;
