import { useRecoilValue } from "recoil";
import lang from "./languageContants";
import { languageState } from "../store/atoms/languageConfig";
export const GptSearchBar = () => {
  const key = useRecoilValue(languageState);
  // console.log(key.lang)
  return (
    <div className="pt-[10%] flex justify-center">

      <form className="m-4 p-4 bg-gray-800 rounded-lg w-1/2 grid grid-cols-12">
        <input
          placeholder={lang[key.lang].gptSearchPlaceholder}
          type='text'
          className="col-span-9 bg-gray-700 mr-2 text-white rounded-lg p-4 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-gray-600"
        />
        <button className='col-span-3 bg-red-500 text-white rounded-lg p-4 hover:bg-red-600 focus:outline-none'>
          {lang[key.lang].search}</button>
      </form>
    </div>
  );
};
