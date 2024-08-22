import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '1',
        name: 'Karthik'
    },
    {
        id: '2',
        name: 'Ram'
    },
    {
        id: '3',
        name: 'Joe'
    }
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})
export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;