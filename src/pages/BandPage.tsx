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
            Questa sera vi presenteremo, per la prima volta dal vivo, un’opera
            che nasce dal buio, ma non per spaventarvi, ma per raccontarvi una
            storia, una storia che, forse, è anche la vostra. <br /> Un concept
            album ispirato alle atmosfere e ai tormenti di Edgar Allan Poe, dove
            vi addentrerete nel labirinto mentale di un uomo che ha deciso, con
            grande stile e un pizzico di disperazione, di isolarsi dal mondo.
            <br /> Perché? Perché il mondo è un posto complicato. Troppa dubbi,
            troppi mali, troppi errori. E così poco tempo.
            <br />
            <br /> Il nostro protagonista, un comune uomo con moderni affanni e
            antichi fardelli, ha scelto di chiudersi in se stesso.
            <br /> Sogna l’isolamento come salvezza, ma teme il silenzio che
            porta con sé.
            <br /> E ha perso. Ha perso strade, occasioni, persone care. E nel
            vuoto che lasciano, ha trovato parole. Suoni. E da lì, in un tempo
            indefinito, abbiamo scritto quest'opera fuori posto. La nostra
            personale visione dell'uomo della folla.
            <br /> Noi, i Time Haven Club, siamo qui oggi per raccontarvi il suo
            viaggio.
            <br /> Una storia fatta, fissando un mare piatto, di stelle che non
            danno risposte, di case di Lego buie, mesi di dicembre che vorremmo
            eterni e altri pensieri al tramonto. Una storia che si muove tra
            l’ossessione, la solitudine, e quella nebbia che chiamiamo
            “memoria”.
            <br />
            <br /> Preparatevi a viaggiare con noi.
            <br /> Non servono bagagli, solo un po’ di coraggio e la voglia di
            guardare dentro.
            <br />
            Dentro di voi. Dentro di lui. Dentro il buio.
            <br />
            Benvenuti nei meandri di Faulks! <br />
            <br />
            Time Haven Club.
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
