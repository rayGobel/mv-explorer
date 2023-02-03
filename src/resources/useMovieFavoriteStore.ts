import { useEffect, useState } from "react";
import type { Movie } from "./Movie";

const STORE_KEY = "favorite-movie-list";

function storageAvailable(type: "localStorage" | "sessionStorage") {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

function useMovieFavoriteStore() {
  const [storage, setStorage] = useState(new Map());
  const [storageAvailableFlag, setStorageAvailable] = useState(false);

  useEffect(() => {
    // Initialize hook. We will try to read localStorage
    // value for any persistent storage and setup hook
    if (storageAvailable("localStorage")) {
      const local = window.localStorage.getItem(STORE_KEY);

      if (local) {
        const localData = JSON.parse(local);
        console.log({ localData });
        setStorage(new Map(localData));
      }

      setStorageAvailable(true);
    } else {
      console.warn("No localStorage available for data persistence");
    }
  }, []);

  useEffect(() => {
    // Always try to save on each change of storage
    if (!storageAvailableFlag) {
      console.warn("No localStorage available for data persistence");
      return;
    }

    try {
      const newData = Array.from(storage.entries());
      const newDataString = JSON.stringify(newData);
      window.localStorage.setItem(STORE_KEY, newDataString);
    } catch (e) {
      console.warn(e);
    }
  }, [storage]);

  const movieInFavorites = (movie: Movie): boolean => {
    return storage.has(movie.imdbID);
  };

  const addToFavorite = (movie: Movie) => {
    if (movieInFavorites(movie)) {
      return;
    }

    setStorage((oldStorage) => {
      let newStorage = new Map(oldStorage);

      newStorage.set(movie.imdbID, movie);

      return newStorage;
    });
  };

  const removeFromFavorite = (movie: Movie) => {
    if (!movieInFavorites(movie)) {
      return;
    }

    setStorage((oldStorage) => {
      let newStorage = new Map(oldStorage);

      newStorage.delete(movie.imdbID);

      return newStorage;
    });
  };

  const favoriteMovies = Array.from(storage.values());

  return {
    favoriteMovies,
    addToFavorite,
    removeFromFavorite,
    movieInFavorites,
  };
}

export default useMovieFavoriteStore;
