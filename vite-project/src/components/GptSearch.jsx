import { GptMovieSuggestion } from "./GptMovieSuggestion"
import { GptSearchBar } from "./GptSearchBar"
import { BACKGROUND } from "./constants"
export const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
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
