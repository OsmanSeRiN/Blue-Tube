import { configureStore } from "@reduxjs/toolkit";
import { data } from "../Reducer/Data";

export const store = configureStore({
    reducer:{
        data:data.reducer
    }
})