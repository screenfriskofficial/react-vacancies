import { memo, useCallback, useState } from "react";
import { Layout, Menu } from "antd";
import navigationSettings from "~widgets/sidebar/view/main-view/index.jsx";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = memo(() => {
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const [broken, setBroken] = useState(false);
  const collapsible = true;
  const navigation = useNavigate();
  const location = useLocation();

  const handleClick = useCallback(
    (e) => {
      navigation(e.key);
    },
    [navigation],
  );

  return (
    <Sider
      breakpoint={"md"}
      onBreakpoint={(broken) => setBroken(broken)}
      theme="dark"
      collapsible={!broken && collapsible}
      collapsedWidth={70}
      collapsed={collapsed}
      width="300px"
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu
        onClick={handleClick}
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        defaultSelectedKeys={[location.pathname]}
        items={navigationSettings}
      />
    </Sider>
  );
});

Sidebar.displayName = "Sidebar";

export { Sidebar };
