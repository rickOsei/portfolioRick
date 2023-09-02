import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentMode: "light",
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setMode: (state) => {
      state.currentMode === "light"
        ? (state.currentMode = "dark")
        : (state.currentMode = "light");
    },
  },
});

const modeReducer = modeSlice.reducer;
export const { setMode } = modeSlice.actions;

export default modeReducer;
