import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import ErrorPage from "~/pages/ErrorPage";
import MovieDetailPage from "~/pages/MovieDetailPage";
import MovieListPage from "~/pages/MovieListPage";
import MovieFavoritePage from "~/pages/MovieFavoritePage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MovieListPage />,
      },
      {
        path: "/movie-detail/:movieId",
        element: <MovieDetailPage />,
      },
      {
        path: "/favorite-movies",
        element: <MovieFavoritePage />,
      },
    ],
  },
];

export default createBrowserRouter(routes);
