import { useRecoilValue } from "recoil";
import { isUserLoggedInState,userNameState } from "../store/selectors/isUserLogged";
import { getAuth, signOut } from "firebase/auth";
import { useUserActions} from "../store/atoms/userActions";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const isLoggedIn = useRecoilValue(isUserLoggedInState);
  const userName = useRecoilValue(userNameState);
  console.log(userName);
  const { removeUser } = useUserActions();

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
        src=" https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      ></img>

      {isLoggedIn ? (
        <div className="flex p-2">
          <img
            className="h-12  w-12"
            alt="usericon"
            src="https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg"
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
