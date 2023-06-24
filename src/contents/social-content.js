import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithubSquare, faLinkedin, faStackOverflow, faRedditSquare, faFacebookSquare, faTwitterSquare, faInstagram } from "@fortawesome/free-brands-svg-icons"

const socials = [
    {
        link: "https://github.com/anotherinthefire",
        icon: faGithubSquare
        },
        {
        link: "https://www.linkedin.com/in/ron-godfrey-ultra-036298241/",
        icon: faLinkedin
        },
        {
        link: "https://stackoverflow.com/users/21646387/suntzaur",
        icon: faStackOverflow
        },
        {
        link: "https://www.reddit.com/user/suntzaur",
        icon: faRedditSquare
        },
        {
        link: "https://www.facebook.com/galawang.jedi",
        icon: faFacebookSquare
        },
        {
        link: "https://twitter.com/RUltra25",
        icon: faTwitterSquare
        },
        {
        link: "https://www.instagram.com/rgultra_/",
        icon: faInstagram
        },
        {
        link: "mailto:rongodfreyultra@gmail.com",
        icon: faEnvelope
        }
]

export default socials

//import socials from '../contents/social-content';
// {socials.map((social, index) => (
//     <Link key={index} to={social.link} target="_blank" className='pr-3 text-white text-2xl'>
//       <FontAwesomeIcon icon={social.icon} />
//     </Link>
//   ))}