import './App.css';

function App() {
  // Put your JSX here
  return (
    <article className="card">
      <p className="card__category">perfume</p>
      <h1 className="card__title">Gabrielle Essence Eau De Parfum</h1>
      <p className="card__text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
        aspernatur autem nobis quidem at sed, incidunt necessitatibus aliquid.
        Eligendi ipsam obcaecati dolores vel quasi eum laborum magnam libero.
        Obcaecati, consequuntur.
      </p>
      <p className="card__price">$149.99</p>
      <button className="card__button">Add to Cart</button>
    </article>
  );
}

export default App;
