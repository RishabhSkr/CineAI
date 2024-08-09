import { atom } from "recoil";

export const moviesNowPlayingState = atom({
    key: 'moviesNowPlayingState', // unique ID (with respect to other atoms/selectors)
    default: {
      nowPlayingMovies :null,
      popularMovies:null,
      upcomingMovies:null

    }, // default value (aka initial state)
  });

export const trailerKeyState = atom({
    key: 'trailerKeyState', // unique ID (with respect to other atoms/selectors)
    default: {
      trailerKey :null
    }, // default value (aka initial state)
  });