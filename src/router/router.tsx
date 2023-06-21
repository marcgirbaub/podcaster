import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import Home from "../pages/Home/Home";

const routes: RouteObject[] = [
  { element: <App />, children: [{ path: "/", element: <Home /> }] },
];

export const router = createBrowserRouter(routes);
