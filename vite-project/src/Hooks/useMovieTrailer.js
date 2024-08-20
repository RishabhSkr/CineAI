import axios from "axios";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { trailerKeyState } from "../store/atoms/moviesAtom.jsx";
import { useRecoilState } from "recoil";

export const useMovieTrailer = (movieId) => {
    const [trailerId, setTrailerId] = useRecoilState(trailerKeyState)
    console.log(trailerId);
    // fetch the video trailer from yt using movieid
    const getMainMovieVideos = async () => {
        const URL = 'https://api.themoviedb.org/3/movie/'+movieId+'/videos';
        try {
            const res = await axios.get(URL, API_OPTIONS);
            // console.log(res.data);
            const videoData = res.data.results;
            const filterData = videoData.filter((video) => video.type == 'Trailer');
            console.log(filterData);
            const trailer = filterData.length ? filterData[0] : videoData[0];
            console.log(trailer);
            setTrailerId(trailer.key);


        } catch (error) {
            console.log("Error: ", error);
        }
    };

    useEffect(() => {
        getMainMovieVideos();
    }, []);
}
export default useMovieTrailer;
