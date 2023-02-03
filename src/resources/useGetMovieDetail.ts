import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import qs from "qs";
import type { imdbID } from "./Movie";

const API_TOKEN = process.env.REACT_APP_CLIENT_TOKEN;
const BASE_URL = `https://www.omdbapi.com/`;

async function getMovieDetail(movieId?: imdbID) {
  if (!movieId) {
    throw new Error("no movie id supplied");
  }

  const url = new URL(BASE_URL);
  const params = {
    apikey: API_TOKEN,
    i: encodeURIComponent(movieId),
  };

  url.search = qs.stringify(params);

  const { data } = await axios.get(url.href);
  return data;
}

function useGetMovieDetail(movieId?: imdbID) {
  const { data, isFetching } = useQuery(
    "movieDetail",
    () => getMovieDetail(movieId),
    { enabled: !!movieId }
  );

  return {
    movie: data,
    isFetching,
  };
}

export default useGetMovieDetail;
