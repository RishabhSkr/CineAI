import { selector } from "recoil";
import {moviesNowPlayingState,trailerKeyState} from "../atoms/moviesAtom"

export const isNowPlayingMoviesState = selector({
    key : 'isNowPlayingMoviesState',
    get:({get})=>{
        const state   = get(moviesNowPlayingState);
        return state.nowPlayingMovies!=null
    }
})

export const isPopularMoviesState = selector({
    key : 'isPopularMoviesState',
    get:({get})=>{
        const state   = get(moviesNowPlayingState);
        return state.popularMovies!=null
    }
})
export const isUpcomingMoviesState = selector({
    key : 'isUpcomingMoviesState',
    get:({get})=>{
        const state   = get(moviesNowPlayingState);
        return state.upcomingMovies!=null
    }
})

export const isTrailerKeyState = selector({
    key : 'isTrailerKeyState',
    get:({get})=>{
        const state   = get(trailerKeyState);
        return state.trailerKey!=null
    }
})