import React from "react";
import "./ProductCard.css";

export const ProductCard = (props) => {
  const { category, title, description, price } = props;
  const handleClickButton = (event) => {
    event.stopPropagation();
    alert("Añadiendo producto" + ' ' +  title );
  };
  const handleClickButtonDelete = (event) => {
    event.stopPropagation();
    alert("Removiendo un producto " + ' ' +  title + ' ' +
    "Lamentamos tu decisión podemos ofrecerte un precio prefencial de"
    + ' ' + price *.8)
  };
  return (
    <article className="card">
      <p className="card__category">{category}</p>
      <h1 className="card__title">{title}</h1>
      <p className="card__text">{description}</p>
      <p className="card__price">${price}</p>
      <section className="card__button-wrapper">
        <button className="card__button" onClick={(event) => {
          handleClickButton(event);
        }}>Add to Cart</button>
        <button className="card__button card__button--delete"onClick={(event) => {
          handleClickButtonDelete(event);
        }}>
          Delete from Cart
        </button>
      </section>
    </article>
  );
};
