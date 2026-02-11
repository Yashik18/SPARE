import { Component, Sparkles, Wand2, Mic, Box } from "lucide-react"

const features = [
    {
        name: "AI Space Estimator",
        description:
            "Stop guessing. Upload a photo or video of your room, and our Gemini-powered AI will calculate the exact square footage you need. No more paying for air.",
        icon: Wand2,
    },
    {
        name: "Voice Inventory",
        description:
            "Managing your stored items is as easy as speaking. 'Alexa, where is my winter coat?' Our voice interface keeps track of everything for you.",
        icon: Mic,
    },
    {
        name: "Smart Auto-Catalog",
        description:
            "We photograph and tag every item. Our AI identifies your belongings (e.g., 'Red Samsonite Suitcase') so you can search your digital inventory instantly.",
        icon: Component,
    },
    {
        name: "Dynamic Flex Pricing",
        description:
            "Pay only for the space you use, down to the inch. Our AI adjusts your plan automatically as you add or remove items.",
        icon: Box,
    },
]

export function AIFeatures() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary">Future of Storage</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Powered by Spare Intelligence
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We are not just a warehouse. We are a technology company that solves storage.
                        Experience the first AI-native storage platform.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
