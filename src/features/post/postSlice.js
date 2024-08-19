import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

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
export const selectAllPost = (state) => state.post;
export default postSlice.reducer;