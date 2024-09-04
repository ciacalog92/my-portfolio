import React, { useState } from 'react';
import './MiniEcommerce.css';

const products = [
  { id: 1, name: 'T-shirt', price: 19.99, image: 'https://cdn.pixabay.com/photo/2019/02/13/19/23/t-shirt-3995093_1280.png' },
  { id: 2, name: 'Jeans', price: 49.99, image: 'https://img.freepik.com/foto-premium/un-paio-di-jeans-blu-con-uno-sfondo-bianco_1262781-27358.jpg?w=996' },
  { id: 3, name: 'Sneakers', price: 79.99, image: 'https://img.freepik.com/foto-gratuito/un-paio-di-scarpe-da-ginnastica_144627-3800.jpg?t=st=1725379942~exp=1725383542~hmac=29b91fb79a91312c0b0d3dd58a01331af7c8a6923b1218c389aa690fb89d0c40&w=99' },
];

const MiniEcommerce = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    // Trova l'indice della prima occorrenza del prodotto con l'ID specificato
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
      // Crea una nuova copia del carrello senza l'elemento da rimuovere
      const newCart = [...cart];
      newCart.splice(index, 1); // Rimuove l'elemento all'indice specificato
      setCart(newCart);
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="mini-ecommerce">
      <h2>Mini E-commerce</h2>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h3>Carrello</h3>
        {cart.map((item, index) => (
          <div key={`${item.id}-${index}`} className="cart-item">
            <span>{item.name} - ${item.price.toFixed(2)}</span>
            <button onClick={() => removeFromCart(item.id)}>Rimuovi</button>
          </div>
        ))}
        <p>Totale: ${total}</p>
      </div>
    </div>
  );
};

export default MiniEcommerce;
