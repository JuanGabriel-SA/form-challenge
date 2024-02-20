import { createSlice } from '@reduxjs/toolkit'

export const errorSlice = createSlice({
    name: 'error_state',
    initialState: false,
    reducers: {
        setError: (state, action) => {
             return action.payload;
        }
    }
})

export const { setError } = errorSlice.actions
export default errorSlice.reducer;