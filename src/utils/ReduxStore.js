import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./UserSlice";
import movieSlice from "./movieSlice";
import appConfigSlice from "./appConfigSlice";
import genAISlice from "./genAISlice";
const appStore = configureStore({
    reducer:{
        user:userSlice,
        movie:movieSlice,
        appConfig:appConfigSlice,
        genAImovies:genAISlice
    }
})
export default appStore;