import { Footer } from "@/components/layout/Footer"
import { BookingWizard } from "@/components/booking/BookingWizard"

export default function QuotePage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <BookingWizard />
            <Footer />
        </div>
    )
}
