import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import Home from "../pages/Home/Home";
import endpoints from "./endpoints";
import DetailPodcastPage from "../pages/DetailPodcastPage/DetailPodcastPage";
import DetailEpisodePage from "../pages/DetailEpisodePage/DetailEpisodePage";

const routes: RouteObject[] = [
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: endpoints.detail, element: <DetailPodcastPage /> },
      { path: endpoints.episodeDetail, element: <DetailEpisodePage /> },
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
