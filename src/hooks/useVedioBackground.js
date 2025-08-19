import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { addBackgroundMoviekey } from '../utils/movieSlice';

const useVedioBackground = (movieId) => {
    const dispatch = useDispatch();
    const movieVedio = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);       
        const json = await data.json();
        const filter_trailer = json.results.filter((video) => video?.type === "Trailer")
        const trailer = filter_trailer.length ? filter_trailer[0] : json.results[0];
        dispatch(addBackgroundMoviekey(trailer.key));
    }
    useEffect(() => {
        movieVedio();
    }, [])
}

export default useVedioBackground;