import {BrowserRouter} from "react-router-dom";
import {AppProvider} from "./RouterProvider.jsx";

export const AppRouter = () => {
    return <BrowserRouter>
        <AppProvider/>
    </BrowserRouter>
}