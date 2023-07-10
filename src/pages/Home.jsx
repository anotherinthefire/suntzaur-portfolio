import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bg from '../../public/images/theprof-nobg.png';
import socials from '../contents/social-content';

const Home = () => {
  return (
    <div className="h-screen font-mono grid grid-cols-1 sm:grid-cols-2 items-center">
      <div className="text-center sm:text-left">
        <img src={bg} className="w-80 sm:w-96 mx-auto sm:ml-auto sm:mr-10 shadow-2xl" alt="Background" />
      </div>
      <div className="text-center sm:text-left">
        <p className="text-white">
          <span className="text-3xl sm:text-5xl font-semibold">suntzaur</span>
          <br />
          <span className="text-xl sm:text-2xl">
            Aspiring <span className="text-red-600">Software Engineer</span> from Philippines
          </span>
          <br />
          {socials.map((social, index) => (
            <Link key={index} to={social.link} target="_blank" className="pr-3 text-white text-xl sm:text-2xl">
              <FontAwesomeIcon icon={social.icon} />
            </Link>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Home;
