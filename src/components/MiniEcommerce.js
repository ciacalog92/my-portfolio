import React, { useState } from "react";
import "./MiniEcommerce.css";
import { TiShoppingCart } from "react-icons/ti";
import tShirt from "../images/t-shirt2.png";
import jeans from "../images/jeans1.png";
import scarpe from "../images/scarpe4.png";
import { CiCircleRemove } from "react-icons/ci";

const products = [
  {
    id: 1,
    name: "T-shirt",
    price: 19.99,
    image: tShirt,
    sizes: ["S", "M", "L", "XL"], // Aggiunte le taglie
  },
  {
    id: 2,
    name: "Jeans",
    price: 49.99,
    image: jeans,
    sizes: ["28", "30", "32", "34", "36"], // Aggiunte le taglie
  },
  {
    id: 3,
    name: "Sneakers",
    price: 79.99,
    image: scarpe,
    sizes: ["39", "40", "41", "42", "43"], // Aggiunte le taglie
  },
];

const MiniEcommerce = () => {
  const [cart, setCart] = useState([]);
  const [isCartVisible, setCartVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };
  const addToCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);

    if (productInCart) {
      // Se il prodotto è già nel carrello, aumenta la quantità
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Aggiungi il prodotto con una quantità iniziale di 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const productInCart = cart.find((item) => item.id === productId);

    if (productInCart.quantity > 1) {
      // Riduci la quantità se è maggiore di 1
      setCart(
        cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      // Rimuovi completamente il prodotto se la quantità è 1
      setCart(cart.filter((item) => item.id !== productId));
    }
  };

  const total = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="mini-ecommerce">
      <h2>Mini E-commerce</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            {product.sizes && (
              <select className="select-size" value={selectedSize} onChange={handleSizeChange}>
                <option  value="">Seleziona una taglia</option>
                {product.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            )}
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Button to toggle the cart visibility */}
      <div className="cart-icon-container">
        <button className="show-cart" onClick={() => setCartVisible(true)}>
          <TiShoppingCart />
          {cart.length > 0 && (
            <span className="cart-count">
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </button>
      </div>

      {/* Modal for Cart */}
      {isCartVisible && (
        <div className="modal-overlay" onClick={() => setCartVisible(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Carrello</h3>
            {cart.length === 0 ? (
              <p>Il carrello è vuoto</p>
            ) : (
              cart.map((item, index) => (
                <div key={`${item.id}-${index}`} className="cart-item">
                  <span>
                    {item.name} - ${item.price.toFixed(2)} (x{item.quantity})
                  </span>
                  <button onClick={() => removeFromCart(item.id)}>
                  <CiCircleRemove />
                  </button>
                </div>
              ))
            )}
            <p>Totale: ${total}</p>
            <button onClick={() => setCartVisible(false)}>Chiudi</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MiniEcommerce;
