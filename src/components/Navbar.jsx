import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className='text-right fixed top-0 bg-neutral-950 w-full text-lg text-white font-mono'>
      <ul>
        <li className='inline-block py-4'>
          <Link to='/' className='pl-6 pr-8'>
            Home
          </Link>
        </li>
        <li className='inline-block py-4'>
          <Link to='/about' className='pl-6 pr-8'>
            About
          </Link>
        </li>
        <li className='inline-block py-4'>
          <Link to='/resume' className='pl-6 pr-8'>
            Resume
          </Link>
        </li>
        <li className='inline-block py-4'>
          <Link to='/project-list' className='pl-6 pr-8'>
            Portfolio
          </Link>
        </li>
        <li className='inline-block py-4'>
          <Link to='/contact' className='pl-6 pr-8'>
            Contact
          </Link>
        </li>
        <li className='inline-block py-4'>
          <Link to='/' className='bg-red-800 rounded-2xl px-3 mx-3'>
            login
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar