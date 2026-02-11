"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
    {
        question: "1. How far in advance should I book a pickup?",
        answer: (
            <div className="space-y-2">
                <p>We recommend booking at least 48 hours in advance.</p>
                <p>During month-end, festive seasons, or peak relocation periods, 3–5 days prior booking is ideal.</p>
                <p>Same-day bookings may be available depending on slot availability and may include additional charges.</p>
            </div>
        ),
    },
    {
        question: "2. Do you provide packing services?",
        answer: (
            <div className="space-y-4">
                <p>Yes. You can choose between:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>
                        <strong>Self-Packing:</strong> You pack your items yourself. We provide packing materials (chargeable).
                    </li>
                    <li>
                        <strong>SPARE Professional Packing:</strong> Our trained team handles packing using standard materials like boxes and bubble wrap. Recommended for fragile or valuable items.
                    </li>
                </ul>
            </div>
        ),
    },
    {
        question: "3. What items cannot be stored or moved?",
        answer: (
            <div className="space-y-2">
                <p>For safety and legal reasons, we do not accept:</p>
                <ul className="list-disc pl-5">
                    <li>Cash, jewelry, precious metals</li>
                    <li>Illegal substances</li>
                    <li>Weapons or explosives</li>
                    <li>Flammable or hazardous materials</li>
                    <li>Perishable food</li>
                    <li>Plants or animals</li>
                </ul>
                <p>If prohibited items are found, service may be refused.</p>
            </div>
        ),
    },
    {
        question: "4. How is the cost calculated?",
        answer: (
            <div className="space-y-2">
                <p>Pricing depends on:</p>
                <ul className="list-disc pl-5">
                    <li>Volume of items</li>
                    <li>Distance between pickup and warehouse</li>
                    <li>Floor level (stairs/elevator access)</li>
                    <li>Packing option selected</li>
                    <li>Storage unit size</li>
                    <li>Duration of storage</li>
                    <li>Special handling requirements</li>
                </ul>
                <p>Final pricing is shared before confirmation.</p>
            </div>
        ),
    },
    {
        question: "5. Are my belongings insured?",
        answer: (
            <div className="space-y-2">
                <p>Insurance is available as an optional add-on.</p>
                <p>Coverage applies to the declared value of your items and is subject to policy terms and approval.</p>
                <p>We strongly recommend opting for insurance, especially for high-value or fragile goods.</p>
            </div>
        ),
    },
    {
        question: "6. What happens if items are damaged?",
        answer: (
            <div className="space-y-2">
                <p>If you notice any damage:</p>
                <ul className="list-disc pl-5">
                    <li>Inform us within 48 hours of delivery or retrieval.</li>
                    <li>Share photos or unboxing video for review.</li>
                </ul>
                <p className="mt-2">Claims are evaluated based on:</p>
                <ul className="list-disc pl-5">
                    <li>Declared value</li>
                    <li>Packing option chosen</li>
                    <li>Insurance coverage</li>
                </ul>
                <p>Minor wear and tear or improper self-packing may not be covered.</p>
            </div>
        ),
    },
    {
        question: "7. Do you handle both local and long-distance moves?",
        answer: (
            <div className="space-y-2">
                <p>Yes, we handle:</p>
                <ul className="list-disc pl-5">
                    <li>Local city pickups</li>
                    <li>Within-region moves</li>
                </ul>
                <p>Long-distance or inter-city moves may be subject to availability and separate pricing.</p>
            </div>
        ),
    },
    {
        question: "8. Can I access my stored items anytime?",
        answer: (
            <div className="space-y-2">
                <p>Access is available by prior appointment.</p>
                <p>This helps us ensure security and smooth warehouse operations.</p>
            </div>
        ),
    },
    {
        question: "9. What if I want to add more items during pickup?",
        answer: (
            <div className="space-y-2">
                <p>No problem! Just inform our team.</p>
                <p>Additional items may lead to revised pricing based on volume and handling requirements.</p>
            </div>
        ),
    },
    {
        question: "10. What are the payment terms?",
        answer: (
            <div className="space-y-2">
                <p>A partial advance payment is required to confirm booking.</p>
                <p>Storage charges are billed in advance.</p>
                <p>Any additional services are billed separately.</p>
            </div>
        ),
    },
    {
        question: "11. Can I cancel my booking?",
        answer: (
            <div className="space-y-2">
                <p>Yes.</p>
                <ul className="list-disc pl-5">
                    <li>You can cancel within 24 hours of confirmation.</li>
                    <li>If our team has already been dispatched, operational charges may apply.</li>
                    <li>Cancellation is not possible once goods are in transit.</li>
                </ul>
            </div>
        ),
    },
    {
        question: "12. What happens if I miss storage payments?",
        answer: (
            <div className="space-y-2">
                <p>We’ll notify you in case of overdue payments.</p>
                <p>Continued non-payment may lead to restricted access and additional charges as per our service terms.</p>
            </div>
        ),
    },
]

export function FAQ() {
    const [openItem, setOpenItem] = useState<string | null>(null)

    const handleToggle = (value: string) => {
        setOpenItem(openItem === value ? null : value)
    }

    return (
        <div className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary">Got Questions?</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Frequently Asked Questions
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Everything you need to know about our services, pricing, and safety.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl">
                    <Accordion className="w-full space-y-4">
                        {faqs.map((faq, index) => {
                            const value = `item-${index}`
                            const isOpen = openItem === value
                            return (
                                <AccordionItem key={index} className="border-b-0 rounded-lg bg-white px-6 py-2 shadow-sm transition-all hover:shadow-md">
                                    <AccordionTrigger
                                        isOpen={isOpen}
                                        onClick={() => handleToggle(value)}
                                        className={`hover:no-underline text-left text-base font-medium ${isOpen ? 'text-primary' : 'text-gray-900 hover:text-primary'}`}
                                    >
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent isOpen={isOpen} className="text-gray-600 leading-7">
                                        <div className="pt-2 pb-4 border-t border-gray-100 mt-2">
                                            {faq.answer}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            )
                        })}
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
