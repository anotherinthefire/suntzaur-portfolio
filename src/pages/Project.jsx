import projectContent from "../contents/project-content"
import Projects from "../components/Projects"
const Project = () => {
  return (
    <div>
    <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
      project
    </h1>
    <div className='container py-4 mx-auto'>
      <div className='flex flex-wrap -m-4'>
        <Projects projects={projectContent} />
      </div>
    </div>
  </div>
  )
}

export default Project