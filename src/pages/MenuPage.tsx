import BandButton from '/src/assets/images/band-button.svg?react'
import FaulksButton from '/src/assets/images/faulks-button.svg?react'
import TracklistButton from '/src/assets/images/tracklist-button.svg?react'
import LyricsButton from '/src/assets/images/lyrics-button.svg?react'

function MenuPage() {
  return (
       <div className='relative bg-[url("/src/assets/images/sfondo.svg")] bg-cover bg-no-repeat bg-center w-screen  h-dvh'>
      <div className="h-dvh  pt-12 items-center flex flex-col justify-center gap-6 ">
 

        <BandButton />
        <FaulksButton />
        <TracklistButton />
        <LyricsButton />
      
     
      </div>

     
    </div>
  )
}

export default MenuPage