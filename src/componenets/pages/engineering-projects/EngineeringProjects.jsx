import React from "react";
import { useNavigate } from "react-router";
import "./EngineeringProjects.css";

const ProjectCard = ({ imageSrc, altText, title, description }) => {
  const navigate = useNavigate();

  const handleKnowMore = (title) => {
    const projectType = title.toLowerCase().replace(" ", "-");
    navigate(`/engineering/${projectType}/domains`);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <div className="ProjectsCard card-details  shadow-lg">
      <img className="proj-img" src={imageSrc} alt={altText} />
      <div className="card-content py-1">
        <div className="font-bold card-heading underline mb-1">{title}</div>
        <p className="text-gray-700 card-disc font-normal text-base">
          {description}
        </p>
        <button
          className="inline-block button_card text-center min-w-[200px] text-white transition-all rounded-md shadow-xl  bg-[#3C9AF5] hover:bg-[#5d6dff]  hover:shadow-2xl  hover:-translate-y-px"
          onClick={() => handleKnowMore(title)}
        >
          Browse Projects Domains
        </button>
      </div>
    </div>
  );
};

function EngineeringProjects() {
  return (
    <div>
      <h1 className="hero-heading text-center  font-bold ">
        Build Real-World Projects With idea2tech
      </h1>
      <p className="hero-content text-center font-medium ">
        "At Idea2Tech, we offer tailored mini and major project services for
        engineering students. Our mission is to guide students in developing
        practical skills and achieving academic success with hands-on support
        and expert advice, preparing them for real-world challenges."
      </p>
      <div className="project-cards-container flex flex-wrap  justify-center items-center">
        <ProjectCard
          imageSrc="/images/eng-projects.jpeg"
          altText="Electronics"
          title="Electronics"
          description="Explore projects with circuits, microcontrollers, sensors, and IoT, offering hands-on experience for practical skills"
        />
         <ProjectCard
          imageSrc="/images/eng-projects.jpeg"
          altText="Electrical"
          title="Electrical"
          description="Hands-on projects in design, automation, and robotics to develop practical skills for real-world mechanical systems."
        />
         <ProjectCard
          imageSrc="/images/eng-projects.jpeg"
          altText="Software"
          title="Software"
          description="Work on app development, AI, and machine learning projects, enhancing coding abilities for complex software solutions."
        />
        <ProjectCard
          imageSrc="/images/eng-projects-major.jpeg"
          altText="Mechanical"
          title="Mechanical"
          description="Focus on power systems, renewable energy, and smart grids through projects that address real-world challenges."
        />
      </div>
    </div>
  );
}

export default EngineeringProjects;
