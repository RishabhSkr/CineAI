import { useRecoilValue, useSetRecoilState } from "recoil";
import { isUserLoggedInState } from "../store/selectors/isUserLogged";
import { getAuth, signOut } from "firebase/auth";
import { useUserActions } from "../Hooks/userActions";
import { useNavigate } from "react-router-dom";
import { userState } from "../store/atoms/userAtom";
import { LOGO } from "./constants";
import { gptState } from "../store/atoms/gptAtom";

export const Header = () => {
  const setToggleGptState = useSetRecoilState(gptState);
  const isLoggedIn = useRecoilValue(isUserLoggedInState);
  const { userName, imageLink } = useRecoilValue(userState);
  // console.log(imageLink);
  const { removeUser } = useUserActions();

  // console.log(imageLink)

  const handleGptSearchbar= ()=>{
      // toggle 
        setToggleGptState(prevState => ({
              ...prevState,
              toggleGptSearchView: !prevState.toggleGptSearchView
          }));
   
  };
  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      removeUser();
    } catch (error) {
      console.error(
        "Failed const {removeUser } = useUserActions();to sign out:",
        error
      );
    }
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      ></img>
      {isLoggedIn ? (
        <div className="flex p-2">
          <button className="bg-blue-600 py-2 px-4 m-2 rounded-lg text-white"

          onClick={handleGptSearchbar}>
            GptSearch
          </button>
          <img
            className="h-12  w-12"
            alt="usericon"
            src={imageLink}
          />

          <p>{userName}</p>
          <LogoutButton handleLogout={handleLogout} />
        </div>
      ) : null}
    </div>
  );
};

const LogoutButton = ({ handleLogout }) => {
  const navigate = useNavigate();
  return (
    <>
      <button
        type="button"
        className="py-2.5 px-5 
                 me-2 mb-2 text-sm font-medium 
                 text-gray-900 focus:outline-none 
                 rounded-lg hover:text-blue-700 
                 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700
                dark:text-gray-400 dark:border-gray-600 dark:hover:text-white"
        onClick={async () => {
          await handleLogout();
          navigate("/");
        }}
      >
        Logout
      </button>
    </>
  );
};
