import {useSetRecoilState } from "recoil";
import { userState } from "../atoms/userAtom"; // Correct the path if necessary

export const useUserActions = () => {
  const setUserState = useSetRecoilState(userState);
  const addUser = (user) => {
    setUserState({
      userName: user.displayName,
      userEmail: user.email
    });
  };

  const removeUser = () => {
    setUserState({
      userName: null,
      userEmail: null
    });
  };
  return { addUser, removeUser};
};
