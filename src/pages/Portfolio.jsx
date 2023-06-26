import projectContent from "../contents/project-content"
import Projects from "../components/Projects"
const Portfolio = () => {
  return (
    <div className="h-cover">
      <h1 className='sm:text-4xl text-2xl font-bold my-6 text-white pt-10 pl-10 font-mono'>
        Recent projects:
      </h1>
      <div className='container py-4 mx-auto'>
        <div className='flex flex-wrap -m-4'>
          <Projects projects={projectContent} />
        </div>
      </div>
    </div>
  )
}

export default Portfolio