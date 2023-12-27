import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { Sidebar } from "~widgets/sidebar/index.js";
import { Header } from "~widgets/header/index.js";
import { Footer } from "~widgets/footer/index.js";

const contentStyle = {
  minHeight: "calc(100vh - 120px)",
};

export const MainLayout = () => {
  const { Content } = Layout;

  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Header />
        <Content style={contentStyle}>
          <Outlet />
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};
