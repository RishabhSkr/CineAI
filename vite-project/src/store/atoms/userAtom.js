import { atom } from "recoil";

export const userState = atom({
  key: 'userState', // unique ID (with respect to other atoms/selectors)
  default: {
    userName: null,
    userEmail: null
  }, // default value (aka initial state)
});
