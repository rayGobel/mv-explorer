import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieListPage from './MovieListPage';

test('<MovieListPage /> shows page title', () => {
  render(<MovieListPage />)

  const pageTitle = screen.getByTestId('movie-list-page--title')
  expect(pageTitle).toBeInTheDocument()
  expect(pageTitle.textContent).toBe('Movie List')
});

test('<MovieListPage /> shows list of movies', () => {
  render(<MovieListPage />)

  const movieList = screen.getByTestId('movie-list-page--movie-list')
  expect(movieList).toBeInTheDocument()
})

test('Movies list should have movie name, type, year and image', () => {
  render(<MovieListPage />)

  const movieName = screen.queryAllByTestId('movie-list--name')
  expect(movieName[0]).toBeInTheDocument()

  const movieType = screen.queryAllByTestId('movie-list--type')
  expect(movieType[0]).toBeInTheDocument()

  const movieYear = screen.queryAllByTestId('movie-list--year')
  expect(movieYear[0]).toBeInTheDocument()

  const moviePosterImage = screen.queryAllByTestId('movie-list--image')
  expect(moviePosterImage[0]).toBeInTheDocument()
})
