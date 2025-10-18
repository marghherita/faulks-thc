
import { Button } from './ui/button'

function LandingPage() {
 return (
    <div
      className='relative bg-[url("/src/assets/images/landing-page-bg.png")] bg-contain bg-center h-screen w-screen flex items-end justify-center pb-16 border border-red-500 
      '
    >
      <Button
        variant="start"
        size={"start"}
        className=" l"
      >
        INIZIA
      </Button>
    </div>
  )
}

export default LandingPage