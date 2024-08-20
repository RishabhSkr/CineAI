import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 flex-shrink-0">
      <img 
        alt="Movie Card" 
        src={IMG_CDN_URL + posterPath} 
        className="w-full h-auto object-cover rounded-lg" 
      />
    </div>
  );
};

export default MovieCard;
