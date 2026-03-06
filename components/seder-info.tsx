"use client"

import { Calendar } from "lucide-react"
import { useLang } from "@/context/language-context"
import { translations } from "@/lib/translations"

export function SederInfo() {
    const { lang } = useLang()
    const t = translations[lang].sederInfo

    return (
        <section className="bg-muted/30 py-8 border-y border-border/50">
            <div className="mx-auto max-w-4xl px-6">
                <div className="flex flex-col items-center justify-center text-center">
                    {/* Date Info */}
                    <div className="flex flex-col items-center gap-2 max-w-[600px]">
                        <div className="flex items-center gap-2 text-[#C5A55A]">
                            <Calendar className="h-5 w-5" />
                            <span className="font-bold uppercase tracking-wider text-xs">{t.dateLabel}</span>
                        </div>
                        <p className="text-secondary-foreground font-medium text-lg leading-tight">
                            {t.date}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
