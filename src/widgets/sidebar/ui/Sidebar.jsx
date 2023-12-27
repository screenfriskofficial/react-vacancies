import { memo, useState } from "react";
import { Layout, Menu } from "antd";
import navigationSettings from "~widgets/sidebar/view/main-view/index.jsx";
import { useLocation, useNavigate } from "react-router-dom";

export const Sidebar = memo(() => {
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const navigation = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    navigation(e.key);
  };

  return (
    <Sider
      theme="dark"
      collapsible
      collapsedWidth={70}
      collapsed={collapsed}
      width="20%"
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu
        onClick={handleClick}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
        items={navigationSettings}
      />
    </Sider>
  );
});
