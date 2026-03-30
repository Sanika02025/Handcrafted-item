import { useState } from "react";
import "./ProductCard.css";

function ProductCard({ product, addToCart, removeFromCart, cart }) {
  const [imgIndex, setImgIndex] = useState(0);

  // Find if this product is already in the cart to get its quantity
  const cartItem = cart.find((item) => item.name === product.name);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="card">
      <h3>{product.name}</h3>
      <img src={product.images[imgIndex]} alt={product.name} />
      <p>₹{product.price}</p>

      <button onClick={() => setImgIndex((imgIndex + 1) % product.images.length)}>
        Next Image
      </button>

      <div className="cart-actions" style={{ marginTop: "10px" }}>
        {quantity > 0 ? (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "15px" }}>
            <button onClick={() => removeFromCart(product)} style={{ padding: "5px 12px" }}>-</button>
            <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>{quantity}</span>
            <button onClick={() => addToCart(product)} style={{ padding: "5px 12px" }}>+</button>
          </div>
        ) : (
          <button onClick={() => addToCart(product)} className="add-btn">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;