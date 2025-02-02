import React, { useState } from "react";
import axios from "axios";
import MovieCard from "../../components/MovieCard/MovieCard";
import API_CONFIG from "../../config";

const Search = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const response = await axios.get(
      `${API_CONFIG.BASE_URL}/search/movie`,
      {
        params: {
          api_key: API_CONFIG.API_KEY,
          query: query,
          language: API_CONFIG.LANGUAGE,
          page: 1,
        },
      }
    );
    setMovies(response.data.results);
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter movie name"
        />
        <button type="submit">Search</button>
      </form>

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Search;
