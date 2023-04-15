import Header from './conponents/Header';
import Landing from './pages/Landing';

function App() {

  return (
    <div className="App">
      <header className='header'>
        <Header />
      </header>

      <section>
        <Landing />
      </section>
    </div>
  )
}

export default App
