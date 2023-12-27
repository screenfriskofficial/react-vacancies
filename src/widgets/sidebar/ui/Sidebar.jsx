import { memo } from "react";
import { Layout } from "antd";

const siderStyle = {
  backgroundColor: "blue",
};
export const Sidebar = memo(() => {
  const { Sider } = Layout;
  return (
    <Sider width="20%" style={siderStyle}>
      hello
    </Sider>
  );
});
