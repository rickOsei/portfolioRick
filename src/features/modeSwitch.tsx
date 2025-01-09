import { createSlice } from "@reduxjs/toolkit";
const CURRENT_MODE = "portfolio-current-mode";
const currentMode = localStorage.getItem(CURRENT_MODE) || "dark";

const initialState = {
  currentMode: currentMode,
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setMode: (state) => {
      state.currentMode === "light";
      if (state.currentMode === "light") {
        state.currentMode = "dark";
        localStorage.setItem(CURRENT_MODE, "dark");
      } else {
        state.currentMode = "light";
        localStorage.setItem(CURRENT_MODE, "light");
      }
    },
  },
});

const modeReducer = modeSlice.reducer;
export const { setMode } = modeSlice.actions;

export default modeReducer;
