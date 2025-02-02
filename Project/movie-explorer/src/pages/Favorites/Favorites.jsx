import React from "react";
import { useFavorites } from "../../context/FavoritesContext";
import MovieCard from "../../components/MovieCard/MovieCard";

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div>
      <h1>Your Favorite Movies</h1>
      {favorites.length === 0 ? (
        <p>No favorite movies added yet!</p>
      ) : (
        <div className="movie-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
