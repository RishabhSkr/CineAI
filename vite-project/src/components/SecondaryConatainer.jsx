import { MovieList } from './MovieList'
import { useRecoilValue } from 'recoil'
import { moviesNowPlayingState } from '../store/atoms/moviesAtom'

export const SecondaryConatainer = () => {
  const moviesObj = useRecoilValue(moviesNowPlayingState);
  // console.log(moviesObj.nowPlayingMovies.results)
  return (
    moviesObj.nowPlayingMovies && (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList title={'Now Playing'} movies={moviesObj.nowPlayingMovies.results} />
          <MovieList title={'Trending'} movies={moviesObj.nowPlayingMovies.results} />
          <MovieList title={'Upcoming Movies'} movies={moviesObj.nowPlayingMovies.results} />
          <MovieList title={'Horror'} movies={moviesObj.nowPlayingMovies.results} />
        </div>
      </div>
    )
  );
}
