import BandPhoto from "/src/assets/images/band.jpeg";
import Bio from "/src/assets/images/bio.svg?react";
import Sfondo from "/src/assets/images/sfondo.png";
import { Link } from "@tanstack/react-router";

function BandPage() {
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
      <div className="relative z-10 w-[min(92vw,720px)] flex flex-col gap-[clamp(18px,3.5vw,24px)] p-8">
        <div className="flex items-center gap-3">
          <h1 className="font-[Lexington] text-foreground tracking-wide leading-[1.1] text-[clamp(2.2rem,6vw,2.5rem)]">
            TIME HAVEN CLUB
          </h1>
        </div>

        <div className="font-[BrosOskon90] text-[clamp(1.3rem,3.2vw,1.25rem)]">
          <p>Enzo Jester Somma – voce e chitarra</p>
          <p>Enza Maugeri – voce</p>
          <p>Salvo Savatteri – chitarra</p>
          <p>Marcello Romeo – basso</p>
          <p>Gino Asero – tastiere e synth</p>
          <p>Marco Giugno – batteria</p>
        </div>

        <img
          src={BandPhoto}
          alt="La band Time Haven Club"
          loading="lazy"
          decoding="async"
          className="w-full mt-4 rounded-[clamp(12px,4vw,22px)] object-cover aspect-[16/9] shadow-[0_6px_20px_rgba(0,0,0,0.25)]"
        />

        <div className="flex flex-col gap-[clamp(8px,2.5vw,12px)] mt-4">
          <Bio />

          <p className="font-[BrosOskon90] text-[clamp(1.3rem,3.2vw,1.125rem)] ">
            Nati nei primi anni ’90 come Golconda, i Time Haven Club hanno
            attraversato stagioni di silenzio, rinascite e trasformazioni. Dai
            primi demotape strumentali (First Tape, Another Ending Season) al
            ritorno nel 2014 con una nuova voce: più matura, più personale.
            <br />
            <br />
            Nel 2017 arriva l’EP Despite All This Darkness. Nel 2021 il primo
            album ufficiale Gathered at Dusk, firmato con G.T. Music
            Distribution.
            <br />
            <br />
            Ora è tempo di FAULKS (2025): un’opera rock in due atti, da vivere
            solo dal vivo, nei piccoli teatri. Un concept ispirato a Poe, ma
            profondamente autobiografico. Liriche, melodie, visioni.
            <br />
            <br /> Il viaggio continua. E stavolta, si entra nel cuore della
            notte.
          </p>
        </div>

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

export default BandPage;
