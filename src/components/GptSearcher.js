import {useRef,useState} from 'react'
import ai from '../utils/googleGenAI';
import { useDispatch, useSelector } from 'react-redux';
import { addRecommendedMovies, addRecommendedMoviesDtls } from '../utils/genAISlice';
import { API_OPTIONS } from '../utils/constant';
import { MovieList } from './MovieList';
import Loader from './Loader';

const GptSearcher = () => {
    const dispatch = useDispatch();
    const [loaderVal,setLoaderVal]=useState(false);
    const searchInput = useRef(null);
    const suggestedMovie = useSelector(state=>state.genAImovies.recommendedMoviesDtls);
    const getGenAIMovies = async (movie_name) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie_name + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        const moviesList = json?.results.filter((element) => element.title === movie_name);
        return moviesList;
    }

    const handleGPTSearch = async() => {
        setLoaderVal(true);
        const srch_filter = 'You are a movie recommender. Need to recommed only 8 movies names of the genere '+ searchInput.current.value +'.The 8 output movie names should be comma seperated'; 
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: srch_filter,
        });
        const aiMovies = (response?.candidates[0]?.content?.parts[0].text).split(",").map((element)=>element.trim());
        if(!aiMovies) {setLoaderVal(false); return};
        const promiseList= aiMovies.map((movie_name)=>getGenAIMovies(movie_name));
        const movieDtls = (await Promise.all(promiseList)).reduce((acc, val) => acc.concat(val), []);
        //if(movieDtls) {setLoaderVal(false); return};
        dispatch(addRecommendedMoviesDtls(movieDtls));
        setLoaderVal(false);
    }

  return (
    <>
        <div className="flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12 p-4" onSubmit={(e) => { e.preventDefault() }}>
                <input className="p-2 col-span-9 rounded-lg" placeholder="Type the genre. We cue the magic😍" ref={searchInput}></input>
                <button className="ml-2 p-2 col-span-3 bg-red-700 text-white rounded-lg" onClick={handleGPTSearch}>Search </button>
            </form>
        </div>
          {
              // movie and loader false
              loaderVal && <Loader />
              }
          {
              suggestedMovie && (<div className="bg-black bg-opacity-70 mt-5 py-4 h-screen">
                  <MovieList title={"AI Suggested Movies"} movies={suggestedMovie} />
              </div>)
          }
    </>

  )
}

export default GptSearcher