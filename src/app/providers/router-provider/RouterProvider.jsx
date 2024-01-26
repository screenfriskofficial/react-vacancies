import { useRoutes } from "react-router-dom";
import { MainLayout } from "~shared/layouts/main-layout/index.js";
import { Loadable } from "~shared/lib/components/loadable/Loadable.jsx";
import { lazy } from "react";

import { ProtectedRoute } from "~shared/lib/components/procted-route/ProtectedRoute.jsx";
import { useProfile } from "~shared/hooks/useProfile.js";
import { DevelopPage } from "~pages/develop-page/DevelopPage.jsx";

const MainPage = Loadable(lazy(() => import("~pages/main-page")));
const SettingsPage = Loadable(lazy(() => import("~pages/settings-page")));
const StatisticPage = Loadable(lazy(() => import("~pages/statistic-page")));
const FavoritesPage = Loadable(lazy(() => import("~pages/favorites-page")));

const AppProvider = () => {
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
        {
          element: (
            <ProtectedRoute isAuth={currentUser}>
              <StatisticPage />
            </ProtectedRoute>
          ),
          path: "/statistic",
        },
        {
          element: (
            <ProtectedRoute isAuth={currentUser}>
              <FavoritesPage />
            </ProtectedRoute>
          ),
          path: "/favorites",
        },
        {
          element: <DevelopPage />,
          path: "/develop",
        },
      ],
    },
  ]);
};

export { AppProvider };
