import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { render, screen } from "@testing-library/react";
import MovieListPage from "./MovieListPage";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

const testRenderer = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <MovieListPage />
    </QueryClientProvider>,
    { wrapper: BrowserRouter }
  );
};

test("<MovieListPage /> shows page title", () => {
  testRenderer();

  const pageTitle = screen.getByTestId("movie-list-page--title");
  expect(pageTitle).toBeInTheDocument();
  expect(pageTitle.textContent).toBe("Movie List");
});

test("<MovieListPage /> shows list of movies", () => {
  testRenderer();

  const movieList = screen.getByTestId("movie-list-page--movie-list");
  expect(movieList).toBeInTheDocument();
});
