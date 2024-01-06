import { ConfigProvider } from "antd";
import { theme } from "~app/providers/config-theme-provider/config/theme.js";
import PropTypes from "prop-types";

const ConfigThemeProvider = ({ children }) => {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};

ConfigThemeProvider.propTypes = {
  children: PropTypes.node,
};

export { ConfigThemeProvider };
