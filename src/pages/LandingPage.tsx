import { Button } from "../components/ui/button";
import ThcLogo from "/src/assets/images/thc.svg?react";
import FaulksLanding from "/src/assets/images/faulks-landing.svg?react";

import { Link } from "@tanstack/react-router";

function LandingPage() {
  return (
    <div className='relative bg-[url("/src/assets/images/sfondo_landing.png")] bg-cover bg-no-repeat bg-center w-screen flex flex-col items-center justify-between pb-16  h-dvh'>
      <div className=" h-[50%] pt-12 items-center flex flex-col justify-between ">
        <div className="items-center flex flex-col justify-center">
          <ThcLogo />
          <p className="text-[#FEF3D9] font-[BrosOskon90] font-light text-[1.8rem]">
            presentano
          </p>
        </div>


          <FaulksLanding className="items-center w-[80%]" />
     
      </div>

      <Link to="/menu">
        <Button
          variant="start"
          className="liquid-glass"
          size="start"
        >
          INIZIA
        </Button>
      </Link>
    </div>
  );
}



export default LandingPage;
