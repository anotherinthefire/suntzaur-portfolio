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
    <>
      <div className="drawer z-10">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">

          <label htmlFor="my-drawer" className="fixed top-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 m-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>

          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar */}
            <li>
              <Link to='/'>
                Manage Home
              </Link>
            </li>
            <li>
              <Link to='/about'>
                Manage About
              </Link>
            </li>
            <li>
              <Link to='/resume'>
                Manage Resume
              </Link>
            </li>
            <li>
              <Link to='/project-list'>
                Manage Portfolio
              </Link>
            </li>
            <li>
              <Link to='/manage-contact'>
                Manage Contact
              </Link>
            </li>
            <li>
              <Link to='/contact'>
                Manage Accounts
              </Link>
            </li>


            {user?.displayName ? <li>
              <Link to='/account'>
                <button> Admin </button>
              </Link>
              <button onClick={handleSignOut}>Logout</button>
            </li> :
              <li className="bg-red-800">
                <Link to='/signin'>
                  login
                </Link>
              </li>
            }

          </ul>
        </div>
      </div>
    </>


  )
}

export default Navmin