import { createSlice } from "@reduxjs/toolkit";

const user =  createSlice({
    name :"user",
    initialState:null,
    reducers:{
        addUser:(store,action)=>{
            return action.payload;
        },
        removeUser:(store)=>{
            return null;
        }
    }
});

export const {addUser,removeUser} = user.actions;
export default user.reducer;