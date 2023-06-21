/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Projects = ({ projects }) => {
  return (
    <>
      {projects.map((project, index) => (
        <Link key={index} className="p-4 md:w-1/2" to={`/project/${project.name}`}>
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden font-mono">
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src={project.thumbnail}
              alt="project"
            />
            <div className="p-6">
              <h3 className="text-lg font-medium text-white mb-3">{project.title}</h3>
              <p className="leading-relaxed mb-3 text-white">{project.description[0].substring(0, 110)}...</p>
              <div className="flex item-center flex-wrap">
                <div className="text-red-600 inline-flex items-center md:mb-2 lg:mb-0">
                  Learn more
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Projects;
