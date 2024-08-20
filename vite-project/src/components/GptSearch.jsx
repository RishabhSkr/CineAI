import { GptMovieSuggestion } from "./GptMovieSuggestion"
import { GptSearchBar } from "./GptSearchBar"
import { BACKGROUND } from "../utils/constants"
export const GptSearch = () => {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0  -z-10">
        <img
          src={BACKGROUND}
          alt='background'
          className='w-full h-full object-cover'
        />
         <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50"></div>
      </div>
      
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  )
}
