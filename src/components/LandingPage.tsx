
import { Button } from './ui/button'

function LandingPage() {
 return (
    <div
      className='relative bg-[url("/src/assets/images/landing-page-bg.png")] bg-cover bg-center h-screen w-screen flex items-end justify-center pb-16'
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