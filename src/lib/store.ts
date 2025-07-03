import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../lib/features/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})