import { HeroSection } from "@/components/hero-section"
import { PackageContents } from "@/components/package-contents"
import { OrderForm } from "@/components/order-form"
import { Footer } from "@/components/footer"

export default function PesachPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <PackageContents />
      <OrderForm />
      <Footer />
    </main>
  )
}
