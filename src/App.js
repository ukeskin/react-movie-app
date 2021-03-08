import React, { useState, useEffect } from "react";
import Header from "../src/components/Header";
import Movie from "../src/components/Movie";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?api_key=2f02a2889c128da9f127ce60d90b0cc6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=2f02a2889c128da9f127ce60d90b0cc6&query=";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  });

  return (
    <div className="container  m-auto h-full bg-blue-900">
      <Header />
      <div class="flex flex-wrap">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </div>
  );
}

export default App;
