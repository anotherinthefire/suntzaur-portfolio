import { Outlet } from "react-router-dom";
import Navmin from "../admin/components/Navmin";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Layout = () => {
  const { user, logOut } = UserAuth()
  const targetUserId = "ENG6gSuRiqZ2sVfMNmKpU9RHREW2";

  const isUserIdMatch = user?.uid === targetUserId;

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {isUserIdMatch ? <Navmin /> :

        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="w-full navbar bg-neutral-900 fixed top-0 text-white">
              <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
              </div>
              <div className="flex-1 px-2 mx-2 hidden sm:flex"><b>{'<>'}</b></div>

              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">
                  {/* Navbar */}
                  <li>
                    <Link to='/'>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to='/about'>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to='/resume'>
                      Resume
                    </Link>
                  </li>
                  <li>
                    <Link to='/project-list'>
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link to='/contact'>
                      Contact
                    </Link>
                  </li>
                  {user?.displayName ? <li>
                    <Link to='/account'>
                      <button> Account </button>
                    </Link>
                    <button onClick={handleSignOut}>Logout</button>
                  </li> :
                    <li>
                      <Link to='/signin' className="bg-red-800">
                        login
                      </Link>
                    </li>
                  }
                </ul>
              </div>
            </div>
            {/* Page */}
            <Outlet />
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full bg-neutral-900">
              {/* Sidebar */}
              <li>
                <Link to='/'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/about'>
                  About
                </Link>
              </li>
              <li>
                <Link to='/resume'>
                  Resume
                </Link>
              </li>
              <li>
                <Link to='/project-list'>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to='/contact'>
                  Contact
                </Link>
              </li>
              {user?.displayName ? <li>
                <Link to='/account'>
                  <button> Account </button>
                </Link>
                <button onClick={handleSignOut}>Logout</button>
              </li> :
                <li>
                  <Link to='/signin'>
                    login
                  </Link>
                </li>
              }
            </ul>

          </div>
        </div>

      }
    </>
  );
};

export default Layout;
