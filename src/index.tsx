import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import ErrorPage from "~/pages/ErrorPage";
import MovieDetailPage from "~/pages/MovieDetailPage";
import MovieListPage from "~/pages/MovieListPage";
import MovieFavoritePage from "~/pages/MovieFavoritePage";
import reportWebVitals from "./reportWebVitals";

function setupMSW() {
  if (process.env.NODE_ENV === "development") {
    return import("~/mocks/browser").then(({ worker }) => worker.start());
  }

  return Promise.resolve();
}

export const router = createBrowserRouter([
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
]);

setupMSW().then(() => {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );

  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
