"use client"

import Image from "next/image"
import { useLang } from "@/context/language-context"
import { translations } from "@/lib/translations"

export function HeroSection() {
  const { lang, toggleLang } = useLang()
  const t = translations[lang].hero

  return (
    <section className="relative w-full overflow-hidden">
      {/* Hero Image */}
      <div className="relative h-[420px] md:h-[540px] lg:h-[620px] w-full">
        <Image
          src="/images/hero-pesach.jpg"
          alt="שולחן סדר פסח מעוצב עם מצות, יין וקערת סדר"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B4332]/70 via-[#1B4332]/50 to-[#1B4332]/80" />

        {/* Language toggle — always in the top-right corner regardless of dir */}
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="flex items-center gap-1 rounded-full border border-white/40 bg-white/15 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/25 hover:border-white/60"
          >
            <span className={lang === "he" ? "opacity-100" : "opacity-40"}>עב</span>
            <span className="text-white/40 font-light">|</span>
            <span className={lang === "en" ? "opacity-100" : "opacity-40"}>EN</span>
          </button>
        </div>

        {/* Content — order: logo, title, CTA, then description so everything fits */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-6 text-center sm:px-6">
          {/* Logo */}
          <div className="mb-3 sm:mb-4">
            <Image
              src="/images/logo-sei.png"
              alt="Chabad SEI - Studenti Ebrei Italia"
              width={120}
              height={120}
              className="h-auto w-[100px] brightness-0 invert drop-shadow-lg sm:w-[120px]"
            />
          </div>

          <h1 className="text-balance text-3xl font-bold leading-tight text-[#FFF8E7] md:text-4xl lg:text-5xl">
            {t.title}
          </h1>

          {/* CTA first so it’s visible without scrolling */}
          <a
            href="#form"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-[#C5A55A] px-6 py-3 text-sm font-bold text-[#1B4332] shadow-lg transition-all hover:bg-[#C5A55A]/90 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#FFF8E7]/50 focus:ring-offset-2 focus:ring-offset-[#1B4332]/50 sm:mt-5 sm:px-8 sm:py-4 sm:text-base"
          >
            {t.subscribeButton}
          </a>

          {/* Description below CTA, compact so it fits */}
          <div className="mx-auto mt-4 max-w-2xl sm:mt-5">
            <p className="text-pretty whitespace-pre-line text-xs leading-relaxed text-[#FFF8E7]/90 sm:text-sm md:text-base">
              {t.description}
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="mt-4 sm:mt-6 animate-bounce">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-[#C5A55A]"
            >
              <path
                d="M12 5v14M19 12l-7 7-7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
