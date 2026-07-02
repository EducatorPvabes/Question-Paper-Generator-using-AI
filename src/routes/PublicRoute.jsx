import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PublicRoute = ({ children }) => {
  const { token, loading } = useAuth();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return token ? <Navigate to="/dashboard" replace /> : children;
};

export default PublicRoute;