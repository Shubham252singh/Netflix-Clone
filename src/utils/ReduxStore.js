import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./UserSlice"
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'user',
  storage,
};
const persistedUserReducer = persistReducer(persistConfig, userSlice)
const appStore = configureStore({
    reducer:{
        user:persistedUserReducer,
    }
})
export const persistor = persistStore(appStore);
export default appStore;