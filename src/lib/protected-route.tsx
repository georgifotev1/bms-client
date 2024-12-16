import { Navigate, useLocation } from "react-router";
import { paths } from "../config/paths";
import { useUser } from "./auth";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useUser();
  const location = useLocation();

  if (user.isLoading) {
    return <div>Loading...</div>;
  }
  if (!user.data || !user.isSuccess || user.isError) {
    return <Navigate to={paths.auth.login.getHref(location.pathname)} />;
  }

  return children;
};
