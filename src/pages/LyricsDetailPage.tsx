import ButtonIta from "/src/assets/images/button-ita.svg?react";
import ButtonEng from "/src/assets/images/button-eng.svg?react";
import Strumental from "/src/assets/images/strumental.svg?react";
import Sfondo from "/src/assets/images/sfondo.png";
import { Link } from "@tanstack/react-router";
import { lyrics } from "@/data/lyrics";
import { useState } from "react";

// Import all SVG components
import FromDusk from "/src/assets/images/from-dusk.svg?react";
import Atto2 from "/src/assets/images/atto2.svg?react";
import Atto3 from "/src/assets/images/atto3.svg?react";
import Atto4 from "/src/assets/images/atto4.svg?react";
import Atto5 from "/src/assets/images/atto5.svg?react";
import Atto6 from "/src/assets/images/atto6.svg?react";
import Atto7 from "/src/assets/images/atto7.svg?react";
import Atto8 from "/src/assets/images/atto8.svg?react";
import Atto9 from "/src/assets/images/atto9.svg?react";
import Atto10 from "/src/assets/images/atto10.svg?react";
import Atto11 from "/src/assets/images/atto11.svg?react";
import Atto12 from "/src/assets/images/atto12.svg?react";

// Mapping from pathSvg string to React component
const svgComponents: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    "/src/assets/images/from-dusk.svg?react": FromDusk,
    "/src/assets/images/atto2.svg?react": Atto2,
    "/src/assets/images/atto3.svg?react": Atto3,
    "/src/assets/images/atto4.svg?react": Atto4,
    "/src/assets/images/atto5.svg?react": Atto5,
    "/src/assets/images/atto6.svg?react": Atto6,
    "/src/assets/images/atto7.svg?react": Atto7,
    "/src/assets/images/atto8.svg?react": Atto8,
    "/src/assets/images/atto9.svg?react": Atto9,
    "/src/assets/images/atto10.svg?react": Atto10,
    "/src/assets/images/atto11.svg?react": Atto11,
    "/src/assets/images/atto12.svg?react": Atto12,
};

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

    // Get the SVG component from the mapping
    const SvgComponent = svgComponents[lyric.pathSvg];

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

                        {SvgComponent && <SvgComponent />}


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