import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestions from './GptMoviesSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div className=''>
    <div className="fixed -z-10">
        <img
          src={BG_URL}
          alt="background"
        />
      </div>
    <GptSearchBar/>
    <GptMoviesSuggestions/>
    </div>
  )
}

export default GptSearch