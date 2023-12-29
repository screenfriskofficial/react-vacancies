import { Outlet } from "react-router-dom";
import { Flex, Layout, theme } from "antd";
import { Sidebar } from "~widgets/sidebar/ui/Sidebar.jsx";
import { Header } from "~widgets/header/index.js";
import { Footer } from "~widgets/footer/index.js";

export const MainLayout = () => {
  const { Content } = Layout;
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const contentStyle = {
    minHeight: "calc(100vh - 168px)",
    height: "calc(100vh - 168px)",
    padding: "20px",
    backgroundColor: colorBgContainer,
    borderRadius: borderRadiusLG,
  };
  return (
    <Layout hasSider>
      <Sidebar bgColor={colorBgContainer} />
      <Layout style={{ margin: "18px" }}>
        <Flex gap={18} vertical>
          <Header bgColor={colorBgContainer} borderLG={borderRadiusLG} />
          <Content style={contentStyle}>
            <Outlet />
          </Content>
          <Footer bgColor={colorBgContainer} borderLG={borderRadiusLG} />
        </Flex>
      </Layout>
    </Layout>
  );
};
