import { NotAuthenticated } from "~widgets/not-authenticated/index.js";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children, isAuth }) => {
  if (isAuth) {
    return children;
  }

  return <NotAuthenticated />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
  isAuth: PropTypes.object,
};

export { ProtectedRoute };
