import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/post/postSlice";

export const Store = configureStore({
    reducer: {
        post: postReducer
    }
})