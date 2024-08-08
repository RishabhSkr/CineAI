import { useRecoilState } from 'recoil';
import { moviesNowPlayingState } from '../store/atoms/moviesAtom';
import { VideoBackground } from './VideoBackground';
import { VideoTitle } from './VideoTitle';
export const MainContainer = () => {
  const [movieObj, setMoviesObj] = useRecoilState(moviesNowPlayingState);
  const movies = movieObj.nowPlayingMovies.results;

  if(!movies)return ;
  const mainMovie = movies[0];
  // console.log(mainMovie)
  const {original_title,overview,id}=mainMovie;
  // console.log(id);
  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  );
};
