
import { Button } from './ui/button'

function LandingPage() {
 return (
    <div
      className='relative bg-[url("/src/assets/images/landing-page-bg.png")] bg-cover bg-no-repeat bg-center w-screen flex items-end justify-center pb-16  h-dvh'
    >
      <Button
        variant="start"
        size={"start"}
      >
        INIZIA
      </Button>
    </div>
  )
}

// [url("/src/assets/images/landing-page-bg.png")]

export default LandingPage