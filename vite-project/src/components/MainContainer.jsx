import { useRecoilValue } from 'recoil';
import { moviesNowPlayingState } from '../store/atoms/moviesAtom';
import { VideoBackground } from './VideoBackground';
import { VideoTitle } from './VideoTitle';
import ShimmerLoader from './ShimmerLoader';
export const MainContainer = () => {
  let movieObj = useRecoilValue(moviesNowPlayingState);
  
  // Check if data is still loading
  if (!movieObj.nowPlayingMovies) {
    return <div><ShimmerLoader/></div>; // Display loading indicator while fetching data
  }

  const movies = movieObj.nowPlayingMovies.results;

  if (!movies || movies.length === 0) {
    return <div>No movies available</div>; // Handle case where there are no movies
  }

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
