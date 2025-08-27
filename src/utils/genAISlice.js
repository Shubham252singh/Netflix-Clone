import { createSlice } from '@reduxjs/toolkit'

const genAISlice = createSlice({
    name:"genAImovies",
    initialState:{
        recommendedSeries:null,
        recommendedMoviesDtls:null
    },
    reducers:{
        addRecommendedSeries : (state,action) =>{
            state.recommendedSeries=action.payload;
        },
        addRecommendedMoviesDtls : (state,action) =>{
            state.recommendedMoviesDtls=action.payload;;
        }
    }
})

export const {addRecommendedSeries,addRecommendedMoviesDtls}=genAISlice.actions;
export default genAISlice.reducer;