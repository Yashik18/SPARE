import { ContentPage } from "@/components/layout/ContentPage"

export default async function LegalSlugPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    return <ContentPage category="legal" slug={slug} />
}
