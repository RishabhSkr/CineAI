export const LOGO = "/logoAI.png"
export const BACKGROUND = "/output.gif"
export const  USERPIC = "https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg"
export const API_OPTIONS =  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ import.meta.env.VITE_TMDB_API_KEY 
    }
  };

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w200/"

export const SUPPORTED_LANGUAGES=[
  {identifier:"en", name : "English"},
  {identifier:"hindi", name : "Hindi"},
  {identifier:"spanish", name : "Spanish"}
];