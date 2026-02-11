import { ContentPage } from "@/components/layout/ContentPage"

export default async function CompanySlugPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    return <ContentPage category="company" slug={slug} />
}
