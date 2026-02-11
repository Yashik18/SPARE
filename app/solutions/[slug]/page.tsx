import { ContentPage } from "@/components/layout/ContentPage"

export default async function SolutionsSlugPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    return <ContentPage category="solutions" slug={slug} />
}
