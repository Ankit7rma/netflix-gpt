import {API_OPTIONS} from "../utils/constants"
import React, { useEffect } from 'react'

const VideoBackground = ({movieId}) => {
  //API call to get trailer
  const getMovieVideos = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/1008042/videos? ', API_OPTIONS)
    const json = await data.json();
    console.log(json) 
    const trailer = json.results.filter(video =>video.type ==="Trailer")
    console.log(trailer)  

  }
  useEffect(()=>{
    getMovieVideos();
  },[])

  return (
    <div>VideoBackground</div>
  )
}

export default VideoBackground