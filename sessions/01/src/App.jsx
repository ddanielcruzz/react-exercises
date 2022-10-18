import './App.css';



function App() {

  return (    
    <main className='container'>
		<article className="news">			
			<section className="news__info">
			  <p className="news__info-opacity-60">Trending in Mexico</p>
			  <p className="news__info-bold">AIFA</p>e
			  <p className="news__info-opacity-60">2.5k Tweets</p>
			</section>
			<img className="news__image" src="https://pbs.twimg.com/semantic_core_img/1579454614277181440/b-ZGeQ4X?format=jpg&name=360x360" alt="Mexico's new airport'" />
		  </article>
	</main>
  );
}

export default App;
