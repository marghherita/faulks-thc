import { Button } from "../components/ui/button";
import ThcLogo from "/src/assets/images/thc.svg?react";
import FaulksLanding from "/src/assets/images/faulks-landing.svg?react";
import SfondoLanding from "/src/assets/images/sfondo_landing.png";
import { Link } from "@tanstack/react-router";



function LandingPage() {
  return (
    <div className="relative w-screen h-dvh flex flex-col items-center justify-between pb-16 overflow-hidden">
      {/* LCP background image */}
      <img
        src={SfondoLanding}
        alt=""
        aria-hidden={true}
        decoding="async"
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 z-0 w-full h-full object-cover object-center pointer-events-none select-none"
      />

      {/* Foreground content */}
      <div className="relative z-10 h-[50%] pt-12 items-center flex flex-col justify-between ">
        <div className="items-center flex flex-col justify-center">
          <ThcLogo />
          <p className="text-[#FEF3D9] font-[BrosOskon90] font-light text-[1.8rem]">
            presentano
          </p>
        </div>

        <div className="items-center  flex flex-col justify-center gap-0.5">
          <FaulksLanding className=" w-[80%]" />
          <p className="text-[#FEF3D9] font-[BrosOskon90] font-light text-[1rem]">
            12 - 13 dicembre
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2">

        {/* <Button variant="start" className="liquid-glass px-8 disabled">
          <a href="https://www.ctbox.it/C23/6031/Content.aspx/Eventi/Concerti/TIME_HAVEN_CLUB_in_%22FAULKS" target="_blank" rel="noopener noreferrer" className="relative z-10">
            BIGLIETTI
          </a>
        </Button> */}
        <Button variant="start" className="liquid-glass px-8 disabled">
          <Link to="/menu" className="relative z-10">
            INIZIA
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default LandingPage;
