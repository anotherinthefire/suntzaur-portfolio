import projectContent from "../contents/project-content"
import { useParams } from "react-router-dom"
import Projects from "../components/Projects"
import NotFound from "./NotFound"

const Project = () => {
  const { name } = useParams()
  const project = projectContent.find((project) => project.name === name)
  if (!project) return
  <NotFound />
  const otherProjects = projectContent.filter(project => project.name !== name)
  return (
    <>
      <div className="h-fit">
        <h1 className="sm:text-4xl text-2xl font-bold my-6 text-white pt-10 sm:pt-20 text-center">
          {project.title}
        </h1>
        <img
          className="w-4/5 mx-auto"
          src={project.thumbnail}
          alt="project"
        />
        {project.description.map((paragraph, index) => (
          <p className="mx-5 sm:mx-20 leading-relaxed text-base pb-2 sm:pb-4 mt-3 sm:mt-5 text-white text-justify" key={index}>
            {paragraph}
          </p>
        ))}
        <h1 className="sm:text-2xl text-xl font-bold py-2 sm:py-4 text-white text-left ml-5 sm:ml-20">
          Other Projects
        </h1>
        <div className="flex flex-wrap mx-5 sm:mx-20">
          <Projects projects={otherProjects} />
        </div>
      </div>

    </>
  )
}

export default Project