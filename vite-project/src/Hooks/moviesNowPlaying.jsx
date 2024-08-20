import { useSetRecoilState } from 'recoil';
import { moviesNowPlayingState } from "../store/atoms/moviesAtom";
import { API_OPTIONS } from "../utils/constants";
import axios from 'axios';
import { useEffect } from 'react';

export const useNowPlayingMovies = () => {
    const setMoviesNowPlaying = useSetRecoilState(moviesNowPlayingState);
    
    const getNowPlayingMovies = async () => {
        const URL = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
        try {
            const res = await axios.get(URL, API_OPTIONS);
              console.log(res.data)
            setMoviesNowPlaying(prevState =>({
                ...prevState,
                nowPlayingMovies:res.data
            }));
        } catch (error) {
            console.log("Error: ", error);
        }
    };
    useEffect(() => {
        getNowPlayingMovies();
    }, []);
    
    // console.log(moviesNowPlaying.nowPlayingMovies);

};

