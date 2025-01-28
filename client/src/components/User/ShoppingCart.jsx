import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ShoppingCart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Shopping Cart</h5>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="mb-3">
              <h6>{item.title}</h6>
              <p>${item.price}</p>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
        <button className="btn btn-success">Proceed to Payment</button>
      </div>
    </div>
  );
};

export default ShoppingCart;