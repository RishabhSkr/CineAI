import  PlayButton from '../assets/netflixPlayButton.png'
import infoIcon from '../assets/infoIcon.png'
export const VideoTitle = ({title,overview}) => {
  return (
    
    <div className=' w-screen aspect-video pt-[20%] bg-gradient-to-r from-black absolute  text-white px-24'>
        <h1 className='text-6xl font-bold '>{title}</h1>
        <p className='  py-4 text-lg w-1/4 hidden lg:block'>{overview}</p>
        <div className='flex  lg:flex-row text-base px-'>
            <button className='p-4
                            bg-white
                            px-8 
                            text-black
                             rounded-md hover:bg-opacity-80
                             '>
                            <img className='h-7 w-7 inline-block' src={PlayButton}></img>
                            Play</button>
            <button className='p-4
                            bg-[#5d5353]
                       
                          
                            text-white
                             rounded-md mx-4 hover:bg-opacity-80'>
                             <img className='h-6 w-6 inline-block' src={infoIcon} style={{ marginRight: '8px' }}></img>
                             More Info</button>
        </div>
    </div>
  )
}