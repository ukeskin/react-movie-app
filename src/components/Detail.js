import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  let id = useParams();
  const DETAIL_API = `https://api.themoviedb.org/3/movie/${id.id}?api_key=2f02a2889c128da9f127ce60d90b0cc6&language=en-US`;
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(DETAIL_API)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data);
      });
  }, [id]);
  return (
    <div className="container  m-auto h-full bg-blue-900">
      <div className="flex  p-2">
        <img
          className="h-96 w-80"
          src={"https://image.tmdb.org/t/p/w500" + details.poster_path}
        />
        <div className="flex flex-col justify-between">
          <h1 className="text-2xl text-white font-bold">
            {details.title} -{" "}
            <span className="font-thin">{details.release_date}</span>
          </h1>

          <p className="text-2xl text-white">{details.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
