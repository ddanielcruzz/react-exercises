import React from "react";

function ProductCard(props) { // Usar destructuring
  return(
  <article className="card">
    <p className="card__category">{props.category}</p>
    <h1 className="card__title">{props.title}</h1>
    <p className="card__text">{props.text}</p>
    <p className="card__price">{props.price}</p>
    <button className="card__button">Add to Cart</button>
  </article>
  );
}
export default  ProductCard;
