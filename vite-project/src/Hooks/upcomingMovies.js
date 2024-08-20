// https://api.themoviedb.org/3/movie/upcoming?page=1


import { useSetRecoilState ,useRecoilValue } from 'recoil';
import { moviesNowPlayingState } from "../store/atoms/moviesAtom";
import { API_OPTIONS } from "../utils/constants";
import axios from 'axios';
import { useEffect } from 'react';
import { isUpcomingMoviesState } from '../store/selectors/isMovies';

export const useUpcomingMovies = () => {
    const setUpcomingMovies = useSetRecoilState(moviesNowPlayingState);
    const isUpcoming = useRecoilValue(isUpcomingMoviesState);

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
        !isUpcoming && getUpcomingMovies();
    }, []);
    
    // console.log(moviesNowPlaying.nowPlayingMovies);

};
