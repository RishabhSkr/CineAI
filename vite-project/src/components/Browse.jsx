import { isUserLoggedInState } from "../store/selectors/isUserLogged";
import { Header } from "./Header";
import { useNavigate} from "react-router-dom";
import { useEffect} from 'react'
import { useRecoilValue } from "recoil";
import { useNowPlayingMovies } from "../Hooks/moviesNowPlaying";
import { MainContainer } from "./MainContainer";
import { SecondaryConatainer } from "./SecondaryConatainer";
import { usePopularMovies } from "../Hooks/popularMovies";
import { useUpcomingMovies } from "../Hooks/upcomingMovies";
const Browse = () => {
  const isUserLogged= useRecoilValue(isUserLoggedInState);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isUserLogged) {
      navigate('/');
    }
  }, [isUserLogged, navigate]);

  usePopularMovies();
  useNowPlayingMovies();
  useUpcomingMovies();
  if (!isUserLogged) {
    return null; // Return null to avoid rendering the component
  }

  return (
    <div>
    <Header/>
    <MainContainer/>
    <SecondaryConatainer/>
        {
          /* 
            Main Container
              - Video background
              - Video Title
            - SecondaryConatainer
              - MoviesList*n
                - cards*n
         */
         }
    </div>
  );
};



export default Browse;
