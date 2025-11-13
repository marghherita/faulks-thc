import ButtonIta from "/src/assets/images/button-ita.svg?react";
import ButtonEng from "/src/assets/images/button-eng.svg?react";
import Strumental from "/src/assets/images/strumental.svg?react";
import Testo from "/src/assets/images/testo.svg?react";
import Sfondo from "/src/assets/images/sfondo.png";
import { lyrics } from "@/data/lyrics";
import { useState, useEffect } from "react";

// Import all SVG components
import FromDusk from "/src/assets/images/titles/from-dusk.svg?react";
import Staring from "/src/assets/images/titles/staring.svg?react";
import FissandoMare from "/src/assets/images/titles/fissandomare.svg?react";
import Unseen from "/src/assets/images/titles/unseen.svg?react";
import Invisibile from "/src/assets/images/titles/invisibile.svg?react";
import TimeStars from "/src/assets/images/titles/time-stars.svg?react";
import TempoStelle from "/src/assets/images/titles/tempostelle.svg?react";
import AfterDark from "/src/assets/images/titles/after-dark.svg?react";
import DopoTramonto from "/src/assets/images/titles/dopotramonto.svg?react";
import ManCrowd from "/src/assets/images/titles/man-crowd.svg?react";
import Cloudy from "/src/assets/images/titles/cloudy.svg?react";
import Obsession from "/src/assets/images/titles/obsession.svg?react";
import Ossessione from "/src/assets/images/titles/ossessione.svg?react";
import Buio from "/src/assets/images/titles/buio.svg?react";
import Dodicimesi from "/src/assets/images/titles/dodicimesi.svg?react";
import Euphoria from "/src/assets/images/titles/euphoria.svg?react";
import Euforia from "/src/assets/images/titles/euforia.svg?react";
import Alone from "/src/assets/images/titles/alone.svg?react";
import Solo from "/src/assets/images/titles/solo.svg?react";

import { Link } from "@tanstack/react-router";



function LyricsDetailPage({ slug }: { slug: string }) {
    const lyric = lyrics.find((l) => l.slug === slug) ?? {
        id: 0,
        slug: "",
        title: "",
        pathSvg: "",
        intro: "",
        strumental: false,
        lyricEnglish: "",
        lyricItalian: "",
    };

    const [lang, setLang] = useState<"en" | "it">("en");

    useEffect(() => {
        if (slug === "il-buio-nella-casa-di-lego" || slug === "dodicimesididicembre") {
            setLang("it");
        }
    }, [slug]);

    const getSvgComponent = () => {


        switch (slug) {
            case "from-dusk-to-creation":
                return <FromDusk className="w-full" />
            case "starring-at-the-sea":
                return lang === "en" ? <Staring className="w-full" /> : <FissandoMare className="w-full" />
            case "the-unseen":
                return lang === "en" ? <Unseen className="w-full" /> : <Invisibile className="w-full" />
            case "time-of-the-stars":
                return lang === "en" ? <TimeStars className="w-full" /> : <TempoStelle className="w-full" />
            case "after-dark":
                return lang === "en" ? <AfterDark className="w-full" /> : <DopoTramonto className="w-full" />
            case "the-man-of-the-crowd":
                return <ManCrowd className="w-full" />
            case "cloudy-memories":
                return <Cloudy className="w-full" />
            case "obsession":
                return lang === "en" ? <Obsession className="w-full" /> : <Ossessione className="w-full" />
            case "il-buio-nella-casa-di-lego":
                return <Buio className="w-full" />
            case "dodicimesididicembre":
                return <Dodicimesi className="w-full" />
            case "euphoria":
                return lang === "en" ? <Euphoria className="w-full" /> : <Euforia className="w-full" />
            case "alone-eve-of-the-end":
                return lang === "en" ? <Alone className="w-full" /> : <Solo className="w-full" />
            default:
                break;
        }
    }

    return (
        <div className="relative min-h-dvh w-screen overflow-y-auto flex  justify-start p-[clamp(12px,4vw,24px)]">
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
            <div className="relative z-10 w-[min(92vw,720px)] flex flex-col justify-between  gap-[clamp(2rem,3.5vw,24px)] p-8">


                <div className="flex flex-col gap-[clamp(2rem,2.5vw,12px)]">
                    <div className="flex flex-col gap-[clamp(1.8rem,2.5vw,12px)] justify-start items-start">

                        <div className="flex flex-col ">

                            {getSvgComponent()}
                        </div>
                        <div
                            className="font-[BrosOskon90] text-[clamp(1.2rem,2.8vw,1rem)] leading-[clamp(1.4,2.2vw,1.6)] whitespace-pre-line"
                            dangerouslySetInnerHTML={{ __html: lyric.intro }}
                        />




                        <div className="flex items-center gap-3">
                            {lyric.strumental ? <Strumental /> : <Testo />}
                        </div>


                        {lyric.strumental ? null : (
                            <div
                                className="font-[BrosOskon90] text-[clamp(1.2rem,2.8vw,1rem)] leading-[clamp(1.4,2.2vw,1.6)] whitespace-pre-line"
                                dangerouslySetInnerHTML={{ __html: lang === "en" ? (lyric.lyricEnglish ?? "") : (lyric.lyricItalian ?? "") }}
                            />
                        )}



                    </div>

                    {/* <div className="flex flex-col items-center justify-center"> {lyric.strumental ? null : (<><ButtonIta onClick={() => {
                        setLang("it");
                    }} /><ButtonEng onClick={() => {
                        setLang("en");
                    }} /></>)}  </div> */}


                    {lyric.strumental ? null : (
                        <div className="flex flex-col items-center justify-center">
                            {lang === "en" ? <ButtonIta onClick={() => {
                                setLang("it");
                            }} /> : (
                                (slug === "il-buio-nella-casa-di-lego" || slug === "dodicimesididicembre") ? null : (
                                    <ButtonEng onClick={() => {
                                        setLang("en");
                                    }} />
                                )
                            )}
                        </div>
                    )}
                </div>


                <div className="flex justify-end">
                    <Link
                        to="/lyrics"
                        className="italic font-[BrosOskon90] text-[clamp(1.2rem,3vw,1.05rem)]"
                    >
                        ← Torna ai testi
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default LyricsDetailPage