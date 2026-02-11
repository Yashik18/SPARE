import { Footer } from "@/components/layout/Footer"
import { ContactForm } from "@/components/contact/ContactForm"

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Navbar is already in RootLayout, so we remove it from here */}
            <main className="flex-grow isolate px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Sales & Support</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Need help with your storage? Want a custom quote for a large office move?
                        Fill out the form below and our team will get back to you within 24 hours.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <ContactForm />
                </div>
            </main>
            <Footer />
        </div>
    )
}
