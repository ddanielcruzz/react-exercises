import React from 'react'
import {BuyButton, SoldOutButton} from '../SoldOut/buyButton'



function Card(props) {
  
    return (
      <article className="card">
        <p className="card__category">{props.category}</p>
        <h1 className="card__title">{props.title}</h1>
        <p className="card__text">{props.description}</p>
        <p className="card__price">${props.price}</p>
        <section>
         {props.stock === 0 ? <SoldOutButton/> : <BuyButton/>}
       </section> 
 {/*          {props.isSoldOut ? <SoldOutButton /> : <BuyButton />}
  */}         {/* //si el art esta soldout pasale el componente soldoutbutton  */}
        
      </article>
    );
    } 

    export default Card