/* import Card from './components/Card' */
import { useState } from 'react';
import Search from './components/Search'
import './index.css'


const App = () => {

  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <main>
      <div className= "pattern"/>

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner"/>
          <h1>Find <span className="text-gradient">Movies</span></h1>
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <h1 className="text-white">{searchTerm}</h1>

      </div>
    </main>

  )
}

export default App
