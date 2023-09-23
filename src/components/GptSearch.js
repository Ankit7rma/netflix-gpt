import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestions from './GptMoviesSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
<div className="fixed -z-10">
        <img className="h-screen object-cover md:w-screen md:h-auto"
          src={BG_URL}
          alt="background"
        />
      </div>
    <div className=''>
    
    <GptSearchBar/>
    <GptMoviesSuggestions/>
    </div>
    </>
  )
}

export default GptSearch