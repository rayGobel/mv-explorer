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

test.skip("Movies list should have movie name, type, year and image", () => {
  testRenderer();
  const { queryAllByTestId } = screen;

  const movieName = queryAllByTestId("movie-list--name");
  expect(movieName[0]).toBeInTheDocument();

  const movieType = queryAllByTestId("movie-list--type");
  expect(movieType[0]).toBeInTheDocument();

  const movieYear = queryAllByTestId("movie-list--year");
  expect(movieYear[0]).toBeInTheDocument();

  const moviePosterImage = queryAllByTestId("movie-list--image");
  expect(moviePosterImage[0]).toBeInTheDocument();
});
