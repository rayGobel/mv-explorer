import { rest } from "msw";
import mockMovieDetail from "./mockMovieDetail.json";
import mockMovieSearchResult from "./mockMovieSearchResult.json";

const mockFalseResponse = {
  Response: "False",
  Error: "Incorrect IMDb ID.",
};

export const handlers = [
  rest.get("https://www.omdbapi.com/", (req, res, ctx) => {
    const searchMode = req.url.searchParams.get("s");
    const imdbID = req.url.searchParams.get("i");
    const movieTitle = req.url.searchParams.get("t");
    const apiKey = req.url.searchParams.get("apikey");

    if (searchMode) {
      return res(ctx.status(200), ctx.json(mockMovieSearchResult));
    }

    if (imdbID || movieTitle) {
      return res(ctx.status(200), ctx.json(mockMovieDetail));
    }

    return res(ctx.status(200), ctx.json(mockFalseResponse));
  }),
];
