import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "dark"
}
export const modeSlice = createSlice({
    id: 'mode',
    initialState,
    reducers: {
        Mode: (state, action) => {
            (state.mode === "dark")?state.mode = "light":state.mode = "dark";
        }
    }
});
export const { Mode } = modeSlice.actions;
export default modeSlice.reducer;