import ReactDOM from "react-dom/client";
import "./index.css";
import "./firebase.js";
import { StoreProvider } from "~app/providers/store-provider/StoreProvider.jsx";
import { AppProvider } from "~app/providers/router-provider/RouterProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#7692FF",
          },
          components: {
            Sider: {
              colorPrimary: "#353238",
            },
          },
        }}
      >
        <AppProvider />
      </ConfigProvider>
    </StoreProvider>
  </BrowserRouter>,
);
