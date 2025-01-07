import Skills from "../../components/Skills";
import SkillsTwo from "../../components/Skills-Two";
import ProjectsComponent from "../../components/ProjectsComponent";

const Projects = () => {
  return (
    <main className="w-full relative mx-auto py-4 flex flex-col justify-center items-center lg:flex-row">
      <Skills />

      <section className="main-content w-full px-4 pb-10 flex flex-col justify-between items-center sm:px-10 md:max-w-4xl md:px-14 lg:max-w-5xl">
        <div className="w-full flex flex-col justify-between items-center mb-5">
          <h2 className="font-black text-4xl leading-normal w-full mb-5">
            Projects
          </h2>
          <div className="space-y-2">
            <p className="my-1">
              Here, you'll find a collection of projects that showcase my
              creativity, technical skills, and problem-solving abilities. From
              intuitive web applications to impactful solutions tailored for
              real-world challenges, each project reflects my passion for
              building and innovating. Dive in to explore how I turn ideas into
              reality!
            </p>
          </div>
        </div>

        {/* Projects Section */}
        <ProjectsComponent />
      </section>
      <SkillsTwo />
    </main>
  );
};

export default Projects;
