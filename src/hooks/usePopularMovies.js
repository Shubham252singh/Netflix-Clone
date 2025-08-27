import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constant';
import { addPopularMovies } from '../utils/movieSlice';

const usePopularMovies = () => {
   const dispatch = useDispatch();
   const popularMovies = useSelector(store => store.movie?.popularMovies);
   const getpopularMovie = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json?.results));
    }
   useEffect(() => {
    if(!popularMovies) getpopularMovie();
   },[])
   
}

export default usePopularMovies;