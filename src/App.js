import React from "react";
// 1. Corrected Redux Imports
import { useSelector, useDispatch } from "react-redux";
// 2. Corrected Router Imports
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// 3. Import your Components and Pages
import Header from "./components/Header";
import Home from "./pages/Home";
import CartPage from "./pages/Cart";

function App() {
  const cart = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  // Calculate total count of items (sum of all quantities)
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <BrowserRouter>
      <Header />

      <h2 style={{ textAlign: "center" }}>Cart Items: {totalItems}</h2>

      <nav style={{ textAlign: "center", marginBottom: "20px" }}>
        <Link to="/">Home</Link> | <Link to="/cart">Cart</Link>
      </nav>

      <Routes>
        <Route 
          path="/" 
          element={<Home addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />} 
        />
        <Route 
          path="/cart" 
          element={<CartPage cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

// 4. Ensure this line exists!
export default App;