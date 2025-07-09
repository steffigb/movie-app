/* import Card from './components/Card' */
import { useEffect, useState } from 'react';
import Search from './components/Search'
import './index.css'

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`
  }
}


const App = () => {

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [movieList, setMovieList] = useState<Array>([]);

  const [isLaoding, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchMovies = async () => {
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);

      if(!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      
      const data = await response.json();

      if(data.Response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setMovieList([]);
        return;
      }

      setMovieList(data.results || []);

    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage('Error fetching movies. Please try again later.');
    }

  }

  useEffect(() => {
    fetchMovies();
  }, [])

  return (
    <main>
      <div className= "pattern"/>

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner"/>
          <h1>Find <span className="text-gradient">Movies</span></h1>

          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        <section className="all-movies">

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        </section>

        
  

      </div>
    </main>

  )
}

export default App
