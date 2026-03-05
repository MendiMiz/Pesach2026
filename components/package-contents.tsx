"use client"

import { BookOpen, Star, Layers, Wine, Soup, Utensils, Carrot, Fish, CakeSlice, Cookie, ChefHat, Wheat, CupSoda, Package } from "lucide-react"
import { useLang } from "@/context/language-context"
import { translations } from "@/lib/translations"

const icons = [
  BookOpen, // Haggadah
  Star, // Shmurah Matzah
  Layers, // Matzot
  Wine, // Wine
  Soup, // Soup Almonds
  Utensils, // Soup powder
  Carrot, // Pickles
  Fish, // Tuna
  CakeSlice, // Cake
  Cookie, // Cookies
  ChefHat, // Kneidlach
  Wheat, // Matzo meal
  CupSoda, // Pudding
  Package // Chocolate
]

export function PackageContents() {
  const { lang } = useLang()
  const t = translations[lang].packageContents

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="block h-px w-8 bg-accent" />
            <span className="text-sm font-medium tracking-wider text-accent">
              {t.eyebrow}
            </span>
            <span className="block h-px w-8 bg-accent" />
          </div>
          <h2 className="text-balance text-3xl font-bold text-primary md:text-4xl">
            {t.heading}
          </h2>
        </div>

        {/* Items grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {t.items.map((text, index) => {
            const Icon = icons[index]
            return (
              <div
                key={index}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:border-accent hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-accent/20 group-hover:text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-base font-medium text-card-foreground">
                  {text}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
