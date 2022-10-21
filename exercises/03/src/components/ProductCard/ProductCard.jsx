import React from "react";
import "./ProductCard.css";

export const ProductCard = (props) => {
  const { category, title, description, price, deleteProduct, addToCart } =
    props;

  return (
    <article className="card">
      <p className="card__category">{category}</p>
      <h1 className="card__title">{title}</h1>
      <p className="card__text">{description}</p>
      <p className="card__price">${price}</p>
      <section className="card__button-wrapper">
        <button className="card__button" onClick={() => addToCart(title)}>
          Add to Cart
        </button>
        <button
          className="card__button card__button--delete"
          onClick={() => deleteProduct(title, price)}
        >
          Delete from Cart
        </button>
      </section>
    </article>
  );
};
