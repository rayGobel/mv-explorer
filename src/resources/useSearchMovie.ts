import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import qs from "qs";
import type { Movie } from "./Movie";

const API_TOKEN = process.env.REACT_APP_CLIENT_TOKEN;
const BASE_URL = `https://www.omdbapi.com/`;

export interface SearchOptions {
  page?: number;
}

async function searchMovies(searchParam: string, option?: SearchOptions) {
  const page = option?.page || 1;

  const url = new URL(BASE_URL);
  const params = {
    apikey: API_TOKEN,
    s: encodeURIComponent(searchParam),
    ...(page > 1 ? { page } : {}),
  };

  url.search = qs.stringify(params);

  const { data } = await axios.get(url.href);
  return data;
}

function useSearchMovie(searchParam: string, option?: SearchOptions) {
  const { data, isFetching } = useQuery(
    "movieSearch",
    () => searchMovies(searchParam, option),
    { enabled: !!searchParam }
  );

  const movieList = data?.Search || [];

  return {
    movieList,
    isFetching,
  };
}

export default useSearchMovie;
