import { useSelector } from "react-redux";
import { StateType } from "../pages/RootLayer";
const GlitchingTitleComponent = () => {
  const {
    modeReducer: { currentMode },
  } = useSelector((state: StateType) => state);

  return (
    <h2
      className={
        currentMode === "dark"
          ? "dark-glitch glitch-text w-full text-left text-4xl mb-5"
          : "glitch-text w-full text-left text-4xl mb-5"
      }
      data-text="I'M RICHARD OSEI"
    >
      I'M RICHARD OSEI
    </h2>
  );
};

export default GlitchingTitleComponent;
