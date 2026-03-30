import "./Product.css";
import { useState } from "react";

function Product({ name, price, images, addToCart }) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="product-card">
      
      <img src={mainImage} alt={name} className="product-img" />

      <div>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="thumb"
            onClick={() => setMainImage(img)}
            style={{ width: "40px", margin: "5px", cursor: "pointer" }}
          />
        ))}
      </div>

      <h3 className="product-title">{name}</h3>
      <p className="product-price">₹{price}</p>

      <button
        className="product-btn"
        onClick={() => addToCart({ name, price })}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;