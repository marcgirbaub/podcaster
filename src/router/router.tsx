import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";

const routes: RouteObject[] = [{ path: "/", element: <App />, children: [{}] }];

export const router = createBrowserRouter(routes);
