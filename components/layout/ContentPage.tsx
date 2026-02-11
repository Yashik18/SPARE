"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { PAGES_CONTENT } from "@/lib/page-content"

interface ContentPageProps {
    category: "solutions" | "support" | "company" | "legal"
    slug: string
}

export function ContentPage({ category, slug }: ContentPageProps) {
    const content = PAGES_CONTENT[category]?.[slug]

    if (!content) {
        notFound()
    }

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{content.title}</h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        {content.subtitle}
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-3xl space-y-12">
                    {content.sections.map((section, index) => (
                        <div key={index} className="prose prose-lg prose-indigo mx-auto text-gray-600">
                            {section.heading && (
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">{section.heading}</h3>
                            )}
                            <div className="space-y-4">
                                {Array.isArray(section.content) ? (
                                    <ul className="list-none space-y-2">
                                        {section.content.map((item, i) => (
                                            <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                                        ))}
                                    </ul>
                                ) : (
                                    <p dangerouslySetInnerHTML={{ __html: section.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mx-auto mt-16 max-w-2xl text-center">
                    <div className="flex flex-col items-center justify-center gap-6">
                        {content.action && (
                            <Link href={content.action.href}>
                                <Button size="lg">{content.action.text}</Button>
                            </Link>
                        )}
                        <Link href="/" className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-1 hover:text-primary transition-colors">
                            <ArrowLeft className="h-4 w-4" /> Back home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
