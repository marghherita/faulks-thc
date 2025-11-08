import Testi from "/src/assets/images/testi.svg?react";
import ArrowBack from "/src/assets/images/arrow-back.svg?react";

import Sfondo from "/src/assets/images/sfondo.png";
import { Link } from "@tanstack/react-router";
import { lyrics } from "@/data/lyrics";

function LyricsPage() {

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
            <div className="relative z-10 w-[min(92vw,720px)] flex flex-col gap-[clamp(2rem,3.5vw,24px)] p-8">
                <div className="flex items-center gap-3">
                    <Testi />
                </div>

                <div className="flex flex-col gap-[clamp(2rem,2.5vw,12px)]">
                    <div className="flex flex-col gap-[clamp(1.8rem,2.5vw,12px)]">


                        {lyrics.map((lyric) => (
                            <Link
                                key={lyric.id.toString()}
                                to="/lyrics/$slug"
                                params={{ slug: lyric.slug }}
                            >
                                <div className="flex items-center gap-2 justify-between">
                                    <h2 className="font-[BrosOskon90] text-[clamp(1.3rem,3.2vw,1.125rem)] leading-[clamp(1.45,2.5vw,1.7)]">{lyric.title}</h2>
                                    <ArrowBack />
                                </div>
                            </Link>
                        ))}
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

export default LyricsPage;