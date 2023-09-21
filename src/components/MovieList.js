import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies)
  return (
    <div className="px-6 py-4 bg-transparent">
    <h1 className="text-3xl text-white font-semibold py-2">{title}</h1>
      <div className="flex overflow-x-scroll">
        
        <div className="flex ">
       { movies?.map(movie=>(<p><MovieCard key={movie.id}  posterPath={movie.poster_path}/></p>))}  
       
        </div>
      </div>
    </div>
  );
};

export default MovieList;
