type ID = string;
type URLString = string;
export type imdbID = ID;

export interface Movie {
  imdbID: ID;
  Title: string;
  Poster: URLString;
  Type: string;
  Year: number;
}
