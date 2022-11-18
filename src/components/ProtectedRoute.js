import { Navigate } from "react-router-dom";
export function ProtectedRoute({ admin, children }) {
  if (!admin) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
