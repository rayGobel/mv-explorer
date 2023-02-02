import { rest } from 'msw'
import mockMovieDetail from './mockMovieDetail.json'

export const handlers = [
  rest.get('https://www.omdbapi.com/', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockMovieDetail))
  })
];
