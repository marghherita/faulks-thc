export interface Lyric {
    id: number;
    slug: string;
    title: string;
    pathSvg: string;
    intro: string;
    strumental: boolean;
    lyricEnglish?: string;
    lyricItalian?: string;
}

export const lyrics: Lyric[] = [
    {
        id: 1,
        slug: "from-dusk-to-creation",
        title: "FROM DUSK TO CREATION",
        pathSvg: "/src/assets/images/from-dusk.svg?react",
        intro: "A volte, è proprio dal caos più profondo che nasce la chiarezza. Questo brano è il suono di una rinascita, di una creazione che emerge dall'oscurità.",
        strumental: true,

    },
    {
        id: 2,
        slug: "starring-at-the-sea",
        title: "STARING AT THE SEA",
        pathSvg: "/src/assets/images/staring.svg?react",
        intro: "Nel silenzio ovattato del mattino, un sussulto improvviso rompe l’immobilità: la mente, ancora annebbiata, si muove tra la confusione e la malinconia. In questa alba interiore, ogni nota è una traccia ed ogni parola un frammento di verità da ricomporre.",
        strumental: false,
        lyricEnglish: "i) It was evening and morning <br/> Tuning, synchronized with my heart, <br/> I felt my beats like it was the first time <br/> I'm drawing all the lines of the stars <br/> The blackest morning sun in my eyes and crimson dew. <br/> Oh mirror.mirror, mirror of my desires, mark this moment, my life starts from here… <br/> Later on the way home I will fall, I'm no longer <br/> what I was trying to be, oh, oh no. <br/> <br/> After that early morning, i memorized in<br/> my head<br/> that I was so alone,<br/> that's when I caught sight of something out<br/> of the corner of my eye<br/> I recognize his voices, they still echo from<br/> afar <br/>the words return<br/> I see lightning, i go back in time <br/>The stage of emptiness<br/> I throw myself and blend in with the<br/> crowd<br/> The price of my loneliness <br/>is a burden, a burden I know. <br/>Turn to stone and go blind <br/> it's the only way I know, wherever I go<br/> Autumn leaf that falls silently out of sight,<br/> out of mind<br/> I still hear the voices, always and only close<br/> to me<br/> alone, I burn, let me shining, staring at the<br/> sea<br/> The stage of emptiness<br/> I throw myself and blend in with the <br/>crowd<br/> The price of my loneliness<br/> is a burden, a burden <br/><br/>iii) Haze and lucidity <br/>",


        lyricItalian: "i) Era sera e fu mattina <br/> Accordando, sincronizzato con il mio cuore, <br/> Sentivo i miei battiti come se fosse la prima volta <br/> Sto disegnando tutte le linee delle stelle, <br/> Il sole mattutino più nero nei miei occhi e la rugiada cremisi. <br/> Oh specchio. Specchio, specchio delle mie brame, fissa questo momento, la mia vita inizia da qui… <br/> Più tardi sulla via del ritorno cadrò, non sono più quello che stavo cercando di essere, oh, oh no.  <br/> <br/> ii) Il palcoscenico del vuoto<br/> Dopo quella mattina presto,<br/> ho memorizzato nella mia testa <br/>che ero così solo,<br/> è stato allora che ho visto qualcosa con la<br/> coda dell'occhio <br/> Riconosco le sue voci, riecheggiano ancora <br/>da lontano<br/> le parole ritornano <br/>Vedo un fulmine, torno indietro nel tempo.<br/> Il palcoscenico del vuoto <br/> Mi butto e mi mischio tra la folla <br/> Il prezzo della mia solitudine <br/> è un peso, un peso che conosco. <br/> Trasformati in pietra e diventa cieco<br/> è l'unico modo che conosco, ovunque vada <br/>foglie autunnale cadono silenziosamente <br/> fuori dalla vista, fuori dalla mente<br/> Sento ancora le voci, sempre e solo vicine a me <br/>solo, brucio, lasciami brillare, fissando il mare.<br/> Il palcoscenico del vuoto <br/>Mi butto e mi mischio tra la folla<br/> Il prezzo della mia solitudine<br/> è un peso, un peso che conosco. <br/><br/> iii) Foschia e lucidità <br/> Siamo i nostri sogni, una luce interiore così vicina all'oscurità. Noi siamo i campi, siamo il seme con carne e ossa rotte Un'altra volta, un'altra epoca, conosciamo il dolore prima delle ferite Il sole è alto, la luna è bassa, Il giorno è nelle mie mani. Via il cuscino verso il cielo Nego l'oscurità al mio destino   Il mio sorriso nascosto, le mie bugie fidate sono sogni e luci guida Io sono il sole, io sono la pioggia, io sono il riparo e il ponte Un altro uomo, un altro volto, incompreso e solo Il sole è basso, la luna è alta, sveglio nel cuore della notte. Nessun posto dove ridere, nessun posto dove piangere portami via, nella mia immortalità… foschia e lucidità...",
    },
    {
        id: 3,
        slug: "the-unseen",
        title: "THE UNSEEN",
        pathSvg: "/src/assets/images/unseen.svg?react",
        intro: "Un battito sommesso, ma pulsante. Questo brano dà voce agli invisibili: i senza tetto, gli emarginati, coloro che non riescono a indossare la maschera giusta per adattarsi a un mondo che corre troppo veloce.",
        strumental: false,
        lyricEnglish: "What I left behind <br/> Hunts me every day <br/> words of pain and love <br/> Darkening what I know <br/> annihilating all my certainties <br/> Searching for the limbs, I move without leaving shadows, traces and marks, nothing of myself <br/> destroying all the memories I have <br/><br/> I no longer find the wisdom, my tiredness runs along the lines <br/> And I try to hide my anger with smiles and tears and ugly masks <br/><br/> I'm the unseen <br/> A fading Ghost <br/><br/> The thresholds of my pain remind me every time <br/> the weakness of true love <br/> the void in my head <br/> and a thousand years of healing in loneliness <br/><br/> I no longer find the wisdom, my tiredness runs along the lines <br/> And I try to hide my anger with smiles and tears and ugly masks <br/><br/> I'm the unseen <br/> A fading Ghost",

        lyricItalian: "Quello che ho lasciato dietro di me <br/> Mi dà la caccia ogni giorno <br/> parole di dolore e amore <br/> oscurando ciò che so, <br/> annientando tutte le mie certezze. <br/> Cercando gli arti, mi muovo senza lasciare ombre, tracce e segni, ma niente di me stesso <br/> distruggendo tutti i ricordi che ho <br/><br/> Non trovo più la saggezza, la mia stanchezza corre lungo le linee <br/> E cerco di nascondere la mia rabbia con sorrisi, lacrime e brutte maschere <br/><br/> Io sono l'invisibile <br/> Un fantasma che svanisce <br/><br/> Le soglie del mio dolore <br/> Mi ricordano ogni volta <br/> la debolezza del vero amore <br/> il vuoto nella mia testa <br/> e mille anni di guarigione nella solitudine <br/><br/> Non trovo più la saggezza, la mia stanchezza corre lungo le linee <br/> E cerco di nascondere la mia rabbia con sorrisi, lacrime e brutte maschere <br/><br/> Io sono l'invisibile <br/> Un fantasma che svanisce"
    },
    {
        id: 4,
        slug: "time-of-the-stars",
        title: "TIME OF THE STARS",
        pathSvg: "/src/assets/images/time-stars.svg?react",
        intro: "Ci sono perdite che scavano dentro come tempeste silenziose, lasciando vuoti che nessun tempo può colmare. Questo brano è una preghiera sommessa rivolta a chi non c’è più, ma continua a vivere tra le pieghe della memoria e che ogni giorno ci riportano a casa.",
        strumental: false,
        lyricEnglish: "Take me there beyond that veil <br/>bring me your horizon here<br/>let me see the gash of the soul <br/>all that we have already done <br/>And our time's passing so slow. <br/>We don't even realize. <br/>",
        lyricItalian: "Portami là oltre quella tela <br/>portami il tuo orizzonte qui <br/>fammi vedere la gola della anima <br/>tutto ciò che abbiamo già fatto <br/>E il nostro tempo passa così lento. <br/>Non ce ne accorgiamo. <br/>"
    },
    {
        id: 5,
        slug: "after-dark",
        title: "AFTER DARK",
        pathSvg: "/src/assets/images/after-dark.svg?react",
        intro: "Questo brano è un viaggio tra le strade del tempo che sfugge, una riflessione sulla corsa frenetica verso mete indefinite. È il canto di chi si guarda allo specchio e riconosce in ogni ruga una storia,in ogni respiro un atto di resistenza.",
        strumental: false,
        lyricEnglish: "I'm slowly fading under the moon <br/>The watchmaker decided my time <br/>Midnight has arrived with the void <br/><br/>Stramonium tells me to drink its nectar <br/>So to die softly <br/>Watching visions of the future I won't see <br/><br/>I just want to take a hand <br/>But maybe you should go <br/>Don't watch me fade away away <br/>Again",
        lyricItalian: "Sono lentamente svanendo sotto la luna <br/>Il fabbricante di orologi ha deciso il mio tempo <br/>La mezzanotte è arrivata con il vuoto <br/><br/>Stramonio mi dice di bere il suo nettare <br/>Per morire dolcemente <br/>Guardando le visioni del futuro che non vedrò <br/><br/>Voglio solo prendere una mano <br/>Ma forse dovresti andarti <br/>Non guardarmi svanire di nuovo <br/>Ancora"
    },
    {
        id: 6,
        slug: "the-man-of-the-crowd",
        title: "THE MAN OF THE CROWD",
        pathSvg: "/src/assets/images/man-crowd.svg?react",
        intro: "Tra la folla che riempie le strade, c'è sempre un uomo che passa inosservato. Questo brano racconta la sua solitudine nascosta, il vuoto che lo abita e il rumore di sottofondo.",
        strumental: false,
        lyricEnglish: "In my mirror, the reflection of my demons and saints, <br/> I stand still and they move. <br/> There's no way to find peace and calm, <br/> I'm falling to pieces. <br/><br/> I'm the man of the crowd inside my room, swimming in my head the blackest sea and the dividing line, save this man <br/><br/> Little crying stings in the corners of my eyes <br /> Time passes slowly on dead tracks <br /> Sands and water, clouds, debris and dusty thoughts <br /> There's a crack in my head <br/><br/> I'm the man of the crowd inside my room, swimming in my head the blackest sea and the dividing line, save this man <br/><br/> Can you hear me? I'm your mind! <br/> Don't say help, don't take his soul. <br /> Don't call me 'Mind'! <br/> Don't say goodbye <br/><br/> I'm the man of the crowd inside my room, swimming in my head the blackest sea and the dividing line, <br/> Shake my hands <br /> ",
        lyricItalian: "Nello specchio, la riflessione dei miei demoni e dei miei santi, mi tengo fermo e si muovono. <br/> Non c'è modo di trovare pace e calma, <br/> sto cadendo a pezzi. <br/> Sono l'uomo della folla dentro la mia stanza, nuotando nella mia testa il mare più nero e la linea di divisione, salva questo uomo <br/><br/> Le lacrime che piangevano nei canti degli occhi <br /> Il tempo passa lentamente sulle tracce morte <br /> Sabbia e acqua, nuvole, detriti e pensieri polverosi <br /> C'è una gatta in testa <br/><br/> Sono l'uomo della folla dentro la mia stanza, nuotando nella mia testa il mare più nero e la linea di divisione, salva questo uomo <br/><br/> Puoi sentirmi ? Sono la tua mente! <br/> Non dire aiuto, non prendere il suo spirito. <br /> Non chiamarmi 'Mind'! <br/> Non dire addio <br/><br/> Sono l'uomo della folla dentro la mia stanza, nuotando nella mia testa il mare più nero e la linea di divisione, <br/> Scuotimi le mani <br /> "
    },
    {
        id: 7,
        slug: "cloudy-memories",
        title: "CLOUDY MEMORIES",
        pathSvg: "/src/assets/images/cloudy.svg?react",
        intro: "Il tempo scolora, smussa, trasforma in qualcosa di diverso i ricordi del passato. Questo brano parla di quella strana nostalgia che a volte finisce per inventare un conforto che non è mai esistito.",
        strumental: true
    },
    {
        id: 8,
        slug: "obsession",
        title: "OBSESSION",
        pathSvg: "/src/assets/images/obsession.svg?react",
        intro: "C’è una consapevolezza che pesa più di altre, quella del vacillare della propria mente. Questo brano è un dialogo intimo con quel senso di smarrimento. Un ossessione tra disagio e resa.",
        strumental: false,
        lyricEnglish: "Beyond that threshold, my tired mind falls, <br/> I see the whole sky turn black <br/> Walking and keeping (away) <br/> from people and their thoughts, <br/> I close my eyes <br/> I fear in their smiles <br/><br/> I move through the alleys, I breathe deeply <br/> I listen to the voices of strangers <br/> uncovered in the sun, helped by the clouds <br/> my voice breaks in <br/> the obsessions of my mind <br/> listen to my words <br/> before it's too late <br/><br/> The nights of december <br/> I feel them mine, all mine <br/> I walk without a destination <br/> Tick Tock, run down your clock <br/><br/> Here as in no place <br/> under the sun and thin black ash <br/> I choose to hide <br/> many things cannot be said <br/>",
        lyricItalian: "Oltre quella soglia, la mia mente stanca cade, <br/> vedo il cielo intero diventare nero <br/> Camminando e mantenendo (lontano) <br/> dalle persone e dalle loro pensate, <br/> chiudo gli occhi <br/> Ho paura nei loro sorrisi <br/><br/> Mi muovo tra le strade, respiro profondamente <br/> Ascolto le voci di stranieri <br/> scoperti al sole, aiutati dalle nuvole <br/> la mia voce si rompe <br/> nelle obsessionsi della mia mente <br/> ascolta le mie parole <br/> prima che sia troppo tardi <br/><br/> Le notti di dicembre <br/> Le sento tutte mie, tutte mie <br/> Cammino senza destinazione <br/> Tick Tock, il tuo orologio scende <br/><br/> Qui come in nessun posto <br/> sotto il sole e il cenerino nero <br/> Scelgo di nascondere <br/> molte cose che non possono essere dette <br/>"
    },
    {
        id: 9,
        slug: "il-buio-nella-casa-di-lego",
        title: "IL BUIO NELLA CASA DI LEGO",
        pathSvg: "/src/assets/images/buio.svg?react",
        intro: "Un' ombra che cresce mentre l'infanzia si allontana, un velo che cala lentamente sulla fantasia libera e pura. Questo brano è un canto malinconico su quella luce che, spesso, illumina solo attimi brevi di ciò che eravamo.",
        strumental: false,
        lyricItalian: "Senza alcun ombra accanto a me <br/> fissando il sole <br/> vivo alla luce e cammino anche se <br/> non scorgo il mare <br/> Sento quel suono improvviso e c'è <br/> quel vuoto a perdere <br/> Abiti e maschere tolgo da me <br/> Sarà l'oblio di un re <br/> Fuori dal cuore dal tempo e dai se <br/> C'è solo un nome <br/> Sera o mattina era uguale per me <br/> Ne un prima o un dove <br/> Giorni d'estate ma sento che c'è <br/> l'inverno dentro me <br/> Troppa la luce e pochi i perché <br/> Pensieri e cenere <br/> Non è un cammino per me <br/> se non riesco a dare. <br/> È l'antimateria di un clone <br/> continuo a perdere <br/> Fuori c'è luce e non è <br/> quel buio dentro me <br/> è un pó rovinare così <br/> L'eterno giovane"

    },
    {
        id: 10,
        slug: "dodicimesididicembre",
        title: "DODICIMESIDIDICEMBRE",
        pathSvg: "/src/assets/images/dodicimesi.svg?react",
        intro: "In un angolo di mente nasce una favola creata per trovare un riparo popolato da ombre lunghe e fiati gelidi, dove ogni mese è dicembre. Questo brano è il suono di quella fuga.",
        strumental: false,
        lyricItalian: "Cade la foglia che ben presto danzerà. <br/> prova la sua libertà. <br/> Si alza il vento che dal mare arriva e qua <br/> scuote mente e anima. <br/> Lo sguardo perso era il mio <br/> la voce adesso tremerà. <br/> Stavo io vicino all'albero <br/> di plastica, luce e tenebra. <br/> Dolci e miele, abbracci e fiele <br/> tutto lì era magico <br/> è tardi ormai, ma è accaduto mentre... <br/> La neve cadeva, in quel giorno di un mai <br/> crudele e normale <br/> lontana da me. <br/> Quel brusio da mangiare <br/> non parlava dei se, ma qui è già Natale <br/> è passato da qui. <br/>",

    },
    {
        id: 11,
        slug: "euphoria",
        title: "EUPHORIA",
        pathSvg: "/src/assets/images/euphoria.svg?react",
        intro: "Esistono attimi che brillano come stelle in un cielo fin troppo cupo. Questo brano racconta quel raro momento in cui, dopo tempeste e silenzi, un uomo riscopre una, seppur breve, luce.",
        strumental: false,
        lyricEnglish: "Cold the dew that wets my face and my burdens <br/> I'm heading to the end, I'm ready to say goodbye <br/> I'm alone and there's no reason don't ask me why <br/> Freedom is the word and I choose the voice <br/> the voice that takes me away, away, away from here <br/> I've never been so happy and so proud, goodbye <br/> I am a sinner, I am not a saint <br/> I am a loser, but I lead myself <br/> I am the murderer of merciless time <br/> so I raise my walls. <br/> I can still laugh and cry, don't be sad, it's all ok <br/> this trip is like a dream with wide open eyes, <br/> don't stop to look, my sweet isolation is my refuge. <br/> I'll keep you in my heart of stone <br/> I left a letter, a poem for you all <br/> my mind is broken <br/> no one is to blame <br/> but I am the unseen <br/>",
        lyricItalian: "Fredda è la rugiada che bagna il mio viso e i miei fardelli <br/> sto andando verso la fine, sono pronto a salutarvi. <br/> Sono solo e non c'è motivo non chiedermi perché <br/> la libertà è la parola e io scelgo la voce <br/> la voce che mi porta via, via, via da qui. <br/> Non sono mai stato così felice e così orgoglioso, addio <br/> Sono un peccatore, non sono un santo <br/> Sono un perdente, ma guido me stesso <br/> Io sono l'assassino del tempo spietato <br/> così alzo i miei muri. <br/> Posso ancora ridere e piangere, non essere triste, va tutto bene <br/> questo viaggio è come un sogno con gli occhi spalancati,  <br/> non fermarti a guardare, il mio dolce isolamento è il mio rifugio. <br/> Vi terrò nel mio cuore di pietra <br/> ho lasciato una lettera, una poesia per tutti voi <br/> la mia mente è spezzata <br/> nessuno ha colpa, io sono l'invisibile."
    },
    {
        id: 12,
        slug: "alone-eve-of-the-end",
        title: "ALONE [Eve Of The End]",
        pathSvg: "/src/assets/images/alone.svg?react",
        intro: "Ci troviamo in quel preciso momento in cui l'inizio della fine smette di fare paura. Questo brano, l'ultimo, vede l'uomo della folla dirigersi nuovamente verso un tramonto, verso un addio che ormai non chiede spiegazioni. <br/> <br/> Sembra la fine, oppure un inizio? <br/> Un giorno, forse, lo scopriremo.",
        strumental: false,
        lyricEnglish: "I can't find the words to say goodbye to you, and divide us <br/> Memories are heavy and <br/>  I no longer have the strength, no more <br/> I'll go back to my shelter, alone <br/> Sweet is the oblivion that blurs all memories <br/>  and words and nothing is more <br/> Shadows dancing on the Wall, dying notes lie in my hands <br/> I embrace all my demons, again <br/> I walk the way I'm a mask and a brave man  <br/> This is the beginning, the eve of the end <br/> I've tried so many times, always, until the end <br/> Draw with your colors on the back of my hands <br/> I know well that this is the eve of the end <br/> In our eyes a long goodbye, on the eve of the end <br/><br/> (Solo - Edgar Allan Poe) <br/>  <br/> Fin dall'ore dell'infanzia non fui mai simile agli altri, mai vidi le cose come gli altri le vedevano, né seppi la mia passione trarre da una comune fonte. <br/> Dalla stessa sorgente non presi il mio dolore, sulle stesse tonalità non ho potuto risvegliare alla gioia il mio cuore, e tutto quel che ho amato, da solo io l'ho amato, allora, nell'infanzia, agli albori. <br/> D'un'esistenza in tempesta, dal fondo d'ogni bene e d'ogni male fu attinto Il mistero che ancora mi lega, dal torrente o dalla fontana, dal pendio rosso del monte, dal sole che mi girava e rigirava attorno. <br/> Nel suo autunno d'oro tinto, dal lampo del cielo che in volo mi passava e ripassava accanto, dal tuono e dalla tempesta, e dalla nube che (azzurro era il resto del cielo) in demone si tramutò ai miei occhi.",
        lyricItalian: "Non riesco a trovare le parole per dirti addio e dividerci <br/> I ricordi sono pesanti e non ho più la forza, non più. <br/> Tornerò al mio rifugio, da solo. <br/> Dolce è l'oblio che offusca tutti i ricordi, le parole e niente più. <br/> Ombre danzano sul muro, note morenti giacciono nelle mie mani. <br/> Abbraccio di nuovo tutti i miei demoni. <br/> <br/> Cammino per la mia strada, sono una maschera e un uomo coraggioso  <br/> questo è l'inizio, la vigilia della fine. <br/> Ci ho provato tante volte, sempre, fino alla fine <br/> disegno con i tuoi colori il dorso delle mie mani, <br/> so bene che questa è la vigilia della fine <br/> Nei nostri occhi un lungo addio, alla vigilia della fine. <br/><br/> (Solo - Edgar Allan Poe) <br/>  <br/> Fin dall'ore dell'infanzia non fui mai simile agli altri, mai vidi le cose come gli altri le vedevano, né seppi la mia passione trarre da una comune fonte. <br/> Dalla stessa sorgente non presi il mio dolore, sulle stesse tonalità non ho potuto risvegliare alla gioia il mio cuore, e tutto quel che ho amato, da solo io l'ho amato, allora, nell'infanzia, agli albori. <br/> D'un'esistenza in tempesta, dal fondo d'ogni bene e d'ogni male fu attinto Il mistero che ancora mi lega, dal torrente o dalla fontana, dal pendio rosso del monte, dal sole che mi girava e rigirava attorno. <br/> Nel suo autunno d'oro tinto, dal lampo del cielo che in volo mi passava e ripassava accanto, dal tuono e dalla tempesta, e dalla nube che (azzurro era il resto del cielo) in demone si tramutò ai miei occhi."
    },
];

