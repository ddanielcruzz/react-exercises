import React, { useState } from "react";
import "./ProductCard.css";
import PropTypes from "prop-types";

// function myUseState(initalValie) {
//   return [value, updateValue];
// }
// let amountNotInState = 0;

export const ProductCard = (props) => {
  const {
    category,
    title,
    description,
    price,
    stock,
    showStock,
    setShowStock,
    updateSelectedItem,
  } = props;
  const handleClickButton = (event) => {
    alert("Click en botón");
  };

  const [amount, setAmount] = useState(0);

  return (
    <article className="card">
      <p className="card__category">{category}</p>
      <h1 className="card__title">{title}</h1>
      <p className="card__text">{description}</p>
      <p className="card__price">${price}</p>
      {showStock && <section>{stock}</section>}
      {showStock ? <section>{stock}</section> : null}
      <button onClick={() => setShowStock(true)}>Toggle stock</button>
      <section style={{ display: "flex", justifyContent: "space-between" }}>
        <section
          style={{ display: "flex", alignItems: "center", columnGap: 16 }}
        >
          <button
            className="card__button-quantity"
            onClick={() => {
              setAmount(amount - 1);
            }}
          >
            -
          </button>
          <p>{amount}</p>
          <button
            className="card__button-quantity"
            onClick={() => {
              setAmount(amount + 1);
            }}
          >
            +
          </button>
        </section>
        <button
          className="card__button"
          onClick={() => {
            updateSelectedItem(title);
          }}
        >
          Add to Cart
        </button>
      </section>
    </article>
  );
};

ProductCard.propTypes = {
  category: PropTypes.string.isRequired,
};
