import FaulksStory from "/src/assets/images/faulks-story.svg?react";
// meglio: sposta in public e usa /images/sfondo.avif + preload, ma qui mantengo il tuo import
import Sfondo from "/src/assets/images/sfondo.png";
import { Link } from "@tanstack/react-router";

function FaulksPage() {
  return (
    <div className="relative min-h-lvh w-screen overflow-y-auto">
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
      <div className="relative z-10 min-h-dvh w-full flex items-center justify-center p-[clamp(12px,4vw,24px)]">
        <div className="w-[min(92vw,720px)] flex flex-col gap-[clamp(18px,3.5vw,24px)] p-8 pb-[calc(env(safe-area-inset-bottom)+1rem)] pt-[var(--safe-top)]">
          <div className="flex items-center gap-3">
            <FaulksStory />
          </div>
          <div className="flex flex-col gap-[clamp(8px,2.5vw,12px)]">
            <p className="font-[BrosOskon90] text-[clamp(1.3rem,3.2vw,1.125rem)] leading-[clamp(1.45,2.5vw,1.7)]">
              Buonasera a tutti. Questa non è solo una serata di musica. Questa
              è una discesa. Un viaggio nell’ombra che ogni essere umano porta
              con sé… anche quando finge di non vederla. <br /> Stasera vi
              presentiamo, per la prima volta dal vivo, un’opera che nasce dal
              buio – ma non per spaventarvi. Nasce per raccontarvi una storia.
              Una storia che, forse, è anche la vostra. <br /> Un concept album
              ispirato alle atmosfere e ai tormenti di Edgar Allan Poe… Ma non
              troverete corvi o cuori rivelatori. Troverete un uomo. Un uomo
              qualsiasi. Uno di quelli che potresti incrociare per strada, senza
              sapere cosa gli urla dentro. <br />
              Quest’uomo vive nel conflitto. Si trascina dietro paure che non sa
              nominare, ferite sociali che non si vedono a occhio nudo, ma
              bruciano ogni giorno. Ha un legame tossico con il passato, che lo
              tormenta e lo consola al tempo stesso. Sogna l’isolamento come
              salvezza, ma teme il silenzio che porta con sé. E ha perso. Ha
              perso strade, occasioni, persone care. E nel vuoto che lasciano,
              ha trovato parole. Suoni. E da lì, questo disco. <br /> Ogni brano
              che sentirete è un frammento del suo mondo interiore. Un passo più
              vicino a ciò che non osa dire ad alta voce. Siete pronti ad
              ascoltare? A guardare in faccia l’oscurità senza distogliere lo
              sguardo? <br /> Allora fatevi avanti e lasciate che la notte vi
              parli. Questo è Folks, un idea nata al tempo di quella notte buia
              che fu la pandemia e che nel corso degli anni ha chiesto di essere
              realizzata. <br />
              Folks è una realtà, immaginaria, ma, una realtà.
              <br /> Folks, è...un punto di vista.
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
