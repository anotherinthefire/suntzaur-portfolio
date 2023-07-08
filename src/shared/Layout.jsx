import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Navmin from "../admin/components/Navmin";
import { UserAuth } from "../context/AuthContext";

const Layout = () => {
  const { user } = UserAuth();
  const targetUserId = "ENG6gSuRiqZ2sVfMNmKpU9RHREW2";

  const isUserIdMatch = user?.uid === targetUserId;

  return (
    <>
      {isUserIdMatch ? <Navmin /> : <Navbar />}
      <Outlet />
    </>
  );
};

export default Layout;
