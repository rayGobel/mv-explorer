import axios from 'axios'
import {
  useQuery,
  useQueryClient,
} from 'react-query'

async function searchMovies () {
  const { data } = await axios.get('https://www.omdbapi.com/?apikey=945808ea&s=shrek')
  return data
}

function MovieListPage () {
  const queryClient = useQueryClient()
  const query = useQuery('movieSearch', searchMovies)

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
