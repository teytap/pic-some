import { Outlet, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../../Context";

const Layout = () => {
  const { cartItems } = useContext(Context);
  const cartClassName =
    cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line";
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <div className="logo-and-name">
                <img src="/public/foto.png" width="70" />
                <div className="picsome">PicSome</div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <i className={`${cartClassName} ri-fw ri-2x nav-cart`}></i>
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      <footer>PicSome</footer>
    </>
  );
};

export default Layout;
