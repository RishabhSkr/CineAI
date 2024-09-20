
import { useRecoilValue } from "recoil";
import { trailerKeyState } from "../store/atoms/moviesAtom";
import useMovieTrailer from "../Hooks/useMovieTrailer"

export const VideoBackground = ({ movieId }) => {
    const trailerId = useRecoilValue(trailerKeyState);
    // console.log(trailerId);
    useMovieTrailer(movieId);

    return (
        <div className="w-screen ">
        <iframe
            className="w-screen aspect-video"
            src={`https://www.youtube-nocookie.com/embed/${trailerId}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3`}
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{ border: 'none' }}>
        </iframe>
    </div>
    )
}
