import React, { useContext, useState } from "react";
import { Context } from "../../Context";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cartItems, emptyCart } = useContext(Context);
  const [isPlaced, setIsPlaced] = useState(false);
  const [buttonText, setButtonText] = useState("Place Order");
  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));
  const totalCost = cartItemElements.length * 5.99;
  function placeOrder() {
    if (cartItemElements.length) {
      setButtonText("Ordering...");
      setTimeout(() => {
        setIsPlaced(true);
        console.log("order is placed");
        setButtonText("Place Order");
        emptyCart();
      }, 3000);
    }
  }
  return (
    <main className="cart-page">
      <h1>Check Out</h1>

      <div>
        {cartItemElements.length ? (
          cartItemElements
        ) : (
          <h3>You have no items in your cart</h3>
        )}
      </div>
      <p className="total-cost">
        Total:
        {totalCost.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>

      <div className="order-button">
        <button onClick={placeOrder}>{buttonText}</button>
      </div>
    </main>
  );
}
