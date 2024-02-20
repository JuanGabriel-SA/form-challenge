import { createSlice } from '@reduxjs/toolkit'

export const stepSlice = createSlice({
    name: 'step_count',
    initialState: 1,
    reducers: {
        setStep: (state, action) => {
             return action.payload;
        }
    }
})

export const { setStep } = stepSlice.actions
export default stepSlice.reducer;