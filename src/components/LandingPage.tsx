
import { Button } from './ui/button'

function LandingPage() {
 return (
    <div
      className='relative bg-[url("/src/assets/images/sfondo_landing.png")] bg-cover bg-no-repeat bg-center w-screen flex flex-col items-center justify-between pb-16  h-dvh'
    >

      <div className=' h-[50%] pt-12 items-center flex flex-col justify-between '>
        <div className='items-center flex flex-col just'>

        <img  src="/src/assets/images/thc-logo.png" alt="" />
        <p className='text-[#FEF3D9] font-[BrosOskon90] font-light text-[1.8rem]'>presentano</p>
        </div>

        <div className='items-center w-[80%]'>
          <img  src="/src/assets/images/faulks-landing.png" alt="" />
        </div>
      </div>

      
      <Button
        variant="start"
        size={"start"}      >
        INIZIA
      </Button>
    </div>
  )
}

// [url("/src/assets/images/landing-page-bg.png")]

export default LandingPage