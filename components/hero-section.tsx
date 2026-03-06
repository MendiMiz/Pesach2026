"use client"

import Image from "next/image"
import { useLang } from "@/context/language-context"
import { translations } from "@/lib/translations"

export function HeroSection() {
  const { lang, toggleLang } = useLang()
  const t = translations[lang].hero

  return (
    <section className="relative w-full overflow-hidden">
      {/* Container with tighter dynamic height */}
      <div className="relative flex min-h-[380px] flex-col items-center justify-center md:min-h-[480px] lg:min-h-[520px]">
        {/* Background Image and Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-pesach.jpg"
            alt="שולחן סדר פסח מעוצב עם מצות, יין וקערת סדר"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1B4332]/70 via-[#1B4332]/50 to-[#1B4332]/80" />
        </div>

        {/* Language toggle — stays absolute top-right */}
        <div className="absolute top-4 right-4 z-20">
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

        {/* Content Section — Even tighter padding */}
        <div className="relative z-10 flex flex-col items-center px-4 py-8 text-center sm:px-6">
          {/* Logo */}
          <div className="mb-2 sm:mb-3">
            <Image
              src="/images/logo-sei.png"
              alt="Chabad SEI - Studenti Ebrei Italia"
              width={120}
              height={120}
              className="h-auto w-[90px] brightness-0 invert drop-shadow-lg sm:w-[110px]"
            />
          </div>

          <h1 className="text-balance text-2xl font-bold leading-tight text-[#FFF8E7] md:text-3xl lg:text-4xl">
            {t.title}
          </h1>

          {/* CTA Section */}
          <a
            href="#form"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-[#C5A55A] px-6 py-2.5 text-sm font-bold text-[#1B4332] shadow-lg transition-all hover:bg-[#C5A55A]/90 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#FFF8E7]/50 focus:ring-offset-2 focus:ring-offset-[#1B4332]/50 sm:mt-4 sm:px-8 sm:py-3.5 sm:text-base"
          >
            {t.subscribeButton}
          </a>

          {/* Description */}
          <div className="mx-auto mt-3 max-w-2xl sm:mt-4">
            <p
              className="text-pretty whitespace-pre-line text-xs font-light leading-relaxed text-[#FFF8E7]/90 sm:text-sm md:text-base"
              dangerouslySetInnerHTML={{ __html: t.description }}
            />
          </div>

          {/* Scroll indicator */}
          <div className="mt-4 sm:mt-6 animate-bounce">
            <svg
              width="20"
              height="20"
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
