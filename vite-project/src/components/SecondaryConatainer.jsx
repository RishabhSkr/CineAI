import { MovieList } from './MovieList'
import { useRecoilValue } from 'recoil'
import { moviesNowPlayingState } from '../store/atoms/moviesAtom'

export const SecondaryConatainer = () => {
  const moviesState = useRecoilValue(moviesNowPlayingState);
  const nowPlayingMovies = moviesState.nowPlayingMovies;
  const popularMovies = moviesState.popularMovies;
  const upcomingMovies = moviesState.upcomingMovies;

    // console.log(popularMovies)
    // console.log(nowPlayingMovies)
  return (
    moviesState && (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList title={'Now Playing'} movies={nowPlayingMovies.results} />
          <MovieList title={'Popular'} movies={popularMovies.results} />
          <MovieList title={'Upcoming'} movies={upcomingMovies.results} />
          
        </div>
      </div>
    )
  );
}
