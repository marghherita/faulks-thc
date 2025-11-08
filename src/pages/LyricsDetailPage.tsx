import ButtonIta from "/src/assets/images/button-ita.svg?react";
import ButtonEng from "/src/assets/images/button-eng.svg?react";
import Strumental from "/src/assets/images/strumental.svg?react";
import Sfondo from "/src/assets/images/sfondo.png";
import { Link } from "@tanstack/react-router";
import { lyrics } from "@/data/lyrics";
import { useState } from "react";

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
            <div className="relative z-10 w-[min(92vw,720px)] flex flex-col justify-between gap-[clamp(2rem,3.5vw,24px)] p-8">


                <div className="flex flex-col gap-[clamp(2rem,2.5vw,12px)]">
                    <div className="flex flex-col gap-[clamp(1.8rem,2.5vw,12px)]">

                        <img src={lyric.pathSvg} alt={lyric.title} className="" />
                        <div className="font-[BrosOskon90] text-[clamp(1.1rem,2.8vw,1rem)] leading-[clamp(1.4,2.2vw,1.6)] whitespace-pre-line">
                            {lyric.intro}
                        </div>


                        {lyric.strumental ? (
                            <div className="flex items-center gap-3">
                                <Strumental />
                            </div>
                        ) : (
                            <div className="font-[BrosOskon90] text-[clamp(1.1rem,2.8vw,1rem)] leading-[clamp(1.4,2.2vw,1.6)] whitespace-pre-line">
                                {lang === "en" ? lyric.lyricEnglish : lyric.lyricItalian}
                            </div>
                        )}

                    </div>

                    <div className="flex flex-col items-center justify-center"> {lyric.strumental ? null : (<><ButtonIta onClick={() => {
                        setLang("it");
                    }} /><ButtonEng onClick={() => {
                        setLang("en");
                    }} /></>)}  </div>






                </div>

                <div className="flex justify-end"> <Link
                    to="/lyrics"
                    className="italic font-[BrosOskon90] text-[clamp(1.2rem,3vw,1.05rem)]"
                >
                    ← Torna ai testi
                </Link></div>
            </div>
        </div >
    );
}

export default LyricsDetailPage