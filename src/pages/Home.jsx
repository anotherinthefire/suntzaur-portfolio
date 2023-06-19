import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithubSquare, faLinkedin, faStackOverflow, faRedditSquare, faFacebookSquare, faTwitterSquare, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Home = () => {
  return (
    <div className="h-screen bg-neutral-900 font-mono grid grid-cols-2 items-center">
      <div className="">
        <img src="../../public/images/theprof-nobg.png" className="w-96 ml-auto mr-10 shadow-2xl" />
      </div>
      <p className="text-white">
        <span className="text-5xl  font-semibold">suntzaur</span><br />
        <span className="text-2xl">Aspiring <span className="text-red-700">Software Engineer</span> from Philippines</span>
        <br />
        <Link to='https://github.com/anotherinthefire' target="_blank" className='pr-3 text-white text-2xl'>
          <FontAwesomeIcon icon={faGithubSquare} />
        </Link>
        <Link to='https://www.linkedin.com/in/ron-godfrey-ultra-036298241/' target="_blank" className='pr-3 text-white text-2xl'>
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link to='https://stackoverflow.com/users/21646387/suntzaur' target="_blank" className='pr-3 text-white text-2xl'>
          <FontAwesomeIcon icon={faStackOverflow} />
        </Link>
        <Link to='https://www.reddit.com/user/suntzaur' target="_blank" className='pr-3 text-white text-2xl'>
          <FontAwesomeIcon icon={faRedditSquare} />
        </Link>
        <Link to='https://www.facebook.com/galawang.jedi' target="_blank" className='pr-3 text-white text-2xl'>
          <FontAwesomeIcon icon={faFacebookSquare} />
        </Link>
        <Link to='https://twitter.com/RUltra25' target="_blank" className='pr-3 text-white text-2xl'>
          <FontAwesomeIcon icon={faTwitterSquare} />
        </Link>
        <Link to='https://www.instagram.com/rgultra_/' target="_blank" className='pr-3 text-white text-2xl'>
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link to='mailto:rongodfreyultra@gmail.com' target="_blank" className='pr-3 text-white text-2xl'>
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
      </p>
    </div>
  )
}

export default Home