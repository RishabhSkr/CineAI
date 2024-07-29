import { selector } from "recoil";
import { userState } from "../atoms/userAtom";

export const isUserLoggedInState = selector({
  key: 'isUserLoggedInState', // should be unique ID
  get: ({ get }) => {
    const state = get(userState);
    return state.userEmail !== null; 
  }
});

export const userEmailState = selector({
  key: 'userEmailState',
  get: ({ get }) => {
    const state = get(userState);
    return state.userEmail;
  }
});

export const userNameState = selector({
  key: 'userNameState',
  get: ({ get }) => {
    const state = get(userState);
    return state.userName;
  }
});