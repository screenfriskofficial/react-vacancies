import { useRoutes } from "react-router-dom";
import { MainLayout } from "~shared/layouts/main-layout/index.js";
import { Loadable } from "~shared/lib/loadable/Loadable.jsx";
import { lazy } from "react";

import { ProtectedRoute } from "~shared/lib/procted-route/ProtectedRoute.jsx";
import { useProfile } from "~shared/hooks/useProfile.js";

const MainPage = Loadable(lazy(() => import("~pages/main-page/index.jsx")));
const SettingsPage = Loadable(
  lazy(() => import("~pages/settings-page/index.jsx")),
);

export const AppProvider = () => {
  const { currentUser } = useProfile();
  return useRoutes([
    {
      element: <MainLayout />,
      children: [
        {
          element: <MainPage />,
          path: "/",
        },
        {
          element: (
            <ProtectedRoute isAuth={currentUser}>
              <SettingsPage />
            </ProtectedRoute>
          ),
          path: "/settings",
        },
      ],
    },
  ]);
};
