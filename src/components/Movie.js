import React from "react";
import { Link } from "react-router-dom";
const IMG_API = "https://image.tmdb.org/t/p/w500";
function Movie({ title, poster_path, id, vote_average }) {
  console.log(IMG_API + poster_path);
  return (
    <Link to={`/movie/${id}`}>
      <div className="relative flex text-xl w-64 p-2 transform hover:scale-110 ">
        <img
          className="w-full object-cover"
          src={IMG_API + poster_path}
          alt={title}
        />
        <div className="p-5 bg-blue-900 bg-opacity-60 w-full absolute flex justify-between text-xl text-white font-semibold bottom-0">
          <h3>{title}</h3>
          <span className="font-bold">{vote_average}</span>
        </div>
      </div>
    </Link>
  );
}

export default Movie;
