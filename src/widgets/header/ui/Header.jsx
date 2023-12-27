import { Layout } from "antd";

export const Header = ({ bgColor, borderLG }) => {
  const { Header } = Layout;
  const headerStyle = {
    height: 48,
    backgroundColor: bgColor,
    display: "flex",
    alignItems: "center",
    borderRadius: borderLG,
  };
  return <Header style={headerStyle}>Header</Header>;
};
