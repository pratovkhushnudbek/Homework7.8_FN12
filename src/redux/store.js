import { configureStore } from "@reduxjs/toolkit";
import hangmanSlice from "./hangmanSlice";


const store=configureStore({
    reducer: hangmanSlice.reducer
})
export default store