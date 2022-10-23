import './buyButton.css'
import React from 'react'

function BuyButton () {
  return <button className='card__button'>Add to Cart</button>
}

function SoldOutButton () {
  return (
    <button disabled className='card__button card__button--soldOut'>
      Sold out
    </button>
  )
}

export {
  BuyButton,
  SoldOutButton
}
