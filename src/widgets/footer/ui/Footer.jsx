import { Layout, Typography } from "antd";
import { GithubFilled } from "@ant-design/icons";
import PropTypes from "prop-types";
import { memo } from "react";

const Footer = memo(({ bgColor, borderLG }) => {
  const { Footer } = Layout;
  const footerStyle = {
    height: 48,
    backgroundColor: bgColor,
    display: "flex",
    alignItems: "center",
    borderRadius: borderLG,
  };
  return (
    <Footer style={footerStyle}>
      <Typography.Link
        href={"https://github.com/screenfriskofficial"}
        target={"_blank"}
        style={{ display: "flex", alignItems: "center", gap: 10 }}
      >
        <GithubFilled style={{ fontSize: "25px", cursor: "pointer" }} />
        <Typography.Text style={{ fontSize: "18px" }}>
          View on Github
        </Typography.Text>
      </Typography.Link>
    </Footer>
  );
});

Footer.displayName = "Footer";

Footer.propTypes = {
  bgColor: PropTypes.string,
  borderLG: PropTypes.number,
};

export { Footer };
