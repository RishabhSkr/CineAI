import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { isUserLoggedInState } from "../store/selectors/isUserLogged";
import { getAuth, signOut } from "firebase/auth";
import { useUserActions } from "../Hooks/userActions";
import { useNavigate } from "react-router-dom";
import { userState } from "../store/atoms/userAtom";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { gptState } from "../store/atoms/gptAtom";
import { languageState } from "../store/atoms/languageConfig";
import lang from "./languageContants";

export const Header = () => {
  const [toggleGpt, setToggleGptState] = useRecoilState(gptState);
  const isLoggedIn = useRecoilValue(isUserLoggedInState);
  const { userName, imageLink } = useRecoilValue(userState);
  const setLanguageState = useSetRecoilState(languageState);
  const { removeUser } = useUserActions();

  // console.log(imageLink)

  const handleGptSearchbar = () => {
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

  const handleLanguageChange = (e)=>{
    // console.log(e.target.value);
    setLanguageState(prevState=>({
      ...prevState,
      lang:e.target.value
    }))
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-center md:justify-between">
      <img
        className="w-44 md:mx-0 mx-auto"
        src={LOGO}
        alt="logo"
      />
      {isLoggedIn ? (
  <div className="flex flex-wrap items-center ml-auto p-2 space-x-2">
    {toggleGpt.toggleGptSearchView ? (
      <select
        className="p-2 bg-gray-800 text-white border-none outline-none text-xs sm:text-sm"
        onChange={handleLanguageChange}
      >
        {SUPPORTED_LANGUAGES.map(lang => (
          <option key={lang.identifier} value={lang.identifier}>
            {lang.name}
          </option>
        ))}
      </select>
    ) : null}

    <button
      className="bg-transparent py-1 px-2 rounded-lg text-white border-none outline-none text-xs sm:text-sm"
      onClick={handleGptSearchbar}
    >
      {toggleGpt.toggleGptSearchView ? "HomePage" : "GPT Search"}
    </button>

    <img
      className="h-10 w-10 hidden md:inline-block"
      alt="usericon"
      src={imageLink}
    />

    <p className="text-white ml-1 text-xs sm:text-sm">{userName}</p>

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
        className="py-2 px-4 
                  text-sm font-medium 
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
