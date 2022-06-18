import { useAppSelector } from "../app/hooks";
import { selectIsAuthenticated } from "../features/user/userSlice";

export const useAuth = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  return isAuthenticated;
};
