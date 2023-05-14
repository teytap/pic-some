import React, { useContext } from "react";
import { Context } from "../../Context";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cartItems } = useContext(Context);

  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));
  return (
    <main className="cart-page">
      <h1>Cart</h1>
      <div>{cartItemElements}</div>
      <div className="order-button">
        <button>Place Order</button>
      </div>
    </main>
  );
}
