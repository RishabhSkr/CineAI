import { GptMovieSuggestion } from "./GptMovieSuggestion"
import { GptSearchBar } from "./GptSearchBar"

export const GptSearch = () => {
  return (
    <div className="">
       <GptSearchBar/>
       <GptMovieSuggestion/>
    </div>
  )
}
