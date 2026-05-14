import React from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const movies = [
    {
      id: 1,
      title: "Inception",
      release_date: "2010-07-16",
      url: "https://image.tmdb.org/t/p/original/8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg",
    },
    {
      id: 2,
      title: "The Dark Knight",
      release_date: "2008-07-18",
      url: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    },
    {
      id: 3,
      title: "Interstellar",
      release_date: "2014-11-07",
      url: "https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    },
  ];
  return (
    <div className="home">
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id}></MovieCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
