import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '1',
        skill: 'React js',
        design: 'Front End Developer'
    },
    {
        id: '2',
        skill: 'Node js',
        design: 'Back End Developer'
    }
]

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {

    }
})

export default postSlice.reducer;