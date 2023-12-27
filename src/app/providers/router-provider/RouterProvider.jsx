import {useRoutes} from "react-router-dom";
import {MainLayout} from "~shared/layouts/main-layout/index.js";
import {Loadable} from "~shared/lib/loadable/Loadable.jsx";
import {lazy} from "react";

const MainPage = Loadable(lazy(() => import('~pages/main-page/index.jsx')))

export const AppProvider = () => {
    return useRoutes([
        {
            element: <MainLayout/>,
            children: [
                {
                    element: <MainPage/>,
                    path: '/'
                }
            ]
        }
    ])
}