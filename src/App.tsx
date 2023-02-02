import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieListPage from '~/pages/MovieListPage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 data-testid="app--page-title">MVS Browser</h1>
      </header>

      <article>
        <MovieListPage />
      </article>
    </div>
  );
}

export default App;
