import { Button } from "./ui/button";
import ThcLogo from "/src/assets/images/thc-logo.png";
import FaulksLanding from "/src/assets/images/faulks-landing.png";

function LandingPage() {
  return (
    <div className='relative bg-[url("/src/assets/images/sfondo_landing.png")] bg-cover bg-no-repeat bg-center w-screen flex flex-col items-center justify-between pb-16  h-dvh'>
      <div className=" h-[50%] pt-12 items-center flex flex-col justify-between ">
        <div className="items-center flex flex-col justify-center">
          <img src={ThcLogo} alt="" />
          <p className="text-[#FEF3D9] font-[BrosOskon90] font-light text-[1.8rem]">
            presentano
          </p>
        </div>

        <div className="items-center w-[80%]">
          <img src={FaulksLanding} alt="" />
        </div>
      </div>

      <Button
        variant="start"
        size="start"
        className="liquid-glass"  
      >
        INIZIA
      </Button>
    </div>
  );
}

// [url("/src/assets/images/landing-page-bg.png")]

export default LandingPage;
