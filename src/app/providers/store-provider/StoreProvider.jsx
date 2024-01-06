import { Provider } from "react-redux";
import { store } from "./config/store.js";
import PropTypes from "prop-types";

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

StoreProvider.propTypes = {
  children: PropTypes.node,
};

export { StoreProvider };
