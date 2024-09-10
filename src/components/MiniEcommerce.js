import React, { useState, useRef } from "react";
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
  const [animatingProductId, setAnimatingProductId] = useState(null); // Stato per il prodotto in animazione
  const productImageRefs = useRef({}); // Ref per le immagini dei prodotti
  const cartIconRef = useRef(null); // Ref per l'icona del carrello

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const addToCart = (product) => {
    if (!selectedSize) {
      alert("Seleziona una taglia per continuare!");
      return;
    }

    const productInCart = cart.find(
      (item) => item.id === product.id && item.size === selectedSize
    );

    if (productInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id && item.size === selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1, size: selectedSize }]);
    }

    // Imposta l'ID del prodotto che si sta animando
    setAnimatingProductId(product.id);

    const cartIcon = cartIconRef.current.getBoundingClientRect();
    const productImage = productImageRefs.current[product.id].getBoundingClientRect();

    productImageRefs.current[product.id].style.setProperty(
      "--moveX",
      `${cartIcon.left - productImage.left}px`
    );
    productImageRefs.current[product.id].style.setProperty(
      "--moveY",
      `${cartIcon.top - productImage.top}px`
    );

    // Avvia animazione per il prodotto selezionato
    setTimeout(() => {
      setAnimatingProductId(null); // Reset dell'ID dopo l'animazione
    }, 1000);
  };

  const removeFromCart = (productId, size) => {
    const productInCart = cart.find(
      (item) => item.id === productId && item.size === size
    );

    if (productInCart.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.id === productId && item.size === size
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      setCart(
        cart.filter((item) => item.id !== productId || item.size !== size)
      );
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
              <select
                className="select-size"
                value={selectedSize}
                onChange={handleSizeChange}
              >
                <option value="">Seleziona una taglia</option>
                {product.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            )}
            <img
              src={product.image}
              alt={product.name}
              ref={(el) => (productImageRefs.current[product.id] = el)} // Associa il ref all'immagine corretta
              className={animatingProductId === product.id ? "fly-to-cart" : ""} // Anima solo l'immagine selezionata
            />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Button to toggle the cart visibility */}
      <div className="cart-icon-container">
        <button className="show-cart" onClick={() => setCartVisible(true)} ref={cartIconRef}>
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
                    {item.name} (Taglia: {item.size}) - $
                    {item.price.toFixed(2)} (x{item.quantity})
                  </span>
                  <button onClick={() => removeFromCart(item.id, item.size)}>
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
