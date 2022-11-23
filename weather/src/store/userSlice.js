import { createSlice } from '@reduxjs/toolkit'

const initialState= {
    value: [],
  };
  
const locationSlice = createSlice({
    name: "locationdata",
    initialState,
    reducers: {
        weather: (state, action) => {
            state.value = action.payload;
           
        },
    },
});



export const { weather } = locationSlice.actions
export default locationSlice.reducer