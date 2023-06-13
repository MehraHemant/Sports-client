import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "dark",
    auth: false,
}

export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        Mode: (state, action) => {
            (state.mode === "dark") ? state.mode = "light" : state.mode = "dark";
        },
        Auth: (state, action) => {
            state.auth = action.payload;
        }
    }});
export const { Mode, Auth } = modeSlice.actions;
export default modeSlice.reducer;