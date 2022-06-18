import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const ProtectedRoute = () => {
  const auth = useAuth();
  const authorized = localStorage.getItem("authorized");
  return authorized || auth ? <Outlet /> : <Navigate to="/login" replace />;
};
