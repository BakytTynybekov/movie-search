import { useEffect, useState } from "react";

const API_ENDPOINT = "http://www.omdbapi.com/?apikey=93638ea3";

export const useFetch = (keyword = "spider man") => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (keyword) => {
    let response = await fetch(`${API_ENDPOINT}&s=${keyword}`);
    let data = await response.json();
    console.log(data);
    if (data?.Response === "True") {
      setMovies(data?.Search || data);
    }
  };

  useEffect(() => {
    if (keyword !== "") {
      fetchMovies(keyword);
    }
  }, [keyword]);

  return { movies };
};
