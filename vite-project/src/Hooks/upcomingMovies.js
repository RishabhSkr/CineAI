// https://api.themoviedb.org/3/movie/upcoming?page=1


import { useSetRecoilState } from 'recoil';
import { moviesNowPlayingState } from "../store/atoms/moviesAtom";
import { API_OPTIONS } from "../utils/constants";
import axios from 'axios';
import { useEffect } from 'react';

export const useUpcomingMovies = () => {
    const setUpcomingMovies = useSetRecoilState(moviesNowPlayingState);
    
    const getUpcomingMovies = async () => {
        const URL = 'https://api.themoviedb.org/3/movie/upcoming?page=1';
        try {
            const res = await axios.get(URL, API_OPTIONS);
              console.log(res.data);
              setUpcomingMovies(prevState =>({
                ...prevState,
                upcomingMovies:res.data
            }));
        } catch (error) {
            console.log("Error: ", error);
        }
    };
    useEffect(() => {
        getUpcomingMovies();
    }, []);
    
    // console.log(moviesNowPlaying.nowPlayingMovies);

};
