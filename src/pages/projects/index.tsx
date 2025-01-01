import { BsArrowRight } from "react-icons/bs";
import ExperienceComponent from "../../components/ExperienceComponent";
import Skills from "../../components/Skills";
import SkillsTwo from "../../components/Skills-Two";

const Projects = () => {
  return (
    <main className="w-full relative mx-auto py-4 flex flex-col justify-center items-center lg:flex-row">
      <Skills />

      <section className="main-content w-full px-4 pb-10 flex flex-col justify-between items-center sm:px-10 md:max-w-4xl md:px-14 lg:max-w-5xl">
        {/* About Me Section */}
        <div className="w-full flex flex-col justify-between items-center mb-5">
          <h2 className="mb-4 font-medium w-full">About Me</h2>
          <div className="space-y-2">
            <p className="my-1">
              I’m a front-end developer with a passion for creating visually
              stunning, user-friendly, and accessible interfaces. My work
              thrives at the crossroads of design and development, where I blend
              my graphic design sensibilities with engineering expertise to
              craft pixel-perfect, high-performance web experiences.
            </p>
            <p className="my-1">
              Currently, I specialize in developing seamless, interactive user
              interfaces that not only look beautiful but also prioritize
              usability and inclusivity. Whether it’s building reusable
              component libraries or refining visual details, I aim to deliver
              solutions that resonate with users and adhere to best practices.
            </p>
            <p className="my-1">
              In my career, I’ve worked across diverse environments, from
              startups to established companies, collaborating with teams to
              bring creative concepts to life. My design background informs my
              approach, allowing me to bridge the gap between visual
              storytelling and functional, scalable code.
            </p>
            <p className="my-1">
              When I’m not coding or designing, you can find me exploring new
              design trends, experimenting with illustration and motion
              graphics, or diving into creative side projects that keep me
              inspired.
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <ExperienceComponent />

        <div className="w-full flex flex-row justify-start items-center mt-10 text-secondaryColor">
          <p className="!text-secondaryColor">View Full Résumé</p>
          <span className="pointing-arrow">
            <BsArrowRight />
          </span>
        </div>
      </section>
      <SkillsTwo />
    </main>
  );
};

export default Projects;
