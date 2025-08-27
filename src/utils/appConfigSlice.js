import { createSlice } from '@reduxjs/toolkit'

const appConfigSlice = createSlice({
    name :"appConfig",
    initialState:{
        gptSrchClick:false
    },
    reducers:{
        toggleGptSrchBtn:(state)=>{
            state.gptSrchClick = !state.gptSrchClick;
        }
    }
});
export const {toggleGptSrchBtn} = appConfigSlice.actions;
export default appConfigSlice.reducer;