import Tracklist from "/src/assets/images/tracklist.svg?react";
import Atto1 from "/src/assets/images/atto1.svg?react";
import Atto2 from "/src/assets/images/atto2.svg?react";
import Intervallo from "/src/assets/images/intervallo.svg?react";
import TestiButton from "/src/assets/images/testi-button.svg?react";
import Sfondo from "/src/assets/images/sfondo.png";
import { Link } from "@tanstack/react-router";

function TracklistPage() {
  return (
    <div className="relative min-h-dvh w-screen overflow-y-auto flex items-center justify-center p-[clamp(12px,4vw,24px)]">
      {/* Background */}
      <img
        src={Sfondo}
        alt=""
        aria-hidden
        decoding="async"
        loading="eager"
        className="absolute inset-0 z-0 h-full w-full object-fit pointer-events-none select-none"
      />

      {/* Content */}
      <div className="relative z-10 w-[min(92vw,720px)] flex flex-col gap-[clamp(2rem,3.5vw,24px)] p-8">
        <div className="flex items-center gap-3">
          <Tracklist />
        </div>

        <div className="flex flex-col gap-[clamp(2rem,2.5vw,12px)]">
          <div className="flex flex-col gap-[clamp(8px,2.5vw,12px)]">
            <Atto1 />

            <ol>
              <li className="font-[BrosOskon90] text-[clamp(1.3rem,3.2vw,1.125rem)] leading-[clamp(1.45,2.5vw,1.7)]">
                1. FROM DUSK TO CREATION [intro]
              </li>
              <li className="font-[BrosOskon90] text-[clamp(1.3rem,3.2vw,1.125rem)] leading-[clamp(1.45,2.5vw,1.7)]">
                2. STARING AT THE SEA
              </li>
              <li className="font-[BrosOskon90] text-[clamp(1.3rem,3.2vw,1.125rem)] leading-[clamp(1.45,2.5vw,1.7)]">
                3. THE UNSEEN
              </li>
              <li className="font-[BrosOskon90] text-[clamp(1.3rem,3.2vw,1.125rem)] leading-[clamp(1.45,2.5vw,1.7)]">
                4. TIME OF THE STARS
              </li>
              <li className="font-[BrosOskon90] text-[clamp(1.3rem,3.2vw,1.125rem)] leading-[clamp(1.45,2.5vw,1.7)]">
                5. AFTER DARK
              </li>
              <li className="font-[BrosOskon90] text-[clamp(1.3rem,3.2vw,1.125rem)] leading-[clamp(1.45,2.5vw,1.7)]">
                6. THE MAN OF THE CROWD
              </li>
            </ol>
          </div>

          <Intervallo />

          <div className="flex flex-col gap-[clamp(8px,2.5vw,12px)]">
            <Atto2 />

            <ol>
              <li className="font-[BrosOskon90] text-[clamp(1.3rem,3.2vw,1.125rem)] leading-[clamp(1.45,2.5vw,1.7)]">
                1. CLOUDY MEMORIES [instr.]
              </li>
              <li className="font-[BrosOskon90] text-[clamp(1.3rem,3.2vw,1.125rem)] leading-[clamp(1.45,2.5vw,1.7)]">
                2. OBSESSION
              </li>
              <li className="font-[BrosOskon90] text-[clamp(1.3rem,3.2vw,1.125rem)] leading-[clamp(1.45,2.5vw,1.7)]">
                3. IL BUIO NELLA CASA DI LEGO
              </li>
              <li className="font-[BrosOskon90] text-[clamp(1.3rem,3.2vw,1.125rem)] leading-[clamp(1.45,2.5vw,1.7)]">
                4. DODICIMESIDIDICEMBRE
              </li>
              <li className="font-[BrosOskon90] text-[clamp(1.3rem,3.2vw,1.125rem)] leading-[clamp(1.45,2.5vw,1.7)]">
                5. EUPHORIA
              </li>
              <li className="font-[BrosOskon90] text-[clamp(1.3rem,3.2vw,1.125rem)] leading-[clamp(1.45,2.5vw,1.7)]">
                6. ALONE [Eve Of The End]
              </li>
            </ol>
          </div>
        </div>

        <Link
          to="/lyrics"
          className="flex flex-col items-center justify-center"
        >
          <TestiButton />
        </Link>

        <div className="flex justify-end">
          <Link
            to="/menu"
            className="italic font-[BrosOskon90] text-[clamp(1.2rem,3vw,1.05rem)]"
          >
            ← Torna al menu
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TracklistPage;
