import { Truck, Warehouse, RefreshCcw } from "lucide-react"

export function HowItWorks() {
    const steps = [
        {
            title: "We come to you",
            description: "and do the heavy lifting",
            icon: Truck,
        },
        {
            title: "We secure it",
            description: "in our storage facility",
            icon: Warehouse,
        },
        {
            title: "We bring it back",
            description: "whenever you want",
            icon: RefreshCcw,
        },
    ]

    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Hassle-free storage <span className="relative whitespace-nowrap">
                            with move-in help
                            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary rounded-full"></span>
                        </span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        A new kind of storage that you can "Trust On"
                    </p>
                </div>
                <div className="mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-primary/10 mb-6 rotate-3 hover:rotate-6 transition-transform">
                                    <step.icon className="h-12 w-12 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                                <p className="mt-2 text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
