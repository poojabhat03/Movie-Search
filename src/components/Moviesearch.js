

import React, { useState } from 'react';
import movies from './Moviedata'; 
import './Moviesearch.css';
const Moviesearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (e) => {
    e.preventDefault();
    const results = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };
  return (
    <div className="MovieSearchPage">
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          id="searchQuery"
          name="searchQuery"
          placeholder="Enter movie title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Display search results with movie posters and details */}
      <div className="search-results">
        {searchResults.map((movie, index) => (
          <div key={index} className="movie-card">
            <img src={movie.posterUrl} alt={`${movie.title} Poster`} />
            <h2>{movie.title}</h2>
            <img
              src={movie.img}
              alt={`${movie.title} Image`}
              className="small-image"
            />
            {/* Add more movie details here as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Moviesearch;
