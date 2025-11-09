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
        lyricEnglish: "i) It was evening and morning <br/> Tuning, synchronized with my heart, <br/> I felt my beats like it was the first time <br/> I'm drawing all the lines of the stars <br/> The blackest morning sun in my eyes and crimson dew. <br/> Oh mirror.mirror, mirror of my desires, mark this moment, my life starts from here… <br/> Later on the way home I will fall, I'm no longer <br/> what I was trying to be, oh, oh no.",
        lyricItalian: "i) Era sera e fu mattina <br/> Accordando, sincronizzato con il mio cuore, <br/> Sentivo i miei battiti come se fosse la prima volta <br/> Sto disegnando tutte le linee delle stelle, <br/> Il sole mattutino più nero nei miei occhi e la rugiada cremisi. <br/> Oh specchio. Specchio, specchio delle mie brame, fissa questo momento, la mia vita inizia da qui… <br/> Più tardi sulla via del ritorno cadrò, non sono più quello che stavo cercando di essere, oh, oh no."
    },
    {
        id: 3,
        slug: "the-unseen",
        title: "THE UNSEEN",
        pathSvg: "/src/assets/images/unseen.svg?react",
        intro: "Un battito sommesso, ma pulsante. Questo brano dà voce agli invisibili: i senza tetto, gli emarginati, coloro che non riescono a indossare la maschera giusta per adattarsi a un mondo che corre troppo veloce.",
        strumental: false,
        lyricEnglish: "What I left behind <br/> Hunts me every day <br/> words of pain and love <br/> Darkening what I know <br/> annihilating all my certainties <br/> Searching for the limbs, I move without leaving shadows, traces and marks, nothing of myself <br/> destroying all the memories I have <br/> I no longer find the wisdom, my tiredness runs along the lines <br/> And I try to hide my anger with smiles and tears and ugly masks <br/> I'm the unseen <br/> A fading Ghost <br/> The thresholds of my pain remind me every time <br/> the weakness of true love <br/> the void in my head <br/> and a thousand years of healing in loneliness <br/> I no longer find the wisdom, my tiredness runs along the lines <br/> And I try to hide my anger with smiles and tears and ugly masks <br/> I'm the unseen <br/> A fading Ghost",

        lyricItalian: "Quello che ho lasciato dietro di me <br/> Mi dà la caccia ogni giorno <br/> parole di dolore e amore <br/> oscurando ciò che so, <br/> annientando tutte le mie certezze. <br/> Cercando gli arti, mi muovo senza lasciare ombre, tracce e segni, ma niente di me stesso <br/> distruggendo tutti i ricordi che ho <br/> Non trovo più la saggezza, la mia stanchezza corre lungo le linee <br/> E cerco di nascondere la mia rabbia con sorrisi, lacrime e brutte maschere <br/> Io sono l'invisibile <br/> Un fantasma che svanisce <br/> Le soglie del mio dolore <br/> Mi ricordano ogni volta <br/> la debolezza del vero amore <br/> il vuoto nella mia testa <br/> e mille anni di guarigione nella solitudine <br/> Non trovo più la saggezza, la mia stanchezza corre lungo le linee <br/> E cerco di nascondere la mia rabbia con sorrisi, lacrime e brutte maschere <br/> Io sono l'invisibile <br/> Un fantasma che svanisce"
    },
    {
        id: 4,
        slug: "time-of-the-stars",
        title: "TIME OF THE STARS",
        pathSvg: "/src/assets/images/time-stars.svg?react",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        strumental: false,
        lyricEnglish: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        lyricItalian: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 5,
        slug: "after-dark",
        title: "AFTER DARK",
        pathSvg: "/src/assets/images/after-dark.svg?react",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        strumental: false,
        lyricEnglish: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        lyricItalian: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 6,
        slug: "the-man-of-the-crowd",
        title: "THE MAN OF THE CROWD",
        pathSvg: "/src/assets/images/man-crowd.svg?react",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        strumental: false,
        lyricEnglish: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        lyricItalian: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 7,
        slug: "cloudy-memories",
        title: "CLOUDY MEMORIES",
        pathSvg: "/src/assets/images/cloudy.svg?react",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        strumental: true,
        lyricEnglish: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        lyricItalian: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 8,
        slug: "obsession",
        title: "OBSESSION",
        pathSvg: "/src/assets/images/obsession.svg?react",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        strumental: false,
        lyricEnglish: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        lyricItalian: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 9,
        slug: "il-buio-nella-casa-di-lego",
        title: "IL BUIO NELLA CASA DI LEGO",
        pathSvg: "/src/assets/images/buio.svg?react",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        strumental: false,
        lyricEnglish: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        lyricItalian: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 10,
        slug: "dodicimesididicembre",
        title: "DODICIMESIDIDICEMBRE",
        pathSvg: "/src/assets/images/dodicimesi.svg?react",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        strumental: false,
        lyricEnglish: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        lyricItalian: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 11,
        slug: "euphoria",
        title: "EUPHORIA",
        pathSvg: "/src/assets/images/euphoria.svg?react",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        strumental: false,
        lyricEnglish: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        lyricItalian: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 12,
        slug: "alone-eve-of-the-end",
        title: "ALONE [Eve Of The End]",
        pathSvg: "/src/assets/images/alone.svg?react",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        strumental: false,
        lyricEnglish: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        lyricItalian: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
];

