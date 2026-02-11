import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/home/Hero"
import { Services } from "@/components/home/Services"
import { HowItWorks } from "@/components/home/HowItWorks"
import { SmartSecurity } from "@/components/home/SmartSecurity"
import { UseCases } from "@/components/home/UseCases"
import { FAQ } from "@/components/home/FAQ"
import { AIEstimatorTeaser } from "@/components/home/AIEstimatorTeaser"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <SmartSecurity />
        <Services />
        <AIEstimatorTeaser />
        <UseCases />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
