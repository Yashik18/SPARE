import { ShieldCheck, Thermometer, Eye, Fingerprint } from "lucide-react"

export function SmartSecurity() {
    const features = [
        {
            name: 'AI Surveillance',
            description: '24/7 computer vision monitoring that detects anomalies instantly.',
            icon: Eye,
        },
        {
            name: 'Biometric Access',
            description: 'Fingerprint and facial recognition entry for authorized personnel only.',
            icon: Fingerprint,
        },
        {
            name: 'Climate Control',
            description: 'Smart sensors maintain optimal humidity and temperature levels.',
            icon: Thermometer,
        },
        {
            name: 'S-Tier Insurance',
            description: 'Every item is insured with our premium comprehensive coverage.',
            icon: ShieldCheck,
        },
    ]

    return (
        <div className="bg-primary/5 py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary">Uncompromised Safety</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Bank-Grade Security for Your Belongings
                    </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-4">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <dt className="flex flex-col items-center gap-y-4 text-base font-semibold leading-7 text-gray-900">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                        <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
