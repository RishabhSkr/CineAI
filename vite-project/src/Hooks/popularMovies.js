import { useSetRecoilState,useRecoilValue } from 'recoil';
import { moviesNowPlayingState } from "../store/atoms/moviesAtom";
import { API_OPTIONS } from "../utils/constants";
import axios from 'axios';
import { useEffect } from 'react';
import { isPopularMoviesState } from '../store/selectors/isMovies';

export const usePopularMovies = () => {
    const setPopularMovies = useSetRecoilState(moviesNowPlayingState);
    const isPopular = useRecoilValue(isPopularMoviesState);
    const getPopularMovies = async () => {
        const URL = 'https://api.themoviedb.org/3/movie/popular?page=1';
        try {
            const res = await axios.get(URL, API_OPTIONS);
            //   console.log(res.data);
              setPopularMovies(prevState =>({
                ...prevState,
                popularMovies:res.data
            }));
        } catch (error) {
            console.log("Error: ", error);
        }
    };
    useEffect(() => {
       !isPopular &&  getPopularMovies();
    }, []);
    
    // console.log(moviesNowPlaying.nowPlayingMovies);

};