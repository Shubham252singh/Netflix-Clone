import {useRef,useState} from 'react'
import ai from '../utils/googleGenAI';
import { useDispatch, useSelector } from 'react-redux';
import { addRecommendedMoviesDtls, addRecommendedSeries } from '../utils/genAISlice';
import { API_OPTIONS } from '../utils/constant';
import { MovieList } from './MovieList';
import Loader from './Loader';
import { Type } from '@google/genai';

const GptSearcher = () => {
    const dispatch = useDispatch();
    const [loaderVal,setLoaderVal]=useState(false);
    const searchInput = useRef(null);
    const suggestedMovie = useSelector(state=>state.genAImovies.recommendedMoviesDtls);
    const suggestedAISeries = useSelector(state=>state.genAImovies.recommendedSeries);
    const getGenAIMovies = async (movie_name) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie_name + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        const moviesList = json?.results.filter((element) => element.title === movie_name);
        return moviesList;
    }
    const getGenAITVSeries = async (series_name) => {
        const data = await fetch('https://api.themoviedb.org/3/search/tv?query=' + series_name + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        const seriesList = json?.results.filter((element) => element.name === series_name);
        return seriesList;
    }

    const handleGPTSearch = async() => {
        setLoaderVal(true);
        const srch_filter = `You are a movie and web series recommender. Recommend at most 8 movies and 8 web series of the genre "${searchInput.current.value}". The recommended movie names must be present in the movieList array, and the web series names must be present in the tvseriesList array.`; 
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: srch_filter, 
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            movieList: {
                                type: Type.ARRAY,
                                items: {
                                    type: Type.STRING,
                                },
                            },
                            tvseriesList: {
                                type: Type.ARRAY,
                                items: {
                                    type: Type.STRING,
                                },
                            },
                        },
                        propertyOrdering: ["movieList", "tvseriesList"],
                    },
                },
            },
        });
        const {movieList : aiMovies, tvseriesList } = JSON.parse(response?.candidates[0]?.content?.parts[0].text)[0];
        if(!aiMovies && !tvseriesList) {setLoaderVal(false); return};
        const promiseListMovie= aiMovies.map((movie_name)=>getGenAIMovies(movie_name));
        const movieDtls = (await Promise.all(promiseListMovie)).reduce((acc, val) => acc.concat(val), []);
        const promiseListSeries= tvseriesList.map((series_name)=>getGenAITVSeries(series_name));
        const seriesDtls = (await Promise.all(promiseListSeries)).reduce((acc, val) => acc.concat(val), []);
        //if(movieDtls) {setLoaderVal(false); return};
        dispatch(addRecommendedMoviesDtls(movieDtls));
        dispatch(addRecommendedSeries(seriesDtls));
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
              loaderVal && <Loader />
          }
          <div className='bg-black bg-opacity-70 mt-1'>
              {
                  suggestedMovie && (<div className="py-4 ">
                      <MovieList title={"AI Suggested Movies"} movies={suggestedMovie} />
                  </div>)
              }
              {
                  suggestedAISeries && (<div className="py-4 ">
                      <MovieList title={"AI Suggested Web Series"} movies={suggestedAISeries} />
                  </div>)
              }
          </div>
          
    </>

  )
}

export default GptSearcher