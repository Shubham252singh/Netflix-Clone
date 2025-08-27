import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        movieKey:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addBackgroundMoviekey:(state,action)=>{
            state.movieKey = action.payload;
        },
        addPopularMovies: (state,action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state,action)=>{
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state,action)=>{
            state.upcomingMovies = action.payload;
        }
    }
})

export const {addNowPlayingMovies,addBackgroundMoviekey,addPopularMovies,addTopRatedMovies,addUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;
