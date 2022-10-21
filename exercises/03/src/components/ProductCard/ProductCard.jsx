import React from "react";
import "./ProductCard.css";

export const ProductCard = (props) => {
  const { category, title, description, price } = props;
  let discount = price*0.8
  const discountPrice = discount.toFixed(0)


  return (
    <article className="card">
      <p className="card__category">{category}</p>
      <h1 className="card__title">{title}</h1>
      <p className="card__text">{description}</p>
      <p className="card__price">${price}</p>
      <section className="card__button-wrapper">
        <button className="card__button" onClick={() => alert (`Añadiendo producto ${title} al carrito `)}>Add to Cart</button>
        <button className="card__button card__button--delete" onClick={() => alert(`Removiendo ${title} del carrito.
  Lamentamos tu decisión podemos ofrecerte un precio prefencial de ${discountPrice}`)}>
          Delete from Cart
        </button>
      </section>
    </article>
  );
};


/* export const ProductCard = (props) => {
  const { category, title, description, price } = props;
  let discount = price*0.8
  const discountPrice = discount.toFixed(0)

  const handleClickAddCart = () => {
    alert(`Añadiendo producto ${title} al carrito `)
}

const handleClickDeleteFromCart = () => {
  alert(`Removiendo ${title} del carrito.
  Lamentamos tu decisión podemos ofrecerte un precio prefencial de ${discountPrice}`)
}

  return (
    <article className="card">
      <p className="card__category">{category}</p>
      <h1 className="card__title">{title}</h1>
      <p className="card__text">{description}</p>
      <p className="card__price">${price}</p>
      <section className="card__button-wrapper">
        <button className="card__button" onClick={() => handleClickAddCart()}>Add to Cart</button>
        <button className="card__button card__button--delete" onClick={() => handleClickDeleteFromCart() }>
          Delete from Cart
        </button>
      </section>
    </article>
  );
};
 */