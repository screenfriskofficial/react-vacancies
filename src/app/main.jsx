import ReactDOM from "react-dom/client";
import "./index.css";
import "./firebase.js";
import { StoreProvider } from "./providers/store-provider/StoreProvider.jsx";
import { AppProvider } from "./providers/router-provider/RouterProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "./providers/error-boudary/ErrorBoudary.jsx";
import { ConfigThemeProvider } from "./providers/config-theme-provider/ConfigThemeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <BrowserRouter>
      <StoreProvider>
        <ConfigThemeProvider>
          <AppProvider />
        </ConfigThemeProvider>
      </StoreProvider>
    </BrowserRouter>
  </ErrorBoundary>,
);
