import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies)
  return (
    <div className=' bg-black pl-12'>
    <div className='mt-0 md:-mt-32 pl-0 md:pl-12 relative z-10'>

    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
    {/* <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/> */}
    <MovieList title={"Popular"} movies={movies.popularMovies}/>
    {/* <MovieList title={"Upcomine MOvies"} movies={movies.nowPlayingMovies}/> */}
    <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
    </div>
        </div>
  )
}

export default SecondaryContainer