import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "../features/modeSwitch";

const store = configureStore({
  reducer: {
    modeReducer: modeReducer,
  },
});

export default store;
