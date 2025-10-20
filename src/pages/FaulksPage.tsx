import FaulksStory from "/src/assets/images/faulks-story.svg?react";
// meglio: sposta in public e usa /images/sfondo.avif + preload, ma qui mantengo il tuo import
import Sfondo from "/src/assets/images/sfondo.png";
import { Link } from "@tanstack/react-router";

function FaulksPage() {
  return (
    <div className="relative min-h-lvh w-screen overflow-y-auto p-[clamp(12px,4vw,24px)]">
      {/* Background */}
      <img
        src={Sfondo}
        alt=""
        aria-hidden
        decoding="async"
        fetchPriority="high"
        loading="eager"
        className="absolute inset-0 z-0 h-full w-full object-cover pointer-events-none select-none"
      />

      {/* Content */}
      <div className="relative z-10 min-h-dvh w-full flex items-center justify-center py-8">
        <div className="w-[min(92vw,720px)] flex flex-col gap-[clamp(2rem,3.5vw,24px)] p-8 pb-[calc(env(safe-area-inset-bottom)+1rem)] pt-[var(--safe-top)]">
          <div className="flex items-center gap-3">
            <FaulksStory />
          </div>
          <div className="flex flex-col gap-[clamp(8px,2.5vw,12px)]">
            <p className="font-[BrosOskon90] text-[clamp(1.3rem,3.2vw,1.125rem)] leading-[clamp(1.45,2.5vw,1.7)]">
              Benvenuti alla premiére di Faulks.
              <br />
              <br />
              Questa sera non assisterete a un semplice concerto. Questa sera vi
              presenteremo, per la prima volta dal vivo, un opera che nasce dal
              buio, ma non per spaventarvi, ma per raccontarvi una storia, una
              storia che, forse, è anche la vostra.
              <br /> Un concept album ispirato alle atmosfere e ai tormenti di
              Edgar Allan Poe, dove vi addentrerete nel labirinto mentale di un
              uomo che ha deciso — con grande stile e un pizzico di disperazione
              — di isolarsi dal mondo. Perché? Perché il mondo è un posto
              complicato. Troppi dubbi, troppi mali, troppi errori. <br />
              <br />E così poco tempo.
              <br />
              <br /> Il nostro protagonista, un comune uomo con moderni affanni
              e antichi fardelli, ha scelto di chiudersi in se stesso. Sogna
              l’isolamento come salvezza, ma teme il silenzio che porta con sé.
              E ha perso. Ha perso strade, occasioni, persone care. E nel vuoto
              che lasciano, ha trovato parole e suoni. <br /> E da lì, in un
              tempo indefinito, abbiamo scritto quest'opera fuori posto. La
              nostra personale visione dell'uomo della folla. Noi, i Time Haven
              Club, siamo qui oggi per raccontarvi questo suo percorso. Un
              racconto fatto, fissando un mare piatto, di stelle che non danno
              risposte, di case di lego buie, di mesi dicembre che vorremmo
              eterni e altri pensieri al tramonto. Una storia che si muove tra
              l’ossessione, la solitudine, e quella nebbia che chiamiamo
              “memoria”. <br /> <br />
              Stasera sul palco ci sarà: <br />
              Gino Asero, alle tastiere. <br />
              Salvo Savatteri, alle chitarre. <br />
              Marcello Romeo, al basso. <br />
              Marco Giugno, alla batteria.
              <br />
              Enza Maugeri, alla voce. <br />
              Enzo Somma, alla voce e chitarra.
              <br />
              <br />
              Preparatevi a viaggiare con noi. Non servono bagagli, solo un po’
              di coraggio e la voglia di guardare dentro.
              <br /> Dentro di voi.
              <br /> Dentro di lui.
              <br /> Dentro il buio. <br />
              <br />
              Benvenuti nei meandri di...Faulks!
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
    </div>
  );
}

export default FaulksPage;
