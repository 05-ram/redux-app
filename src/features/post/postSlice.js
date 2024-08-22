import { createSlice, nanoid } from "@reduxjs/toolkit";
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
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(skill, design) {
                return {
                    payload: {
                        id: nanoid(),
                        skill,
                        design
                    }
                }
            }
        }
    }
})
export const selectAllPost = (state) => state.post;
export const { postAdded } = postSlice.actions;
export default postSlice.reducer;