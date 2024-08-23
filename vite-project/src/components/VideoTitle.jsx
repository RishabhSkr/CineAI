import PlayButton from '../assets/netflixPlayButton.png'
import infoIcon from '../assets/infoIcon.png'
export const VideoTitle = ({ title, overview }) => {
  return (

    <div className='w-screen aspect-video pt-[30%] md:pt-[20%] bg-gradient-to-r from-black absolute text-white px-8 md:px-16'>
      <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
      <p className='py-4 text-lg w-1/4 hidden md:block'>{overview}</p>
      <div className='flex flex-row text-base mt-1 md:px-0'>
        <button className='p-2 sm:p-4 md:p-4
                            bg-white
                            px-4 sm:px-6 md:px-8
                            text-black
                            rounded-md hover:bg-opacity-80
                            text-sm sm:text-base md:text-base'>
          <img className='h-5 sm:h-6 md:h-7 w-5 sm:w-6 md:w-7 inline-block' src={PlayButton} alt="Play" />
          <span className='hidden sm:inline-block'>Play</span>
        </button>
        <button className='p-2 sm:p-4 md:p-4
                            bg-[#5d5353]
                            text-white
                            rounded-md mx-2 sm:mx-4 md:mx-4 hover:bg-opacity-80
                            text-sm sm:text-base md:text-base'>
          <img className=' mx-2 sm:h-6 md:h-6 w-5 sm:w-6 md:w-6 inline-block' src={infoIcon} alt="Info" style={{ marginRight: '8px' }} />
          <span className='hidden sm:inline-block'>More Info</span>
        </button>
      </div>
    </div>

  )
}