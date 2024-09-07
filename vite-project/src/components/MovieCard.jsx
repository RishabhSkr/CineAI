import { useState, useEffect } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import Modal from "./Modal";
import axios from "axios";
import { API_OPTIONS } from "../utils/constants";
import ShimmerLoader from "./ShimmerLoader";
const MovieCard = ({ movieId, posterPath }) => {
  const [showModal, setShowModal] = useState(false);
  const [movieDetails, setMovieDetail] = useState(null);
  // console.log(movieDetails)
  useEffect(() => {
    if (!movieId) return;

    setMovieDetail(null); // Clear previous details when a new movie is clicked

    const getMovieDetails = async () => {
      const URL = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
      try {
        const res = await axios.get(URL, API_OPTIONS);
        setMovieDetail(res.data);
      } catch (error) {
        console.error("Error fetching movie details: ", error);
      }
    };

    getMovieDetails();
  }, [movieId]); // Refetch details when movieId changes

  const handleMovieClick = () => {
    setShowModal(true); // Show modal on click
  };

  if (!posterPath) return null;

  return (
    <div className="w-36 md:w-48 flex-shrink-0">
      <img
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
        className="w-full h-auto object-cover rounded-lg"
        onClick={handleMovieClick} // Open modal when clicked
      />

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {movieDetails ? (
            <div className="flex flex-col items-center space-y-4 max-h-[80vh] overflow-y-auto scrollbar-hide p-4">
              <img
                alt="Movie Poster"
                src={IMG_CDN_URL + posterPath}
                className="w-auto h-auto object-cover rounded-lg mb-4"
              />
              <div className="text-center text-white">
                <h1 className="text-2xl font-bold mb-2">{movieDetails.title}</h1>
                <p className="text-lg mb-2">{movieDetails.overview}</p>
                <p className="text-lg mb-2 text-gray-500">Rating: {movieDetails.vote_average}</p>
            
              <p className="text-lg mb-2 text-gray-500">
                Genres: {movieDetails.genres.map((genre) => genre.name).join(", ")}
              </p>
                <p className="text-sm text-gray-500">
                  Release Date: {movieDetails.release_date}
                </p>
              </div>
            </div>
          ) : (
            <ShimmerLoader />
          )}
        </Modal>
      )}
    </div>
  );
};

export default MovieCard;
