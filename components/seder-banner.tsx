"use client"

import Image from "next/image"
import { useLang } from "@/context/language-context"
import { translations } from "@/lib/translations"
import { ExternalLink } from "lucide-react"

export function SederBanner() {
    const { lang } = useLang()
    const t = translations[lang].milanSeder

    return (
        <section className="bg-secondary/50 px-4 py-16 md:py-24">
            <div className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl shadow-xl shadow-primary/30">
                {/* Background Image and Overlay */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/seder_table.png"
                        alt="Seder Table"
                        fill
                        className="object-cover blur-[2px] scale-105"
                    />
                    {/* Lightened Green Overlays */}
                    <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-primary/5" />
                </div>


                <div className="relative z-10 flex flex-col items-center px-6 py-12 text-center sm:px-10 md:py-16">
                    <h2 className="text-balance text-2xl font-bold tracking-tight text-[#FFF8E7] md:text-3xl lg:text-4xl">
                        {t.title}
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-[#FFF8E7]/90 md:text-lg">
                        {t.subtitle}
                    </p>

                    <div className="mt-8">
                        <a
                            href="https://app.flowiz.io/mlnsr/f/8311/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#C5A55A] px-7 py-3 text-base font-bold text-[#1B4332] shadow-lg transition-all hover:bg-[#C5A55A]/90 hover:scale-[1.02] active:scale-95"
                        >
                            {t.cta}
                            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
