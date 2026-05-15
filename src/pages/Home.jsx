import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadPopularMovies = async () => {
      setLoading(true);
      try {
        const popularMovies = await getPopularMovies();
        setMovieList(popularMovies);
      } catch (e) {
        setError("Failed to load movies");
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovieList(searchResults);
      setError(null);
    } catch (e) {
      setError("Failed to search");
      console.log(e);
    } finally {
      setLoading(false);
    }

    setSearchQuery("");
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Seach for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movieList.map(
            (movie) =>
              movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard movie={movie} key={movie.id}></MovieCard>
              ),
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
