import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import API_CONFIG from "../../config";

const API_KEY = API_CONFIG.API_KEY;

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie:", error);
        setMovie(null);
      }
      setLoading(false);
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  if (!movie) {
    return <p>Movie not found!</p>;
  }

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <div className="movie-details-content">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-description">
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Release Date: {movie.release_date}</h4>
          <h4>Rating: {movie.vote_average} / 10</h4>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
