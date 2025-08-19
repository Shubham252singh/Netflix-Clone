import React from 'react'
import { MovieList } from './MovieList'
import { useSelector } from 'react-redux'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'

const SecondaryContainer = () => {
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const movies = useSelector(store=>store.movie) 
  return (
    <div className="bg-black w-screen">
      <div className="relative -top-28">
        <MovieList title ={"Now Playing"} movies ={movies?.nowPlayingMovies}/>
        <MovieList title ={"Popular"} movies ={movies?.popularMovies}/>
        <MovieList title ={"Top Rated"} movies ={movies?.topRatedMovies}/>
        <MovieList title ={"Up Coming"} movies ={movies?.upcomingMovies}/>
      </div> 
    </div>
  )
}

export default SecondaryContainer