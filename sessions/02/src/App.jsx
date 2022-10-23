import logo from './logo.svg'
import './App.scss'
import Button from 'react-bootstrap/Button'

function BuyButton () {
  return <button className='card__button'>Add to Cart</button>
}

function SoldOutButton () {
  return (
    <button disabled className='card__button card__button--sold-out'>
      Sold Out
    </button>
  )
}
function SaleButton () {
  return (
    <button disabled className='card__button'>
      On Sale
    </button>
  )
}

function Card (props) {
  function getButton (type) {
    if (type === 'sold-out') {
      return <SoldOutButton />
    }

    if (type === 'on-sale') {
      return <SaleButton />
    }

    return <BuyButton />
  }

  return (
    <article className='card'>
      <p className='card__category'>{props.category}</p>
      <h1 className='card__title'>{props.title}</h1>
      <p className='card__text'>{props.description}</p>
      <p className='card__price'>${props.price}</p>
      <Button variant='success'>Primary</Button>
      {/* <section>{props.isSoldOut ? <SoldOutButton /> : <BuyButton />}</section> */}
    </article>
  )
}

function Flex (props) {
  return (
    <section
      style={{
        display: 'flex',

        gap: '16px',
        color: 'red'
      }}
    >
      <ul>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </ul>
      <section>{props.children}</section>
      <ul>
        <li>Listings</li>
        <li>Listings</li>
        <li>Listings</li>
      </ul>
    </section>
  )
}
const response = [
  {
    category: 'perfume',
    title: 'Rafa Essence Luxury',
    description: 'Lorem ipsum',
    price: '150',
    isSoldOut: true,
    id: 'ajasjkdfalñsñkjlkoooooodñjlkjlkjlkj'
  },
  {
    category: 'perfume',
    title: 'Rafa Essence Luxury',
    description: 'Lorem ipsum',
    price: '150',
    isSoldOut: true,
    id: 'ajasjkdfalñsñkjlkooooood'
  },
  {
    category: 'perfume',
    title: 'Rafa Essence Luxury',
    description: 'Lorem ipsum',
    price: '150',
    isSoldOut: true,
    id: 'ajd'
  },
  {
    category: 'perfume',
    title: 'Rafa Essence Luxury',
    description: 'Lorem ipsum',
    price: '150',
    isSoldOut: true,
    id: 'ajlskfjalñssdfaasd'
  },
  {
    category: 'perfume',
    title: 'Rafa Essence Luxury',
    description: 'Lorem ipsum',
    price: '150',
    isSoldOut: true,
    id: 'ajlskfjalñsd'
  },
  {
    category: 'perfume',
    title: 'Rafa Essence Luxury',
    description: 'Lorem ipsum',
    price: '150',
    isSoldOut: true,
    id: 'ajlskfjalñ'
  }
]

function App () {
  return (
    <main>
      <Flex>
        {response.map((product) => (
          <Card
            key={product.id}
            category={product.category}
            title={product.title}
            description={product.description}
            price={product.price}
            isSoldOut={product.isSoldOut}
          />
        ))}
      </Flex>
    </main>
  )
}

export default App
