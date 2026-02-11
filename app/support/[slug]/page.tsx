import { ContentPage } from "@/components/layout/ContentPage"

export default async function SupportSlugPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    return <ContentPage category="support" slug={slug} />
}
