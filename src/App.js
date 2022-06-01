import {movieData } from './Data';
import React, { useState } from 'react';
import Filter from './Components/FilterRate/FilterRate.js'
import MovieList from './Components/MovieList/MovieList.js'
import AddMovie from './Components/AddMovie/AddMovie.js'
import { Route, Routes } from 'react-router-dom';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import './App.css';

function App() {
  const [movies,setMovies] = useState(movieData);
  const [search,setSearch] = useState('');
  const [rate,setRate] = useState(0);
  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie])
  }
  
  const searching = (s) => {
    setSearch(s)
  }
  const rating = (r) => {
    setRate(r)
  }
  return (
    <div>
            <h1 className='AppTitle'>Movie App</h1>
            <Routes>
      <Route path="/" element={<div>
      <div>
        <Filter searching={searching} rate={rating}/>
      </div>
      <div className='movie-list'> 
    <AddMovie handleAddMovie={handleAddMovie} />
      </div>
      <div>
      <MovieList movieData={movies.filter((elm) => (elm.title.toLowerCase().match(search.toLowerCase().trim())) && (elm.rate >= rate))}/>
      </div>
      </div>
      }/>
        <Route path="/movieDetails/:id" element={<MovieDetails movies={movies} />}/>
        </Routes>

    </div>
  );
}

export default App;
