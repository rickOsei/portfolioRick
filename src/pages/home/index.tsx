import { BsArrowRight } from "react-icons/bs";
import SocialMedia from "../../components/SocialMedia";
import EmailComponent from "../../components/EmailComponent";
import { StateType } from "../RootLayer";
import { useSelector } from "react-redux";
import GlitchingTitleComponent from "../../components/GlitchingTitleComponent";

const Home = () => {
  const {
    modeReducer: { currentMode },
  } = useSelector((state: StateType) => state);

  return (
    <section className="w-full relative mx-auto py-4 flex flex-col justify-center items-center lg:flex-row">
      <SocialMedia />
      <div className="main-content w-full px-4 flex flex-col justify-between items-center sm:px-10 md:max-w-4xl md:px-14">
        <GlitchingTitleComponent />
        <div className={currentMode === "dark" ? "dark-text" : ""}>
          <p className="mb-4 font-bold">Frontend Developer | MERN Enthusiast</p>
          <p className="my-4">
            I'm passionate about crafting delightful web experiences, seamlessly
            blending design and functionality. When I'm not coding, you can find
            me exploring the world of technology, catching up on the latest tech
            trends, and seeking innovative solutions.
          </p>
          <p className="my-4 hidden lg:block">
            Beyond the digital realm, I'm an advocate of minimalism and order,
            finding beauty in simplicity. In my downtime, I enjoy staying
            active, playing sports, and being part of the excitement.
          </p>

          <p className="my-4">
            Join me on this journey of web development innovation and
            creativity. Together, we can turn your ideas into exceptional
            digital experiences.
          </p>
        </div>

        <div className="w-full flex flex-row justify-start mt-10 text-secondaryColor">
          <p
          // className={currentMode === "dark" ? "dark-text" : ""}
          >
            Get to know more
          </p>
          <span
            // className={
            //   currentMode === "dark"
            //     ? "pointing-arrow  dark-text"
            //     : "pointing-arrow "
            // }
            className="pointing-arrow"
          >
            <BsArrowRight />
          </span>
        </div>
      </div>
      <EmailComponent />
      <div className="dummy-space w-full h-14 lg:hidden"></div>
    </section>
  );
};

export default Home;
