import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
const Navmin = () => {
  const { user, logOut } = UserAuth()

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <nav className='text-right fixed top-0 bg-neutral-900 w-full text-lg text-white font-mono '>
      <ul>
        <li className='inline-block py-4'>
          <Link to='/manage-home' className='pl-6 pr-8'>
            Home
          </Link>
        </li>
        <li className='inline-block py-4'>
          <Link to='/manage-about' className='pl-6 pr-8'>
            About
          </Link>
        </li>
        <li className='inline-block py-4'>
          <Link to='/manage-resume' className='pl-6 pr-8'>
            Resume
          </Link>
        </li>
        <li className='inline-block py-4'>
          <Link to='/manage-project-list' className='pl-6 pr-8'>
            Portfolio
          </Link>
        </li>
        <li className='inline-block py-4'>
          <Link to='/manage-contact' className='pl-6 pr-8'>
            Contact
          </Link>
        </li>
        {user?.displayName ? <li className="inline-block py-4">
        <Link to='/account'>
          <button className="py-4 px-6 -r8 inline-block"> Admin </button>
        </Link>
          <button className="py-4 px-6 -r8 inline-block" onClick={handleSignOut}>Logout</button>
        </li> :
          <li className='inline-block py-4'>
            <Link to='/signin' className='bg-red-800 rounded-2xl px-3 mx-3'>
              login
            </Link>
          </li>
        }


      </ul>
    </nav>
  )
}

export default Navmin