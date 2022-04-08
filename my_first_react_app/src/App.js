import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from '../src/search.svg';
import MovieCard from './MovieCard';
//1d2c609c
const API_URL = 'http://www.omdbapi.com?apikey=1d2c609c';

const movieSample = {
  Title: 'Amazing Spiderman Syndrome',
  Year: '2012',
  imdbID: 'tt2586634',
  Type: 'movie',
  Poster: 'N/A',
};
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  //creating a function. title -search by
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    //console.log(data.Search);
    setMovies(data.Search);
  };
  useEffect(() => {
    //calling a function which is going to fetch our movies. And providing any title of your own interest i.e here we are getting movies with name as Spiderman.
    // searchMovies('Spiderman');
    searchMovies();
  }, []);
  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt='search'
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className='container'>
          {/* <MovieCard movie1={movie} /> */}
          {movies.map((moviee) => (
            <MovieCard moviez={moviee} />
          ))}
        </div>
      ) : (
        <div classNem='empty'>
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
