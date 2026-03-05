"use client"

import { createContext, useContext, useEffect, useState } from "react"

type Lang = "he" | "en"

interface LanguageContextValue {
    lang: Lang
    toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextValue>({
    lang: "he",
    toggleLang: () => { },
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Lang>("he")

    // Load persisted choice on mount
    useEffect(() => {
        const saved = localStorage.getItem("lang") as Lang | null
        if (saved === "he" || saved === "en") setLang(saved)
    }, [])

    // Keep <html> attributes in sync
    useEffect(() => {
        document.documentElement.lang = lang
        document.documentElement.dir = lang === "he" ? "rtl" : "ltr"
        localStorage.setItem("lang", lang)
    }, [lang])

    const toggleLang = () => setLang((l) => (l === "he" ? "en" : "he"))

    return (
        <LanguageContext.Provider value={{ lang, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLang() {
    return useContext(LanguageContext)
}
