import { configureStore } from '@reduxjs/toolkit'
import formReducer from './slices/formSlice'
import stepReducer from './slices/stepSlice'
import errorReducer from './slices/errorSlice'

export const store = configureStore({
    reducer: {
        formState: formReducer,
        stepState: stepReducer,
        errorState: errorReducer
    }
})

