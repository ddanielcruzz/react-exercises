import React from 'react'
import {BuyButton, SoldOutButton} from '../SoldOut/buyButton'



function Card(props) {
    const { id, category, title, description, price, stock} = props; /* destructuring */

    const handleClick = (event) => {
        event.stopPropagation();
        alert('le diste click al producto '+ title)
    }
    return (
      <article className="card">
        <p className="card__category">{category}</p>
        <h1 className="card__title">{title}</h1>
        <p className="card__text">{description}</p>
        <p className="card__price">${price}</p>
        <button className='card__button' onClick={() => handleClick()}> click 
        </button>
        <section>
         {stock === 0 ? <SoldOutButton/> : <BuyButton/>}
       </section> 
      </article>
    );
    } 

    export default Card