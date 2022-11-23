import { configureStore } from '@reduxjs/toolkit'
import locationReducer from '../store/userSlice'

const store = configureStore({
    reducer:
    {
        locationdata: locationReducer 
    }
})

export default store