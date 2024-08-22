import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/post/postSlice";
import userReducer from "../features/users/userSlice";

export const Store = configureStore({
    reducer: {
        post: postReducer,
        users: userReducer
    }
})