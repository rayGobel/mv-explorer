import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders application title', () => {
  render(<App />);
  const pageTitle = screen.getByTestId('app--page-title')
  expect(pageTitle).toBeInTheDocument();
  expect(pageTitle.textContent).toBe('MVS Browser')
});

test('Navigating first page should be <MovieListPage />', () => {
  render(<App />);
  const movieListPage = screen.getByTestId('app--movie-list-page')
  expect(movieListPage).toBeInTheDocument()
});
