import { atom } from "recoil";

export const languageState = atom({
    key:'languageState',
   default:{
    lang :'en',
   }
});