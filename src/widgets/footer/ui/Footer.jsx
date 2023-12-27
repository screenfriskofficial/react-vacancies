import { Layout } from "antd";

export const Footer = ({ bgColor, borderLG }) => {
  const { Footer } = Layout;
  const footerStyle = {
    height: 48,
    backgroundColor: bgColor,
    display: "flex",
    alignItems: "center",
    borderRadius: borderLG,
  };
  return <Footer style={footerStyle}>Footer</Footer>;
};
