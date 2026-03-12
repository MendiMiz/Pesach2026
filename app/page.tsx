import { HeroSection } from "@/components/hero-section"
import { SederInfo } from "@/components/seder-info"
import { PackageContents } from "@/components/package-contents"
import { OrderForm } from "@/components/order-form"
import { SederBanner } from "@/components/seder-banner"
import { Footer } from "@/components/footer"

export default function PesachPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <SederInfo />
      <PackageContents />
      <OrderForm />
      <SederBanner />
      <Footer />
    </main>
  )
}
