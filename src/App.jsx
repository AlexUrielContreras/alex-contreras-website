import Header from './conponents/Header';
import Landing from './pages/Landing';

import { useState } from 'react';

function App() {
  const [ currentTab, setCurrentTab ] = useState('Home');

  function displayPage(tab) {
    switch(tab) {
      case 'Skills': 
        // skill conponent
        break;
      case 'Projects': 
        // project component
        break;
      case 'Contacts':
        // contact me project
        break;
      default: 
        return <Landing />
    }
  };

  return (
    <div className="App">
      <header className='header'>
        <Header setCurrentTab={setCurrentTab} currentTab={currentTab}/>
      </header>

      <section className='content-container'>
        {displayPage(currentTab)}
      </section>
    </div>
  )
}

export default App
