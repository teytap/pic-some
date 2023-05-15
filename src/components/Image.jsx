import React, { useState, useContext } from "react";
import { Context } from "../../Context";
import PropTypes from "prop-types";

function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite, addToCart, cartItems, removeFromCart } =
    useContext(Context);
  //--- hovered images and showing icons and changes---
  const heartIcon = hovered && (
    <i
      className="ri-heart-line favorite"
      onClick={() => toggleFavorite(img.id)}
    ></i>
  );
  const favoritedIcon = img.isFavorite && (
    <i
      className="ri-heart-fill favorite"
      onClick={() => toggleFavorite(img.id)}
    ></i>
  );

  const addedIcon = cartItems.some((item) => item.id === img.id) && (
    <i
      className="ri-shopping-cart-fill cart"
      onClick={() => addToCart(img.id)}
    ></i>
  );
  function cartIcon() {
    const alreadyInCart = cartItems.some((item) => item.id === img.id);
    if (alreadyInCart) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeFromCart(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addToCart(img)}
        ></i>
      );
    }
  }

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} className="image-grid" />

      {heartIcon}
      {favoritedIcon}
      {cartIcon()}
    </div>
  );
}

//explain your object in types for other people or errors
Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};
export default Image;
