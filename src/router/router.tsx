import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import Home from "../pages/Home/Home";
import endpoints from "./endpoints";
import DetailPage from "../pages/DetailPage/DetailPage";

const routes: RouteObject[] = [
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: endpoints.detail, element: <DetailPage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);

export const getComponentRouter = (ui: React.ReactElement) =>
  createBrowserRouter([
    {
      path: "/",
      element: ui,
    },
  ]);
