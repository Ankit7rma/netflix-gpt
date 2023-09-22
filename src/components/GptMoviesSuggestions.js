import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList";

const GptMoviesSuggestions = () => {
  const {movieNames,movieResults} = useSelector(store=>store.gpt);
  return (
    <div className='m-4 p-4 bg-black bg-opacity-70 rounded-xl text-white'>
    <div>

    {movieNames?.map((movieName,index)=>
    <MovieList key={movieName} title={movieName} movies={movieResults[index]}/>
    )}
    </div>
    </div>
  )
}

export default GptMoviesSuggestions