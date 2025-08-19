import React from 'react'
import { Poster_Img_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-44 flex-shrink-0 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out">
        <img alt = "Movie Poster" className = "rounded-lg"src ={Poster_Img_URL+posterPath}></img>
    </div>
  )
}

export default MovieCard