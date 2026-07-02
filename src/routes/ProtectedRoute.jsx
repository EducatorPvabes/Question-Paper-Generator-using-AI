import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { token, loading } = useAuth();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;