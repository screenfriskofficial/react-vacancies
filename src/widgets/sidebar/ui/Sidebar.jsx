import { memo, useCallback, useState } from "react";
import { Layout, Menu } from "antd";
import navigationSettings from "./sidebar-view/SidebarView.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { useResponsive } from "antd-style";

const Sidebar = memo(() => {
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const [broken, setBroken] = useState(false);
  const collapsible = true;
  const navigation = useNavigate();
  const location = useLocation();
  const { mobile } = useResponsive();

  const handleClick = useCallback(
    (e) => {
      navigation(e.key);
    },
    [navigation],
  );

  if (mobile) {
    return (
      <Sider
        breakpoint={"md"}
        onBreakpoint={(broken) => setBroken(broken)}
        theme="light"
        collapsible={!broken && collapsible}
        collapsedWidth={50}
        collapsed={collapsed}
        width="300px"
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu
          onClick={handleClick}
          mode="inline"
          selectedKeys={[location.pathname]}
          defaultSelectedKeys={[location.pathname]}
          items={navigationSettings}
        />
      </Sider>
    );
  }

  return (
    <Sider
      breakpoint={"md"}
      onBreakpoint={(broken) => setBroken(broken)}
      theme="light"
      collapsible={!broken && collapsible}
      collapsedWidth={80}
      collapsed={collapsed}
      width="300px"
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu
        onClick={handleClick}
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
