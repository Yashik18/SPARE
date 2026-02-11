import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Storage as a Consumer Utility
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Secure, flexible, short-term and monthly storage solutions for modern urban living.
                    We pick up, store, and deliver so you don't have to.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link href="/quote">
                        <Button size="lg" className="text-lg px-8 py-6 h-auto">
                            Get SPARE space
                        </Button>
                    </Link>
                    <Link href="#how-it-works" className="text-sm font-semibold leading-6 text-gray-900">
                        Learn more <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
