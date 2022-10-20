import React from 'react'

export const SoldOutButton = ({text, classN}) => {
  return (

    //<button className="card__button">Add to Cart</button>
    <button className={`${classN}`}>{text}</button>
  )
}
