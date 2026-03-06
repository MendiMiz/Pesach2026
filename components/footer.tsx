"use client"

import Image from "next/image"
import { Mail, Phone, MessageCircle } from "lucide-react"
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

        <div className="mb-6 flex flex-col items-center justify-center gap-3 text-primary-foreground/80">
          <p className="text-sm font-semibold text-[#C5A55A]">{t.contactPrefix}</p>

          <div className="flex flex-col items-center gap-2">
            <a
              href="mailto:mizrachitzemach@gmail.com"
              className="flex items-center gap-2 text-sm font-medium hover:text-[#C5A55A] hover:underline underline-offset-4"
            >
              <Mail className="h-4 w-4 text-[#C5A55A]" />
              <span>mizrachitzemach@gmail.com</span>
            </a>

            <a
              href={`tel:${t.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 text-sm font-medium hover:text-[#C5A55A]"
            >
              <Phone className="h-4 w-4 text-[#C5A55A]" />
              <span dir="ltr">{t.phone}</span>
            </a>

            <a
              href={`https://wa.me/${t.phone.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium hover:text-[#C5A55A]"
            >
              <MessageCircle className="h-4 w-4 text-[#C5A55A]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Decorative separator */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="block h-px w-16 bg-primary-foreground/20" />
          <span className="text-lg text-[#C5A55A]">&#10043;</span>
          <span className="block h-px w-16 bg-primary-foreground/20" />
        </div>

        <div className="space-y-1 text-pretty text-sm leading-relaxed text-primary-foreground/90 md:text-base">
          {t.blessing.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
    </footer>
  )
}
