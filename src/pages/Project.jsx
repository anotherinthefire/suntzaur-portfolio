import projectContent from "../contents/project-content"
import { useParams } from "react-router-dom"
import Projects from "../components/Projects"
import NotFound from "./NotFound"

const Project = ( ) => {
  const { name } = useParams()
  const project = projectContent.find((project) => project.name === name)
  if (!project) return 
  <NotFound />
  const otherProjects = projectContent.filter(project => project.name !== name)
  return (
    <>
    <div className="h-cover bg-neutral-950">
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-white pt-20 text-center">
        {project.title}
      </h1>
      <img
              className="h-full w-4/5 mx-auto"
              src={project.thumbnail}
              alt="project"
            />
      {project.description.map((paragraph, index) => (
        <p className="mx-20 leading-relaxed text-base pb-4 mt-5 text-white text-justify" key={index}>
          {paragraph}
        </p>
      ))}
      <h1 className="sm:2xl text-xl font-bold py-4 text-white text-left ml-20">Other Projects</h1>
      <div className="flex flex-wrap  mx-20">
        <Projects projects={otherProjects}/>
      </div>
      </div>
    </>
  )
}

export default Project