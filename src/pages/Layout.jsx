import { Outlet, Link } from "react-router-dom";

const Layout = () => {
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
              <div className="nav-cart">Cart</div>
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      <footer>footer</footer>
    </>
  );
};

export default Layout;
