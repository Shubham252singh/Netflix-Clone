import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constant';
import { addUpcomingMovies } from '../utils/movieSlice';

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector(store => store.movie?.upcomingMovies);
    const getNowPlayingMovie = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json?.results));
    }
    useEffect(()=>{
        if(!upcomingMovies) getNowPlayingMovie();
    },[])
}

export default useUpcomingMovies