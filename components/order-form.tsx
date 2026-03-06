"use client"

import { useState, useRef } from "react"
import { CheckCircle2, Send, Loader2 } from "lucide-react"
import { useLang } from "@/context/language-context"
import { translations } from "@/lib/translations"

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSdpS6fBkuiOnkicHHGSz6h2hrEBPatQPco8in0GCWiMkPP9Pw/formResponse"

export function OrderForm() {
  const { lang } = useLang()
  const t = translations[lang].orderForm

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [sederChoice, setSederChoice] = useState("")
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const formSubmittedRef = useRef(false)

  const handleSubmit = () => {
    setIsSubmitting(true)
    formSubmittedRef.current = true
  }

  const handleIframeLoad = () => {
    if (!formSubmittedRef.current) return
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section id="form" className="bg-secondary/50 py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-6">

        {/* Hidden iframe so form submit target still works and success state can be detected */}
        <iframe
          ref={iframeRef}
          name="hidden_iframe"
          title="form-response"
          onLoad={handleIframeLoad}
          className="sr-only"
          aria-hidden
        />
        {/* Google response panel — commented out for future reuse if you want to show the response again
        <div className="mb-6 overflow-hidden rounded-xl border-2 border-dashed border-destructive/50 bg-background p-2">
          <p className="mb-2 text-center text-xs font-bold text-destructive uppercase tracking-widest">
            {t.googleResponseLabel}
          </p>
          <iframe
            ref={iframeRef}
            name="hidden_iframe"
            title="form-response"
            onLoad={handleIframeLoad}
            className="h-[300px] w-full rounded-lg bg-white shadow-inner"
          />
        </div>
        */}

        {submitted ? (
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-accent/30 bg-card p-12 text-center shadow-lg">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary">{t.successTitle}</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t.successMessage}
            </p>
          </div>
        ) : (
          <>
            {/* Section heading */}
            <div className="mb-10 text-center">
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
              <p className="mt-3 text-muted-foreground">{t.subheading}</p>
              <p className="mt-4 text-sm font-medium text-accent/90 italic">
                {t.englishOnlyNote}
              </p>
            </div>

            <form
              action={GOOGLE_FORM_ACTION}
              method="POST"
              target="hidden_iframe"
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border border-border bg-card p-8 shadow-lg md:p-10"
            >
              {/* Full name */}
              <div>
                <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-card-foreground">
                  {t.fields.fullName}
                </label>
                <input
                  id="fullName"
                  name="entry.806412648"
                  type="text"
                  required
                  dir="ltr"
                  pattern="^[a-zA-Z\s]*$"
                  title={t.validation.englishOnly}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition-colors"
                />
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="mb-2 block text-sm font-semibold text-card-foreground">
                  {t.fields.address}
                </label>
                <input
                  id="address"
                  name="entry.678550903"
                  type="text"
                  required
                  dir="ltr"
                  pattern="^[a-zA-Z0-9\s.,-]*$"
                  title={t.validation.englishAlphanumeric}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition-colors"
                />
              </div>

              {/* Citofono */}
              <div>
                <label htmlFor="citofono" className="mb-2 block text-sm font-semibold text-card-foreground">
                  {t.fields.citofono}
                </label>
                <input
                  id="citofono"
                  name="entry.778347218"
                  type="text"
                  dir="ltr"
                  pattern="^[a-zA-Z0-9\s.,-]*$"
                  title={t.validation.englishAlphanumeric}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition-colors"
                />
              </div>

              {/* City + ZIP */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="city" className="mb-2 block text-sm font-semibold text-card-foreground">
                    {t.fields.city}
                  </label>
                  <input
                    id="city"
                    name="entry.1424062212"
                    type="text"
                    required
                    dir="ltr"
                    pattern="^[a-zA-Z\s]*$"
                    title={t.validation.englishOnly}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="zipCode" className="mb-2 block text-sm font-semibold text-card-foreground">
                    {t.fields.zip}
                  </label>
                  <input
                    id="zipCode"
                    name="entry.34425449"
                    type="text"
                    required
                    dir="ltr"
                    pattern="^[a-zA-Z0-9\s.,-]*$"
                    title={t.validation.englishAlphanumeric}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition-colors"
                  />
                </div>
              </div>

              {/* Phone 1 */}
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-card-foreground">
                  {t.fields.phone}
                </label>
                <input
                  id="phone"
                  name="entry.1166871149"
                  type="tel"
                  required
                  dir="ltr"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition-colors"
                />
              </div>

              {/* Phone 2 */}
              <div>
                <label htmlFor="phone2" className="mb-2 block text-sm font-semibold text-card-foreground">
                  {t.fields.phone2}
                </label>
                <input
                  id="phone2"
                  name="entry.926723454"
                  type="tel"
                  required
                  dir="ltr"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-card-foreground">
                  {t.fields.email}
                </label>
                <input
                  id="email"
                  name="entry.1256285026"
                  type="email"
                  required
                  dir="ltr"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition-colors"
                />
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="notes" className="mb-2 block text-sm font-semibold text-card-foreground">
                  {t.fields.notes}
                </label>
                <textarea
                  id="notes"
                  name="entry.1001261172"
                  rows={3}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition-colors resize-none"
                />
              </div>

              {/* Seder question */}
              <div className="rounded-xl border border-accent/30 bg-accent/5 p-5">
                <p className="mb-4 text-sm font-semibold text-card-foreground">
                  {t.seder.question}
                </p>
                <div className="flex flex-wrap gap-3">
                  {t.seder.options.map((option) => (
                    <label
                      key={option.value}
                      className={`flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all ${sederChoice === option.value
                        ? "border-accent bg-accent/15 text-accent"
                        : "border-border bg-card text-card-foreground hover:border-accent/50"
                        }`}
                    >
                      <input
                        type="radio"
                        name="entry.183606189"
                        value={option.value}
                        required
                        checked={sederChoice === option.value}
                        onChange={(e) => setSederChoice(e.target.value)}
                        className="sr-only"
                      />
                      <span
                        className={`flex h-4 w-4 items-center justify-center rounded-full border-2 transition-colors ${sederChoice === option.value
                          ? "border-accent bg-accent"
                          : "border-muted-foreground"
                          }`}
                      >
                        {sederChoice === option.value && (
                          <span className="h-1.5 w-1.5 rounded-full bg-card" />
                        )}
                      </span>
                      {option.label}
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    {t.submitting}
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    {t.submit}
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  )
}
