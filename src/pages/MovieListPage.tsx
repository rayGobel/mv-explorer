function MovieListPage () {
  return (
    <div data-testid="app--movie-list-page">
      <h1 data-testid="movie-list-page--title">Movie List</h1>

      <ul data-testid="movie-list-page--movie-list">
        <li>
          <img data-testid="movie-list--image" src="/favicon.ico" />
          <p data-testid="movie-list--name">Battleship</p>
          <p data-testid="movie-list--type">Action</p>
          <p data-testid="movie-list--year">2012</p>
        </li>
      </ul>
    </div>
  )
}

export default MovieListPage
