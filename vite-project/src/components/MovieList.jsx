import MovieCard from "./MovieCard";

export const MovieList = ({ title, movies = [] }) => {
  if (!movies.length) {
    return <p className="text-white">No movies found.</p>; 
  }

  return (
    <div className="px-6 py-4">
      <h1 className="text-lg md:text-3xl text-white mb-4">{title}</h1>
      <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
        {movies.map((movie, index) => {
          // Ensure movie object is valid and has poster_path
          if (movie && movie.poster_path) {
            return (
              <MovieCard key={movie.id || index} movieId = {movie.id} posterPath={movie.poster_path} />
            );
          } else {
            // Handle cases where movie or poster_path is not available
            return (
              <div key={index} className="w-36 md:w-48 bg-gray-700 rounded-lg p-4 flex items-center justify-center">
                <p className="text-white">No image available</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default MovieList;
