import React from "react";
import { SoldOutButton } from "../SoldOutButton/SoldOutButton";
import './ProductCard.css'

export const ProductCard = ({category, title, description, price, stock }) => {
  return (
    <article className="card">
      <p className="card__category">{category}</p>
      <h1 className="card__title">{title} </h1>
      <p className="card__text">
        {description}
      </p>
      <p className="card__price">${price} </p>
      {
        stock <= 0 ? <SoldOutButton classN={'card__soldout'} text={'Sold Out'} /> : <SoldOutButton classN={'card__button'} text={'Add to Cart'} />
      }
    </article>
  );
};
