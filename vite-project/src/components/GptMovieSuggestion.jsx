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
    <div className='bg-gradient-to-b from-black p-4'>
      {moviesName.map((movieName, index) => {
        // Get the movies array for the current category
        const moviesForCategory = moviesResults[index] || [];
       
        return (
          <div className='mb-4' key={movieName}>
            <div className='overflow-x-scroll scrollbar-hide'>
              <div className='flex flex-nowrap'>
                <MovieList title={movieName} movies={moviesForCategory} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
