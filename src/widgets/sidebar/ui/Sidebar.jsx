import { memo, useState } from "react";
import { Layout, Menu } from "antd";
import navigationSettings from "~widgets/sidebar/view/main-view/index.jsx";
import { useLocation, useNavigate } from "react-router-dom";

export const Sidebar = memo(() => {
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const [broken, setBroken] = useState(false);
  const collapsible = true;
  const navigation = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    navigation(e.key);
  };

  return (
    <Sider
      breakpoint={"md"}
      onBreakpoint={(broken) => setBroken(broken)}
      theme="light"
      collapsible={!broken && collapsible}
      collapsedWidth={70}
      collapsed={collapsed}
      width="300px"
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu
        onClick={handleClick}
        theme="light"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
        items={navigationSettings}
      />
    </Sider>
  );
});
