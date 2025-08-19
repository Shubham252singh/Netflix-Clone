import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./UserSlice";
import movieSlice from "./movieSlice"

const appStore = configureStore({
    reducer:{
        user:userSlice,
        movie:movieSlice
    }
})
export default appStore;