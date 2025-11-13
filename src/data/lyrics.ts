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
        lyricEnglish: "i) It was evening and morning <br/> Tuning, synchronized with my heart, <br/> I felt my beats like it was the first time <br/> I'm drawing all the lines of the stars <br/> The blackest morning sun in my eyes and crimson dew. <br/> Oh mirror. Mirror, mirror of my desires, mark this moment, my life starts from here… <br/> Later on the way home I will fall, I'm no longer <br/> what I was trying to be, oh, oh no. <br/> <br/> After that early morning, i memorized in  my head  that I was so alone,<br/> that's when I caught sight of something out<br/> of the corner of my eye<br/> I recognize his voices, they still echo from afar <br/>the words return<br/> I see lightning, i go back in time <br/>The stage of emptiness<br/> I throw myself and blend in with the crowd<br/> The price of my loneliness <br/>is a burden, a burden I know. <br/>Turn to stone and go blind <br/> it's the only way I know, wherever I go<br/> Autumn leaf that falls silently out of sight,<br/> out of mind<br/> I still hear the voices, always and only close<br/> to me alone, I burn, let me shining, staring at the sea<br/> The stage of emptiness<br/> I throw myself and blend in with the crowd<br/> The price of my loneliness<br/> is a burden, a burden <br/><br/> iii) Haze and lucidity<br>We are our dreams, an inner light, so close to the dark.<br>We are the fields we are the seed with flesh and broken bones<br>Another time, another age, we know the pain before the wounds<br>The sun is high, the moon is low The day is in my hands<br>I tear off my pillow towards the sky<br>I deny the darkness out of my destiny<br><br>My hidden grin, my trusted lies are dreams and guiding lights<br>I am the sun, i am the rain, i am the shelter and the bridge<br>Another man, another face, misunderstood and alone<br>The sun in low, the moon is high, awake at dead of night<br>Nowhere to laughing, nowhere to cry<br>take me away, in my immortality…haze and lucidity..<br>",


        lyricItalian: "i) Era sera e fu mattina <br/> Accordando, sincronizzato con il mio cuore, <br/> Sentivo i miei battiti come se fosse la prima volta <br/> Sto disegnando tutte le linee delle stelle, <br/> Il sole mattutino più nero nei miei occhi e la rugiada cremisi. <br/> Oh specchio. Specchio, specchio delle mie brame, fissa questo momento, la mia vita inizia da qui… <br/> Più tardi sulla via del ritorno cadrò, non sono più quello che stavo cercando di essere, oh, oh no.  <br/> <br/> ii) Il palcoscenico del vuoto<br/> Dopo quella mattina presto,<br/> ho memorizzato nella mia testa <br/>che ero così solo,<br/> è stato allora che ho visto qualcosa con la<br/> coda dell'occhio <br/> Riconosco le sue voci, riecheggiano ancora <br/>da lontano<br/> le parole ritornano <br/>Vedo un fulmine, torno indietro nel tempo.<br/> Il palcoscenico del vuoto <br/> Mi butto e mi mischio tra la folla <br/> Il prezzo della mia solitudine <br/> è un peso, un peso che conosco. <br/> Trasformati in pietra e diventa cieco<br/> è l'unico modo che conosco, ovunque vada <br/>foglie autunnale cadono silenziosamente <br/> fuori dalla vista, fuori dalla mente<br/> Sento ancora le voci, sempre e solo vicine a me <br/>solo, brucio, lasciami brillare, fissando il mare.<br/> Il palcoscenico del vuoto <br/>Mi butto e mi mischio tra la folla<br/> Il prezzo della mia solitudine<br/> è un peso, un peso che conosco. <br/><br/> iii) Foschia e lucidità <br/> Siamo i nostri sogni, una luce interiore così vicina all'oscurità. <br/>Noi siamo i campi, siamo il seme con carne e ossa rotte <br/>Un'altra volta, un'altra epoca, conosciamo il dolore prima delle ferite<br/> Il sole è alto, la luna è bassa, Il giorno è nelle mie mani.<br/> Via il cuscino verso il cielo<br/> Nego l'oscurità al mio destino  <br/><br/> Il mio sorriso nascosto, le mie bugie fidate sono sogni e luci guida <br/>Io sono il sole, io sono la pioggia, io sono il riparo e il ponte<br/> Un altro uomo, un altro volto, incompreso e solo <br/>Il sole è basso, la luna è alta, sveglio nel cuore della notte.<br/> Nessun posto dove ridere, nessun posto dove piangere<br/> portami via, nella mia immortalità… foschia e lucidità...",
    },
    {
        id: 3,
        slug: "the-unseen",
        title: "THE UNSEEN",
        pathSvg: "/src/assets/images/unseen.svg?react",
        intro: "Un battito sommesso, ma pulsante. Questo brano dà voce agli invisibili: i senza tetto, gli emarginati, coloro che non riescono a indossare la maschera giusta per adattarsi a un mondo che corre troppo veloce.",
        strumental: false,
        lyricEnglish: "What I left behind<br>Hunts me every day<br>words of pain and love<br>Darkening what I know<br>annihilating all my certainties<br>Searching for the limbs, I move without leaving shadows, traces and marks, nothing of myself<br>destroying all the memories I have<br><br>I no longer find the wisdom, my tiredness runs along the lines<br>And I try to hide my anger with smiles and tears and ugly masks<br><br>I'm the unseen<br>A fading Ghost<br><br>The thresholds of my pain<br>remind me every time<br>the weakness of true love<br>the void in my head<br>and a thousand years of healing in loneliness<br><br>I no longer find the wisdom, my tiredness runs along the lines<br>And I try to hide my anger with smiles and tears and ugly masks<br><br>I'm the unseen<br>A fading Ghost<br>"
        ,

        lyricItalian: "Quello che ho lasciato dietro di me<br>Mi dà la caccia ogni giorno<br>parole di dolore e amore<br>oscurando ciò che so,<br>annientando tutte le mie certezze.<br>Cercando gli arti, mi muovo senza lasciare ombre, tracce e segni, ma niente di me stesso<br>distruggendo tutti i ricordi che ho<br><br>Non trovo più la saggezza, la mia stanchezza corre lungo le linee<br>E cerco di nascondere la mia rabbia con sorrisi, lacrime e brutte maschere<br><br>Io sono l'invisibile<br>Un fantasma che svanisce<br><br>Le soglie del mio dolore<br>Mi ricordano ogni volta<br>la debolezza del vero amore<br>il vuoto nella mia testa<br>e mille anni di guarigione nella solitudine<br><br>Non trovo più la saggezza, la mia stanchezza corre lungo le linee<br>E cerco di nascondere la mia rabbia con sorrisi, lacrime e brutte maschere<br><br>Io sono l'invisibile<br>Un fantasma che svanisce<br>"

    },
    {
        id: 4,
        slug: "time-of-the-stars",
        title: "TIME OF THE STARS",
        pathSvg: "/src/assets/images/time-stars.svg?react",
        intro: "Ci sono perdite che scavano dentro come tempeste silenziose, lasciando vuoti che nessun tempo può colmare. Questo brano è una preghiera sommessa rivolta a chi non c’è più, ma continua a vivere tra le pieghe della memoria e che ogni giorno ci riportano a casa.",
        strumental: false,
        lyricEnglish: "i) The Slow Show of Life<br>Take me there beyond that veil<br>bring me your horizon here<br>let me see the gash of the soul<br>all that we have already done<br>And our time's passing so slow.<br>We don't even realize.<br><br>ii) Morning Lies<br>Long is my sailing in the seas of ​​my dreams and thoughts<br>Inside my regrets sitting on the stones in the morning again<br>It was all I had, now it's turned into ruins, lies and dust<br>I'm ready for my days made of clay and shapes I don't want<br><br>Stay with me in this time of the stars<br>I'll wait here wherever you are<br>but now you have to stay close to me<br>and I will not be afraid<br>Nowhere into the lines of the stars<br>every morning gives in to his lies,<br>stop a moment and talk to me, before the sun goes out<br><br>Little crying stings in the corners of my eyes<br>I can touch all of that, I can see all of that, I just feel free, now I can<br><br>Stay with me in this time of the stars<br>I'll wait here wherever you are<br>but now you have to stay close to me<br>and I will not be afraid<br>Nowhere into the lines of the stars<br>every morning gives in to his lies,<br>stop a moment and talk to me, before the sun goes out<br>"
        ,
        lyricItalian: "i) Lo spettacolo lento della vita<br>Portami lì oltre quel velo<br>portami il tuo orizzonte qui<br>fammi vedere lo squarcio dell'anima<br>tutto quello che abbiamo già fatto.<br>Il nostro tempo passa così lentamente.<br>Non ce ne rendiamo nemmeno conto.<br><br>ii) Bugie del mattino<br>Lunga è la mia navigazione nei mari dei miei sogni e pensieri,<br>dentro i miei rimpianti seduto di nuovo sulle pietre del mattino.<br>Era tutto quello che avevo, ora si è trasformato in rovine, bugie e polvere<br>Sono pronto per i miei giorni fatti di argilla e forme che non voglio.<br><br>Resta con me in questo tempo delle stelle<br>Ti aspetterò qui ovunque tu sia<br>ma ora devi starmi vicino<br>e non avrò paura.<br>Da nessuna parte nelle linee delle stelle<br>ogni mattina cede alle sue bugie,<br>fermati un attimo e parlami, prima che si spenga il sole<br><br>Piccole lacrime bruciano gli angoli dei miei occhi<br>Posso toccare tutto questo, posso vedere tutto questo, mi sento libero, ora posso.<br><br>Resta con me in questo tempo delle stelle<br>Ti aspetterò qui ovunque tu sia<br>ma ora devi starmi vicino<br>e non avrò paura.<br>Da nessuna parte nelle linee delle stelle<br>ogni mattina cede alle sue bugie,<br>fermati un attimo e parlami, prima che si spenga il sole<br>"


    },
    {
        id: 5,
        slug: "after-dark",
        title: "AFTER DARK",
        pathSvg: "/src/assets/images/after-dark.svg?react",
        intro: "Questo brano è un viaggio tra le strade del tempo che sfugge, una riflessione sulla corsa frenetica verso mete indefinite. È il canto di chi si guarda allo specchio e riconosce in ogni ruga una storia,in ogni respiro un atto di resistenza.",
        strumental: false,
        lyricEnglish: "i) Stramonium<br>I'm slowly fading under the moon<br>The watchmaker decided my time<br>Midnight has arrived with the void<br><br>Stramonium tells me to drink its nectar<br>So to die softly<br>Watching visions of the future I won't see<br><br>I just want to take a hand<br>But maybe you should go<br>Don't watch me fade away away<br>Again<br><br>ii) Dead Lane<br>In a world that's moving fast,<br>Lost in shadows, life's a blast.<br>But for me, it's hard to breathe,<br>In the chaos, I retreat.<br>Every glance cuts like a knife,<br>Every word shapes my life.<br>In a city that's loud and bright,<br>I’m searching for a spark of light.<br><br>I'm a grey soul in a rush of steel,<br>Feel the weight of the world's ordeal.<br>trapped in the web, can't release.<br><br>Underneath this fragile skin,<br>Lies a heart with stories to tell.<br>In this whirlwind, I stand still,<br>In a world that moves again<br><br>I'm a grey soul in a rush of steel,<br>Feel the weight of the world's ordeal.<br>trapped in the web, can't release.<br><br>iii) La Luna e i Falò<br>Sempre uguale nella forma e nel colore che gli dai,<br>come un fiume inerme tu senza pelle no non cambierai<br>Mani al viso per coprire dolcemente ciò che già sai<br>respirando piano non del tutto invano contro il mai e poi mai<br>Senza avere più progetti, muri o granai<br>ma piccole luci di universi incastrati<br>dove esistere ovunque tu vai<br>Ora o mai, in questa terra io non tornerò<br>non so cos'ero prima di adesso<br>so che carne e radici bruciai.<br><br>iv) One Day<br>So I breathe, and close my eyes,<br>In this storm, I realize.<br>I'm not alone, we'll find our way,<br>In this world, we'll find our day.<br>"
        ,
        lyricItalian: "i) Stramonio<br><br>Sto lentamente svanendo sotto la luna<br>L'orologiaio ha deciso il mio tempo<br>La mezzanotte è arrivata con il vuoto<br><br>Stramonium mi dice di bere il suo nettare<br>Quindi morire dolcemente<br>Guardando visioni di un futuro che non avrò<br><br>Voglio solo afferrare una mano<br>Ma forse dovresti andare<br>Non guardarmi svanire via<br>Di nuovo<br><br>ii) Vicolo cieco<br>In un mondo che si muove velocemente,<br>Persi nell'ombra, la vita è fantastica.<br>Ma per me è difficile respirare,<br>Nel caos, mi ritiro.<br>Ogni sguardo taglia come un coltello,<br>Ogni parola plasma la mia vita.<br>In una città rumorosa e luminosa,<br>Sto cercando la mia scintilla di luce.<br><br>Sono un'anima grigia in un impeto d'acciaio,<br>Sento il peso della dura prova del mondo.<br>intrappolato in una tela che non può liberami.<br><br>Sotto questa pelle fragile,<br>Giace un cuore con storie da raccontare.<br>In questo turbine, sto fermo,<br>In un mondo che si muove di nuovo<br><br>Sono un'anima grigia in un impeto d'acciaio,<br>Sentiìo il peso della dura prova del mondo.<br>Intrappolato in una tela che non può liberarmi.<br><br>iii) La Luna ei Falò<br>Sempre uguale nella forma e nel colore che gli dai,<br>come un fiume inerme tu senza pelle no non cambierai<br>Mani al viso per coprire dolcemente ciò che già sai<br>respirando piano non del tutto invano contro il mai e poi mai<br>Senza avere più progetti, muri o granai<br>ma piccole luci di universi incastrati<br>dove esistere ovunque tu vai.<br>Ora o mai, in questa terra io non tornerò<br>non so cos'ero prima di adesso<br>so che carne e radicali bruciai.<br><br>iv) Un giorno<br>Così respiro e chiudo gli occhi,<br>In questa tempesta, me ne rendo conto.<br>Non sono solo, troveremo la nostra strada,<br>In questo mondo troveremo il nostro giorno.<br>"

    },
    {
        id: 6,
        slug: "the-man-of-the-crowd",
        title: "THE MAN OF THE CROWD",
        pathSvg: "/src/assets/images/man-crowd.svg?react",
        intro: "Tra la folla che riempie le strade, c'è sempre un uomo che passa inosservato. Questo brano racconta la sua solitudine nascosta, il vuoto che lo abita e il rumore di sottofondo.",
        strumental: false,
        lyricEnglish: "In my mirror, the reflection of my demons and saints,<br>i stand still and they move.<br>There's no way to find peace and calm,<br>I'm falling to pieces.<br><br>I'm the man of the crowd inside my room, swimming in my head the blackest sea and the dividing line, save this man<br><br>Little crying stings in the corners of my eyes<br>Time passes slowly on dead tracks<br>Sands and water, clouds, debris and dusty thoughts<br>There's a crack in my head<br><br>I'm the man of the crowd inside my room, swimming in my head the blackest sea and the dividing line, save this man<br><br>Can you hear me? I'm your mind!<br>Don't say help, don't take his soul.<br>Don't call me \"Mind\"<br>Don't say goodbye<br><br>I'm the man of the crowd inside my room, swimming in my head the blackest sea and the dividing line,<br>Shake my hands<br>"
        ,
        lyricItalian: "Nel mio specchio vedo il riflesso dei miei demoni e dei miei santi,<br>io resto fermo ma loro si muovono.<br>Non c'è modo di trovare pace e calma,<br>Sto cadendo a pezzi.<br><br>Sono l'uomo della folla dentro la mia stanza, nuota nella mia testa il mare più nero e la linea di separazione, salvate quest'uomo<br><br>Piccole lacrime bruciano gli angoli dei miei occhi<br>Il tempo passa lentamente su binari morti<br>Sabbie e acqua, nuvole, detriti e pensieri polverosi<br>C'è una crepa nella mia testa<br><br>Sono l'uomo della folla dentro la mia stanza, nuota nella mia testa il mare più nero e la linea di separazione, salvate quest'uomo<br><br>Mi senti? Sono la tua mente!<br>Non chiedere aiuto, non prendergli l'anima<br>Non chiamarmi \"Mente\"<br>Non dire addio<br><br>Sono l'uomo della folla nella mia stanza, nuota nella mia testa il mare più nero e la linea di separazione.<br>Stringimi le mani<br>"


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
        lyricEnglish: "Beyond that threshold, my tired mind falls,<br>I see the whole sky turn black<br>Walking and keeping (away)<br>from people and their thoughts,<br>I close my eyes<br>I fear in their smiles<br><br>I move through the alleys, I breathe deeply<br>I listen to the voices of strangers<br>uncovered in the sun, helped by the clouds<br>my voice breaks in<br>the obsessions of my mind<br>listen to my words<br>before it's too late<br><br>The nights of december<br>I feel them mine , all mine<br>I walk without a destination<br>Tick Tock, run down your clock<br><br>Here as in no place<br>under the sun and thin black ash<br>I choose to hide<br>many things cannot be said<br>"
        ,
        lyricItalian: "Oltre quella soglia, la mia mente stanca cade,<br>Vedo tutto il cielo diventare nero.<br>Camminando e tenendomi lontano<br>dalle persone e dai loro pensieri,<br>chiudo gli occhi<br>ho paura nei loro sorrisi.<br><br>Mi muovo per i vicoli, respiro profondamente<br>ascolto le voci degli sconosciuti.<br>Scoperto al sole, aiutato dalle nuvole<br>la mia voce si spezza.<br>Le ossessioni della mia mente.<br>Ascoltate le mie parole<br>prima che sia troppo tardi<br><br>Le notti di dicembre<br>Le sento mie, tutte mie.<br>Cammino senza destinazione.<br>Tic Tac, fai scorrere l'orologio.<br><br>Qui come in nessun posto<br>sotto il sole e sottile cenere nera<br>scelgo di nascondermi,<br>altre cose è meglio tacerle.<br>"

    },
    {
        id: 9,
        slug: "il-buio-nella-casa-di-lego",
        title: "IL BUIO NELLA CASA DI LEGO",
        pathSvg: "/src/assets/images/buio.svg?react",
        intro: "Un' ombra che cresce mentre l'infanzia si allontana, un velo che cala lentamente sulla fantasia libera e pura. Questo brano è un canto malinconico su quella luce che, spesso, illumina solo attimi brevi di ciò che eravamo.",
        strumental: false,
        lyricItalian: "Senza alcun ombra accanto a me<br>fissando il sole<br>vivo alla luce e cammino anche se<br>non scorgo il mare<br>Sento quel suono improvviso e c'è<br>quel vuoto a perdere<br>Abiti e maschere tolgo da me<br>Sarà l'oblio di un re<br><br>Fuori dal cuore dal tempo e dai se<br>C'è solo un nome<br>Sera o mattina era uguale per me<br>Ne un prima o un dove<br>Giorni d'estate ma sento che c'è<br>l'inverno dentro me<br>Troppa la luce e pochi i perché<br>Pensieri e cenere<br><br>Non è un cammino per me<br>se non riesco a dare.<br>È l'antimateria di un clone<br>continuo a perdere<br>Fuori c'è luce e non è<br>quel buio dentro me<br>è un pó rovinare così<br>L'eterno giovane<br>"

    },
    {
        id: 10,
        slug: "dodicimesididicembre",
        title: "DODICIMESIDIDICEMBRE",
        pathSvg: "/src/assets/images/dodicimesi.svg?react",
        intro: "In un angolo di mente nasce una favola creata per trovare un riparo popolato da ombre lunghe e fiati gelidi, dove ogni mese è dicembre. Questo brano è il suono di quella fuga.",
        strumental: false,
        lyricItalian: "Cade la foglia che ben presto danzerà.<br>prova la sua libertà.<br>Si alza il vento che dal mare arriva e qua<br>scuote mente e anima.<br>Lo sguardo perso era il mio<br>la voce adesso tremerà.<br>Stavo io vicino all'albero<br>di plastica, luce e tenebra.<br>Dolci e miele, abbracci e fiele<br>tutto lì era magico<br>è tardi ormai, ma è accaduto mentre...<br>La neve cadeva, in quel giorno di un mai<br>crudele e normale<br>lontana da me.<br>Quel brusio da mangiare<br>non parlava dei se, ma qui è già Natale<br>è passato da qui.<br>",

    },
    {
        id: 11,
        slug: "euphoria",
        title: "EUPHORIA",
        pathSvg: "/src/assets/images/euphoria.svg?react",
        intro: "Esistono attimi che brillano come stelle in un cielo fin troppo cupo. Questo brano racconta quel raro momento in cui, dopo tempeste e silenzi, un uomo riscopre una, seppur breve, luce.",
        strumental: false,
        lyricEnglish: "Cold the dew that wets my face and my burdens<br>I'm heading to the end, I'm ready to say goodbye<br>I'm alone and there's no reason don't ask me why<br>Freedom is the word and I choose the voice<br>the voice that takes me away, away, away from here<br>I've never been so happy and so proud, goodbye<br><br>I am a sinner, I am not a saint<br>I am a loser, but I lead myself<br>I am the murderer of merciless time<br>so I raise my walls.<br><br>I can still laugh and cry, don't be sad, it's all ok<br>this trip is like a dream with wide open eyes,<br>don't stop to look, my sweet isolation is my refuge.<br><br>I'll keep you in my heart of stone<br>I left a letter, a poem for you all<br>my mind is broken<br>no one is to blame<br>but I am the unseen<br>"
        ,
        lyricItalian: "Fredda è la rugiada che bagna il mio viso e i miei fardelli<br>sto andando verso la fine, sono pronto a salutarvi.<br>Sono solo e non c'è motivo non chiedermi perché<br>la libertà è la parola e io scelgo la voce<br>la voce che mi porta via, via, via da qui.<br>Non sono mai stato così felice e così orgoglioso, addio<br><br>Sono un peccatore, non sono un santo<br>Sono un perdente, ma guido me stesso<br>Io sono l'assassino del tempo spietato<br>così alzo i miei muri.<br><br>Posso ancora ridere e piangere, non essere triste, va tutto bene<br>questo viaggio è come un sogno con gli occhi spalancati,<br>non fermarti a guardare, il mio dolce isolamento è il mio rifugio.<br><br>Vi terrò nel mio cuore di pietra<br>ho lasciato una lettera, una poesia per tutti voi<br>la mia mente è spezzata<br>nessuno ha colpa, io sono l'invisibile.<br>"

    },
    {
        id: 12,
        slug: "alone-eve-of-the-end",
        title: "ALONE [Eve Of The End]",
        pathSvg: "/src/assets/images/alone.svg?react",
        intro: "Ci troviamo in quel preciso momento in cui l'inizio della fine smette di fare paura. Questo brano, l'ultimo, vede l'uomo della folla dirigersi nuovamente verso un tramonto, verso un addio che ormai non chiede spiegazioni. <br/> <br/> Sembra la fine, oppure un inizio? <br/> Un giorno, forse, lo scopriremo.",
        strumental: false,
        lyricEnglish: "I can't find the words to say goodbye to you, and divide us<br>Memories are heavy and I no longer have the strength, no more<br>I'll go back to my shelter, alone<br><br>Sweet is the oblivion that blurs all memories and words and nothing is more<br>Shadows dancing on the Wall, dying notes lie in my hands<br>I embrace all my demons, again<br><br>I walk the way I'm a mask and a brave man<br>This is the beginning, the eve of the end<br>I've tried so many times, always, until the end<br>Draw with your colors on the back of my hands<br>I know well that this is the eve of the end<br>In our eyes a long goodbye, on the eve of the end <br/><br/><br/><br/><br/> \"Solo\" (Alone)<br/> <br/> Fin dall'ore dell'infanzia non fui mai simile agli altri, mai vidi le cose come gli altri le vedevano, né seppi la mia passione trarre da una comune fonte. <br/> Dalla stessa sorgente non presi il mio dolore, sulle stesse tonalità non ho potuto risvegliare alla gioia il mio cuore, e tutto quel che ho amato, da solo io l'ho amato, allora, nell'infanzia, agli albori. <br/> D'un'esistenza in tempesta, dal fondo d'ogni bene e d'ogni male fu attinto Il mistero che ancora mi lega, dal torrente o dalla fontana, dal pendio rosso del monte, dal sole che mi girava e rigirava attorno. <br/> Nel suo autunno d'oro tinto, dal lampo del cielo che in volo mi passava e ripassava accanto, dal tuono e dalla tempesta, e dalla nube che (azzurro era il resto del cielo) in demone si tramutò ai miei occhi. <br/><br/> <i>Poesia di Edgar Allan Poe scritta<br/> tra il 1829 e il 1830. <br/>Traduzione di Enzo Somma</i>",
        lyricItalian: "Non riesco a trovare le parole per dirti addio e dividerci<br>I ricordi sono pesanti e non ho più la forza, non più.<br>Tornerò al mio rifugio, da solo.<br>Dolce è l'oblio che offusca tutti i ricordi, le parole e niente più.<br>Ombre danzano sul muro, note morenti giacciono nelle mie mani.<br>Abbraccio di nuovo tutti i miei demoni.<br><br>Cammino per la mia strada, sono una maschera e un uomo coraggioso<br>questo è l'inizio, la vigilia della fine.<br>Ci ho provato tante volte, sempre, fino alla fine<br>disegno con i tuoi colori il dorso delle mie mani,<br>so bene che questa è la vigilia della fine<br>Nei nostri occhi un lungo addio, alla vigilia della fine. <br/><br/><br/><br/><br/> \"Solo\" (Alone)<br/> <br/> Fin dall'ore dell'infanzia non fui mai simile agli altri, mai vidi le cose come gli altri le vedevano, né seppi la mia passione trarre da una comune fonte. <br/> Dalla stessa sorgente non presi il mio dolore, sulle stesse tonalità non ho potuto risvegliare alla gioia il mio cuore, e tutto quel che ho amato, da solo io l'ho amato, allora, nell'infanzia, agli albori. <br/> D'un'esistenza in tempesta, dal fondo d'ogni bene e d'ogni male fu attinto Il mistero che ancora mi lega, dal torrente o dalla fontana, dal pendio rosso del monte, dal sole che mi girava e rigirava attorno. <br/> Nel suo autunno d'oro tinto, dal lampo del cielo che in volo mi passava e ripassava accanto, dal tuono e dalla tempesta, e dalla nube che (azzurro era il resto del cielo) in demone si tramutò ai miei occhi. <br/><br/> <i>Poesia di Edgar Allan Poe scritta<br/> tra il 1829 e il 1830. <br/>Traduzione di Enzo Somma</i>"
    },
];

