import Image from "next/image"
import { SmartCTA } from "@/components/home/SmartCTA"

export function Hero() {
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <Image
                    src="/hero.png"
                    alt="Storage facility"
                    fill
                    className="object-cover object-right"
                    priority
                />
                {/* Gradient overlay for text readability on left side */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100/90 via-gray-100/60 to-transparent sm:from-white/95 sm:via-white/70" />
            </div>

            <div className="mx-auto max-w-7xl px-6 py-32 sm:py-48 lg:px-8 lg:py-56 relative z-10">
                <div className="max-w-2xl text-left">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Storage as a <span className="text-primary block mt-2">Consumer Utility</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-700 font-medium">
                        Secure, flexible, short-term and monthly storage solutions for modern urban living.
                        We pick up, store, and deliver so you don't have to.
                    </p>
                    <div className="mt-10 flex items-center justify-start gap-x-6">
                        <SmartCTA size="lg" className="text-lg px-8 py-6 h-auto shadow-lg" />
                    </div>
                </div>
            </div>
        </div>
    )
}
