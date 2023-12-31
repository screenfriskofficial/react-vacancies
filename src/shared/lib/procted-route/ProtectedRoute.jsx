import { NotAuthenticatedMsg } from "~shared/ui/not-authenticated-msg/NotAuthenticatedMsg.jsx";

export const ProtectedRoute = ({ children, isAuth }) => {
  if (isAuth) {
    return children;
  }

  return <NotAuthenticatedMsg />;
};
