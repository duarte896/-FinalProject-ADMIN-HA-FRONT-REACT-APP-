import { Navigate, Outlet } from "react-router-dom";
const ProtectedLogin = ({ user, redirectPath = "/" }) => {
  if (user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
export default ProtectedLogin;
