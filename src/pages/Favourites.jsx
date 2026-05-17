import React from "react";
import "../css/Favorites.css";
import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/MovieContext";

const Favourites = () => {
  const { fav } = useMovieContext();

  if (fav.length > 0) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {fav.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here.</p>
    </div>
  );
};

export default Favourites;
