import React from "react";
import "./ProductCard.css";

export const ProductCard = (props) => {
  const { category, title, description, price } = props;
  return (
    <article className="card">
      <p className="card__category">{category}</p>
      <h1 className="card__title">{title}</h1>
      <p className="card__text">{description}</p>
      <p className="card__price">${price}</p>
      <button className="card__button">Add to Cart</button>
    </article>
  );
};
