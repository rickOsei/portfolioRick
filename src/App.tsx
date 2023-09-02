// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { setMode } from "./features/modeSwitch";

import Router from "./Router";

// type StateType = {
//   modeReducer: {
//     currentMode: string;
//   };
// };

function App() {
  // const {
  //   modeReducer: { currentMode },
  // } = useSelector((state: StateType) => state);

  // console.log(currentMode);
  // const dispatch = useDispatch();

  // const handleClick = () => {
  //   dispatch(setMode());
  //   console.log("hello");
  // };

  return <Router />;
}

export default App;
