import React from "react";
import { useDispatch } from "react-redux";
import { basketActions } from "../app/basketSlice";
import "./Product.css";

const Product = ({ id, title, image, price, rating }) => {
  const dispatch = useDispatch();

  const addToBasketHandler = () => {
    dispatch(
      basketActions.addToBasketHandler({ id, title, image, price, rating })
    );
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={() => addToBasketHandler()}>Add to Basket</button>
    </div>
  );
};

export default Product;
