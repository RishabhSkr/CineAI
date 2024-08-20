import { useRecoilValue } from 'recoil';
import { gptState } from '../store/atoms/gptAtom';
import MovieList from './MovieList';

export const GptMovieSuggestion = () => {
  const { moviesName, moviesResults } = useRecoilValue(gptState);

  // Handle if moviesName or moviesResults are not available
  if (!moviesName || !moviesResults) {
    return null;
  }

  return (
    <div>
      <div className='flex flex-wrap bg-gradient-to-b from-black'>
        {moviesName.map((movieName, index) => {
          // Get the movies array for the current category
          const moviesForCategory = moviesResults[index] || [];
          return (
            <MovieList key={movieName} title={movieName} movies={moviesForCategory} />
          );
        })}
      </div>
    </div>
  );
};
