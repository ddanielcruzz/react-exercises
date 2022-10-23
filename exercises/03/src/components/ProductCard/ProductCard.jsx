import React, { useState } from 'react'
import './ProductCard.css'

/*  export const ProductCard = (props) => {
  const { category, title, description, price } = props;
  const discountPrice = price * 0.8

  const handleClickAddCart = () => {
    alert(`Añadiendo producto ${title} al carrito `)
}

const handleClickDeleteFromCart = () => {
  alert(`Removiendo ${title} del carrito.
  Lamentamos tu decisión podemos ofrecerte un precio prefencial de ${discountPrice.toFixed(0) }`)
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

/* //PUNTOS EXTRA by cin
export const ProductCard = (props) => {
  const { category, title, description, price } = props;
  let discount = price * 0.8;
  const discountPrice = discount.toFixed(0);

  return (
    <article className="card">
      <p className="card__category">{category}</p>
      <h1 className="card__title">{title}</h1>
      <p className="card__text">{description}</p>
      <p className="card__price">${price}</p>
      <section className="card__button-wrapper">
        <button className="card__button" onClick={() => alert(`Añadiendo producto ${title} al carrito `)}>
          Add to Cart
        </button>
        <button
          className="card__button card__button--delete"
          onClick={() =>
            alert(`Removiendo ${title} del carrito. Lamentamos tu decisión podemos ofrecerte un precio prefencial de ${discountPrice}`)}>
          Delete from Cart
        </button>
      </section>
    </article>
  );
}; */

// PUNTOS EXTRA by Dani and continue with State!
// para que react sepa que hay un cambio tenemos  que utilizar 'estados' -> avisarle a react que cambiamos algo
// función para actualizar el componente y lo renderiza actualizado ->useState

/* function myUSeState(initialValue, newValue){
  return [initialValue, updateInitialValue(initialValue, newValue)] //me regresa el valor mas recinite( inicial) y otra función para que yo pueda actualizar ese value
}

function updateInitialValue(initialValue) {

} */

export const ProductCard = (props) => { // destructuring
  const {
    category,
    title,
    description,
    price,
    stock,
    handleClickAddCart,
    handleClickDeleteFromCart,
    showStock,
    updateSelectedItem
  } = props

  const discountPrice = (price * 0.8).toFixed(0)

  useState(0) // valor en el va a inicializar nuestro estado -> te regresa un arreglo con dos valoroes

  /*  const amount = state[0] //1er valor que me regresa el arreglo
  const updateAmount = state [1]//2do valor que me regresa el arreglo */

  const [amount, setAmount] = useState(0) // destructuring del arreglo -> amount=0(valor inicial)
  const [shouldShowStock, setShouldShowStock] = useState(false) //el stock no se debe de mostrar si el cliente no da click es x eso que inicia en false


  const amountNotInState = 0 /* no es un prop ya que depende del usuario -> cuantos productos quieren agregar al carrito */

  const toggleStock = () => {  //función que settea el estado
    setShouldShowStock(!shouldShowStock) //cuando es false si lo estoy negando s e va a volver true 
  } //valor de la negacion = true, 

  return (
    <article className='card'>
      <p className='card__category'>{category}</p>
      <h1 className='card__title'>{title}</h1>
      <p className='card__text'>{description}</p>
      <p className='card__price'>${price}</p>

      {showStock && <section>{stock}</section>}
      {shouldShowStock && <section>{stock}</section>} {/* renderizando condicionalmente, si shouldstock es verdaddero muestra la section de stock*/}
      <button onClick={() => {
        /* setShouldShowStock(true) }}>Show stock</button> */
        toggleStock()}}> Toogle stock  {/* cambiando el estado de react a true */}
        </button>
      <section style={{ display: 'flex', alignItems: 'center' }}>

        <button
          className='card__button--remove'
          onClick={() => {
            setAmount(amount - 1)// setAmount= es la función q nos dice como va a cambiar cuando el des click
          }}
        >-
        </button>

        <p>{amount}</p>

        <button
          disabled = {amount >= 3} //Boton se deshabilita cuando sea mayor a 3
          className='card__button--add'
          onClick={() => {
            setAmount(amount + 1) // cuando le des click se le suma 1 a amount
          }}
        >+
        </button>
      </section>

      <section className='card__button-wrapper'>
        <button
          className='card__button'
          onClick={() => {
            return updateSelectedItem(title)
          }} // de esta forma es más explícito
        >
          Add to Cart
        </button>
        <button
          className='card__button card__button--delete'
          onClick={() => {
            return handleClickDeleteFromCart(discountPrice)
          }}
        >
          Delete from Cart
        </button>
      </section>
    </article>
  )
}
