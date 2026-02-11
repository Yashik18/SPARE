import { Shield, Truck, Box, Calendar, Lock, Smartphone } from "lucide-react"

export function Services() {
    const features = [
        {
            name: 'Full Service Storage',
            description: 'We pack, move, and deliver so you don\'t have to.',
            icon: Truck,
        },
        {
            name: 'Flexible Pay per Use',
            description: 'Pay only for the space you use. Upgrade or downgrade anytime.',
            icon: Calendar,
        },
        {
            name: '24/7 Security',
            description: 'Facilities equipped with alarms, motion sensors, and round-the-clock monitoring.',
            icon: Shield,
        },
        {
            name: 'Insurance Coverage',
            description: 'Items covered against fire, burglary, and transient damages.',
            icon: Lock,
        },
        {
            name: 'Digital Inventory',
            description: 'Track your items online with our photo-cataloged inventory system.',
            icon: Smartphone,
        },
        {
            name: 'Packaging Service',
            description: 'Professional packing to ensure your items are safe during transit and storage.',
            icon: Box,
        },
    ]

    return (
        <div className="bg-white py-24 sm:py-32" id="services">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary">Storage simplified</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Everything you need for hassle-free storage
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We combine technology with logistics to provide a seamless storage experience.
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
