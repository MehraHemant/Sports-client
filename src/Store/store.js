import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./modeReducer";

export default configureStore({
    reducer: {
        mode: modeReducer,
    }
})