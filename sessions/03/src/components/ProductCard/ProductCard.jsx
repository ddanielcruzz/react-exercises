import React from 'react'
import './ProductCard.css'

export const ProductCard = (props) => {
  const { category, title, description, price, stock } = props
  // const localePrice = new Intl({})(price, 'en-US')
  const handleClickButton = (event) => {
    event.stopPropagation()
    alert('Click en botón')
  }
  // const handleClick = () => {
  //   stock > 0
  //     ? alert("Le diste click al producto " + title)
  //     : alert("Item sold out " + title);
  // };

  // const handleClickArticle = () => {
  //   alert("Click en article");
  // };
  const handleSubmit = (event) => {
    // event.preventDefault();
    alert('Click en formulario')
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
      {/* <button
        className="card__button"
        onClick={() => {
          alert("Le diste click");
        }}
      >
        Add to Cart
      </button> */}
      <form action='' onSubmit={(event) => handleSubmit(event)}>
        <input type='text' placeholder='Comenta' />
        <button type='submit'>Añadir comentairo</button>
      </form>
    </article>
  )
}

// button.addEventListner('click', () => {})
// <button onclick="addToCart()">Button</button>
