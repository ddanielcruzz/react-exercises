import React from 'react'



/* function BuyButton() {
    return <button className="card__button">Add to Cart</button>;
  }
  
  function SoldOutButton() {
    return (
      <button disabled className="card__button card__button--soldOut">
        Sold out
      </button>
    );
  }
 */
function Card(props) {
  
    return (
      <article className="card">
        <p className="card__category">{props.category}</p>
        <h1 className="card__title">{props.title}</h1>
        <p className="card__text">{props.description}</p>
        <p className="card__price">${props.price}</p>
        {/* <section>
         {props.stock === 0 ? < SoldOutButton /> : <BuyButton />}
       </section> */}
 {/*          {props.isSoldOut ? <SoldOutButton /> : <BuyButton />}
  */}         {/* //si el art esta soldout pasale el componente soldoutbutton  */}
        
      </article>
    );
    } 

    export default Card