import { useRecoilState, useRecoilValue } from "recoil";
import lang from "./languageContants";
import { languageState } from "../store/atoms/languageConfig";
import { useRef } from "react";
import model from "../utils/geminiAI";
import axios from "axios";
import { API_OPTIONS } from "../utils/constants";
import { gptState } from "../store/atoms/gptAtom";

export const GptSearchBar = () => {
  const [geminiMovies,setGeminiMovies] = useRecoilState(gptState);
  const key = useRecoilValue(languageState);
  const inputSearchText = useRef(null);

  const gptPrompt = "Act as movie recommendation system and suggest some movies for query: " + inputSearchText.current?.value +
    "Only give me name of 5 movies name with comma separated result should always look like this example - Spider Man, Elemental, Phir Hera Pheri";

  const searchMoviesTMDB = async (movie) => {
    const URL = "https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&page=1";
    try {
      const response = await axios.get(URL, API_OPTIONS);
      // console.log(response);
      return response.data.results; // Get the first movie result

    } catch (error) {
      console.log("Error: ", error);
      return null; // Return null on error to avoid issues with Promise.all
    }
  }

  const handleGPTSearchBar = async () => {
    try {
      const result = await model.generateContent(gptPrompt);
      const response = await result.response;
      const text = await response.text(); // Await the text to ensure the full string is received
  
      // Split and clean up the movie names
      const gptSearchRes = text.split(",").map(title => title.trim());
  
      // Search TMDB for each movie name
      const TMDBRes = await Promise.all(gptSearchRes.map(movie => searchMoviesTMDB(movie)));
  
      
      // console.log(TMDBRes);
      // Set the state with the movie names and search results
      setGeminiMovies(prevState => ({
        ...prevState,
        moviesName: gptSearchRes,
        moviesResults: TMDBRes
      }));

      // console.log(geminiMovies.moviesResults);
      // console.log(geminiMovies.moviesName);
  
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div className="md:pt-[10%] pt-[40%] flex justify-center">
    <form
      className="m-4 p-4 bg-gray-800 rounded-lg w-full max-w-lg grid grid-cols-12 gap-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        ref={inputSearchText}
        placeholder={lang[key.lang].gptSearchPlaceholder}
        type='text'
        className="col-span-12 md:col-span-9 bg-gray-700 text-white rounded-lg p-4 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-gray-600"
      />
      <button
        className='col-span-12 md:col-span-3 bg-red-500 text-white rounded-lg p-4 hover:bg-red-600 focus:outline-none'
        onClick={handleGPTSearchBar}
      >
        {lang[key.lang].search}
      </button>
    </form>
  </div>
  
  );
};
