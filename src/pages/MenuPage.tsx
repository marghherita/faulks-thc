import BandButton from "/src/assets/images/band-button.svg?react";
import FaulksButton from "/src/assets/images/faulks-button.svg?react";
import TracklistButton from "/src/assets/images/tracklist-button.svg?react";
import LyricsButton from "/src/assets/images/lyrics-button.svg?react";
import Sfondo from "/src/assets/images/sfondo.png";
import { Link } from "@tanstack/react-router";

function MenuPage() {
  return (
    <div className="relative h-dvh overflow-hidden">
      {/* Background image behind content */}
      <img
        src={Sfondo}
        alt=""
        decoding="async"
        className="absolute inset-0 z-0 w-full h-full object-cover pointer-events-none"
      />
      {/* Foreground content */}
      <div className="relative z-10 h-dvh pt-12 flex flex-col items-center justify-center gap-6">
        <Link to="/band">
          <BandButton />
        </Link>
       
        <FaulksButton />
        <TracklistButton />
        <LyricsButton />
      </div>
    </div>
  );
}

export default MenuPage;
