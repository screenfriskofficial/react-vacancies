import { ThemeProvider } from "antd-style";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "~app/providers/store-provider/StoreProvider.jsx";
import { ErrorBoundary } from "~app/providers/error-boudary/ErrorBoudary.jsx";
import { AppProvider } from "~app/providers/router-provider/RouterProvider.jsx";
import { currentTheme } from "~shared/const/localStorage.js";
import { themeConfig } from "~shared/config/theme-config/themeConfig.js";

const AppRouter = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <StoreProvider>
          <ThemeProvider
            theme={themeConfig}
            defaultThemeMode={currentTheme || "light"}
          >
            <AppProvider />
          </ThemeProvider>
        </StoreProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export { AppRouter };
