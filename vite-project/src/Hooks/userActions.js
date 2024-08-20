import {useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/userAtom"; // Correct the path if necessary
import { USERPIC } from "../utils/constants";

export const useUserActions = () => {
  const setUserState = useSetRecoilState(userState);
  const addUser = (user) => {
    // console.log(user.photoURL)
    setUserState({
      userName: user.displayName,
      userEmail: user.email,
      imageLink: USERPIC
    });
  };

  const removeUser = () => {
    setUserState({
      userName: null,
      userEmail: null,
      imageLink: USERPIC
    });
  };
  return { addUser, removeUser};
};
