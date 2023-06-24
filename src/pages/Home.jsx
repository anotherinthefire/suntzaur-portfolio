import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import bg from '../../public/images/theprof-nobg.png'
import socials from '../contents/social-content';

const Home = () => {
  return (
    <div className="h-screen bg-neutral-900 font-mono grid grid-cols-2 items-center">
      <div className="">
        <img src={bg} className="w-96 ml-auto mr-10 shadow-2xl" />
      </div>
      <p className="text-white">
        <span className="text-5xl  font-semibold">suntzaur</span><br />
        <span className="text-2xl">Aspiring <span className="text-red-600">Software Engineer</span> from Philippines</span>
        <br />
        {socials.map((social, index) => (
          <Link key={index} to={social.link} target="_blank" className='pr-3 text-white text-2xl'>
            <FontAwesomeIcon icon={social.icon} />
          </Link>
        ))}
        </p>
    </div>
  )
}

export default Home