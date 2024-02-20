import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
    name: 'form_props',
    initialState: {
        name: '',
        email: '',
        phone: '',
        monthly: true,
        plan: 0,
        adds: {
            online_service: false,
            larger_storage: false,
            customizable_profile: false
        }
    },
    reducers: {
        setFormProps: (state, action) => {
             return {...state, ...action.payload}
        }
    }
})

export const { setFormProps } = formSlice.actions
export default formSlice.reducer;