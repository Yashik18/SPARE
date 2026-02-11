import Image from "next/image"

export function UseCases() {
    const cases = [
        {
            title: "Household Storage",
            description: "Renovating? Moving? Or just decluttering? We have the perfect space for your furniture, appliances, and boxes.",
            image: "https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?auto=format&fit=crop&q=80&w=800",
        },
        {
            title: "Business Storage",
            description: "Store inventory, documents, or office equipment. Flexible plans that scale with your business needs.",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
        },
        {
            title: "Student Storage",
            description: "Going home for the holidays? Store your dorm essentials with us safely until you return.",
            image: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&q=80&w=800",
        },
    ]

    return (
        <div className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Storage solutions for everyone</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Whether you need space for a few boxes or an entire house, we've got you covered.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {cases.map((item) => (
                        <article key={item.title} className="flex flex-col items-start justify-between">
                            <div className="relative w-full">
                                <div className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] overflow-hidden">
                                    <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover" />
                                </div>
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                            </div>
                            <div className="max-w-xl">
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <span className="absolute inset-0" />
                                        {item.title}
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{item.description}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
