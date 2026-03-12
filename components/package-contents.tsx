"use client"

import { useState } from "react"
import { BookOpen, Star, Layers, Wine, Soup, Utensils, Carrot, Fish, CakeSlice, Cookie, ChefHat, Wheat, CupSoda, Package, ChevronDown, ChevronUp } from "lucide-react"
import { useLang } from "@/context/language-context"
import { translations } from "@/lib/translations"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"

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
  const [isOpen, setIsOpen] = useState(false)

  const initialItems = t.items.slice(0, 4)
  const remainingItems = t.items.slice(4)

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
        <div className="relative space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {initialItems.map((text, index) => {
              const Icon = icons[index]
              return <ItemCard key={index} text={text} Icon={Icon} />
            })}
          </div>

          {!isOpen && (
            <div className="pointer-events-none absolute bottom-12 left-0 right-0 z-10 h-32 bg-gradient-to-t from-background via-background/80 to-transparent" />
          )}

          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleContent className="data-[state=closed]:animate-collapse data-[state=open]:animate-expand overflow-hidden">
              <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
                {remainingItems.map((text, index) => {
                  const Icon = icons[index + 4]
                  return <ItemCard key={index + 4} text={text} Icon={Icon} />
                })}
              </div>
            </CollapsibleContent>

            <div className="relative z-20 mt-8 flex justify-center">
              <CollapsibleTrigger asChild>
                <button className="group flex items-center gap-2 rounded-full border border-accent/30 bg-card px-6 py-2.5 text-sm font-semibold text-accent shadow-sm transition-all hover:bg-accent hover:text-white hover:shadow-md active:scale-95">
                  {isOpen ? t.showLess : t.showMore}
                  <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", isOpen && "rotate-180")} />
                </button>
              </CollapsibleTrigger>
            </div>
          </Collapsible>
        </div>
      </div>
    </section>
  )
}

function ItemCard({ text, Icon }: { text: string; Icon: any }) {
  return (
    <div className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:border-accent hover:shadow-md">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-accent/20 group-hover:text-accent">
        <Icon className="h-5 w-5" />
      </div>
      <span className="text-base font-medium text-card-foreground">
        {text}
      </span>
    </div>
  )
}
