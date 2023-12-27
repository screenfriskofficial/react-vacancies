import { Layout } from "antd";

const headerStyle = {
  height: 60,
  backgroundColor: "red",
};

export const Header = () => {
  const { Header } = Layout;
  return <Header style={headerStyle}>Header</Header>;
};
