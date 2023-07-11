/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext"

const ProtectedAdmin = ({ children }) => {
  const { user } = UserAuth();
  const targetUserId = "ENG6gSuRiqZ2sVfMNmKpU9RHREW2";

  if (!user || user.uid !== targetUserId) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default ProtectedAdmin;
