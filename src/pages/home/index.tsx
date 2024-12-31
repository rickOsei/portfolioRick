import { BsArrowRight } from "react-icons/bs";
import SocialMedia from "../../components/SocialMedia";
import EmailComponent from "../../components/EmailComponent";
import { StateType } from "../RootLayer";
import { useSelector } from "react-redux";
import GlitchingTitleComponent from "../../components/GlitchingTitleComponent";
import { NavLink } from "react-router-dom";

const Home = () => {
  const {
    modeReducer: { currentMode },
  } = useSelector((state: StateType) => state);

  return (
    <section className="w-full relative mx-auto py-4 flex flex-col justify-center items-center lg:flex-row">
      <SocialMedia />
      <div className="main-content w-full px-4 flex flex-col justify-between items-center sm:px-10 md:max-w-4xl md:px-14 lg:max-w-5xl">
        <GlitchingTitleComponent />
        <div className={currentMode === "dark" ? "dark-text" : ""}>
          <h2 className="mb-4 font-medium">
            Frontend Developer | MERN Enthusiast
          </h2>
          <p className="my-1">
            I'm passionate about crafting delightful web experiences, seamlessly
            blending design and functionality. When I'm not coding, you can find
            me exploring the world of technology, catching up on the latest tech
            trends, and seeking innovative solutions.
          </p>
          <p className="my-1">
            Beyond the digital realm, I'm an advocate of minimalism and order,
            finding beauty in simplicity. In my downtime, I enjoy staying
            active, playing sports, and being part of the excitement.
          </p>

          <p className="my-1">
            Join me on this journey of web development innovation and
            creativity. Together, we can turn your ideas into exceptional
            digital experiences.
          </p>
        </div>

        {/* <div> */}
        <NavLink
          to="about"
          className="w-full flex flex-row justify-start items-center mt-10 text-secondaryColor"
        >
          <p className="!text-secondaryColor">Get To Know More</p>
          <span className="pointing-arrow">
            <BsArrowRight />
          </span>
        </NavLink>
        {/* </div> */}
      </div>
      <EmailComponent />
      <div className="dummy-space w-full h-14 lg:hidden"></div>
    </section>
  );
};

export default Home;
