import { atom } from "recoil";
export const gptState = atom({
    key: 'gptState', // unique ID (with respect to other atoms/selectors)
    default: {
        toggleGptSearchView:false,
        moviesName:null,
        moviesResults:null,
    } // default value (aka initial state)
});