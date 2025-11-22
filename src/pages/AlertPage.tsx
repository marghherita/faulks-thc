import Sfondo from "/src/assets/images/sfondo.png";

function AlertPage() {
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
            <h1 className="font-[Lexington] text-foreground tracking-wide leading-[1.1] text-[clamp(2.2rem,6vw,2.5rem)]">
              TIME HAVEN CLUB
            </h1>
          </div>
          <div className="flex flex-col gap-[clamp(8px,2.5vw,12px)]">
            <p className="font-[BrosOskon90] text-[clamp(1.3rem,3.2vw,1.125rem)] leading-[clamp(1.45,2.5vw,1.7)]">
              Cari amici, <br />
              con grande dispiacere vi informiamo che le date previste per la presentazione di Faulks non potranno svolgersi come annunciato. <br /> <br />

              Uno dei membri della band sta attraversando un delicato problema di salute che richiede tempo, attenzione e assoluto rispetto. La sua ripresa viene prima di tutto, e noi vogliamo essere al suo fianco fino a quando non sarà completamente rimesso. <br /> <br />

              Faulks è un progetto che parla di fragilità, ricerca e umanità: per questo preferiamo fermarci ora, per poter tornare sul palco quando saremo davvero in grado di condividere con voi l’energia e la verità che meritate. <br /> <br />

              Tutti coloro che hanno già acquistato i biglietti verranno ovviamente rimborsati. Se avete acquistato il biglietto online riceverete una mail con la procedura di rimborso. Per chi lo ha acquistato fisicamente nei punti vendita vi preghiamo di scriverci direttamente su timehavenclub@gmail.com. <br /> <br />

              Vi ringraziamo per il sostegno e la comprensione. <br />
              Vi terremo aggiornati sulle nuove date non appena ci sarà possibile. <br /> <br />

              Con affetto, <br />
              Time Haven Club
            </p>
          </div>


        </div>
      </div>
    </div>
  );
}

export default AlertPage;
