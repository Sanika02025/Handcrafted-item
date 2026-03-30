import "./Cart.css";
function Cart({ cart, addToCart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cart">
      <h2>🛒 Your Cart</h2>
      {cart.length === 0 ? <p>Cart is empty</p> : (
        cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={item.images[0]} alt={item.name} className="cart-img" />
            <div className="cart-info">
              <p><strong>{item.name}</strong></p>
              <p>₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}</p>
            </div>
            <div className="cart-controls">
                <button onClick={() => removeFromCart(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => addToCart(item)}>+</button>
            </div>
          </div>
        ))
      )}
      <hr />
      <h3>Grand Total: ₹{total}</h3>
    </div>
  );
}


export default Cart;