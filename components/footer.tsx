"use client"

import Image from "next/image"
import { Mail } from "lucide-react"
import { useLang } from "@/context/language-context"
import { translations } from "@/lib/translations"

export function Footer() {
  const { lang } = useLang()
  const t = translations[lang].footer

  return (
    <footer className="border-t border-border bg-primary py-10">
      <div className="mx-auto max-w-3xl px-6 text-center">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <Image
            src="/images/logo-sei.png"
            alt="Chabad SEI - Studenti Ebrei Italia"
            width={80}
            height={80}
            className="h-auto w-[80px] brightness-0 invert opacity-80"
          />
        </div>

        <div className="mb-6 flex items-center justify-center gap-2 text-primary-foreground/80">
          <Mail className="h-4 w-4" />
          <span className="text-sm">
            {t.contactPrefix}{" "}
            <a
              href="mailto:menmi770@gmail.com"
              className="font-medium text-[#C5A55A] underline-offset-4 hover:underline"
            >
              menmi770@gmail.com
            </a>
          </span>
        </div>

        {/* Decorative separator */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="block h-px w-16 bg-primary-foreground/20" />
          <span className="text-lg text-[#C5A55A]">&#10043;</span>
          <span className="block h-px w-16 bg-primary-foreground/20" />
        </div>

        <p className="text-pretty text-sm leading-relaxed text-primary-foreground/90 md:text-base">
          {t.blessing}
        </p>
      </div>
    </footer>
  )
}
