import React from "react";
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";

import "./home.css";
export const HomePage = () => {
  const [keyword, setKeyword] = useState();
  let { movies } = useFetch(keyword);
  return (
    <div className="container">
      <h1 className="title">Search Movies</h1>
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="search-input"
        type="text"
      />
      <p className="error-msg">error</p>
      <div className="content">
        {movies.map((movie) => (
          <a
            href={`http://localhost:3000/movies/${movie?.imdbID}`}
            className="movie"
          >
            <img src={movie?.Poster} alt="" className="movie-img" />
            <div className="movie-detail">
              <h3 className="movie-name">{movie?.Title}</h3>
              <p className="movie-year">{movie?.Year}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
