import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { SmartCTA } from "@/components/home/SmartCTA"

export function AIEstimatorTeaser() {
    return (
        <div className="bg-primary/5 py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <div className="flex justify-center mb-6">
                        <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                            <Sparkles className="w-4 h-4 mr-1" /> New Feature
                        </span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Not sure how much space you need?
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                        Try our new AI Space Calculator. Upload a photo of your items, and we'll recommend the perfect unit size instantly.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <SmartCTA
                            size="lg"
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary hover:text-white"
                        >
                            Try AI Calculator
                        </SmartCTA>
                    </div>
                </div>
            </div>
        </div>
    )
}
