import React from 'react'
import './ProductCard.css'

export const ProductCard = (props) => {
  const { category, title, description, price } = props
  const handleClickButton = (event) => {
    event.stopPropagation()
    alert('Click en botón')
  }

  return (
    <article className='card'>
      <p className='card__category'>{category}</p>
      <h1 className='card__title'>{title}</h1>
      <p className='card__text'>{description}</p>
      <p className='card__price'>${price}</p>
      <button
        className='card__button'
        onClick={(event) => {
          handleClickButton(event)
        }}
      >
        Add to Cart
      </button>
    </article>
  )
}
