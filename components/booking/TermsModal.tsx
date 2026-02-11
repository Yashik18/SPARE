"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

interface TermsModalProps {
    isOpen: boolean
    onClose: () => void
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-3xl">
                <DialogHeader>
                    <DialogTitle>SPARE – Terms & Conditions / Agreement</DialogTitle>
                    <DialogDescription>
                        Please read the following terms carefully before proceeding.
                    </DialogDescription>
                </DialogHeader>
                <div className="overflow-y-auto max-h-[60vh] pr-2">
                    <div className="space-y-6 text-sm text-gray-700">
                        <section>
                            <h3 className="font-semibold text-gray-900 mb-2">1. Scope of Services</h3>
                            <p>SPARE provides:</p>
                            <ul className="list-disc pl-5 space-y-1 mt-1">
                                <li>Pickup and transportation of goods</li>
                                <li>Optional professional packing</li>
                                <li>Storage facility services</li>
                                <li>Redelivery upon request</li>
                            </ul>
                            <p className="mt-2 text-xs text-gray-500">SPARE acts as a storage and logistics service provider and does not assume ownership of stored goods.</p>
                        </section>

                        <section>
                            <h3 className="font-semibold text-gray-900 mb-2">2. Booking & Scheduling</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Moving services must be booked at least 48 hours in advance.</li>
                                <li>During peak periods, 3–5 days prior booking is recommended.</li>
                                <li>Same-day or urgent bookings may attract additional charges.</li>
                                <li>SPARE reserves the right to reschedule due to operational or external factors.</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="font-semibold text-gray-900 mb-2">3. Packing Options</h3>
                            <div className="space-y-3">
                                <div>
                                    <h4 className="font-medium">A. Self-Packing</h4>
                                    <ul className="list-disc pl-5 space-y-1 mt-1">
                                        <li>Packing materials can be provided (chargeable).</li>
                                        <li>Customer is responsible for safe and secure packing.</li>
                                        <li>Damage caused due to improper packing will not be covered.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium">B. SPARE Professional Packing</h4>
                                    <ul className="list-disc pl-5 space-y-1 mt-1">
                                        <li>Packing done by trained personnel using standard materials.</li>
                                        <li>Liability for packing-related damage applies only if negligence is proven.</li>
                                        <li>Fragile or high-value items must be declared beforehand.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="font-semibold text-gray-900 mb-2">4. Pricing & Payment</h3>
                            <p>Charges are calculated based on:</p>
                            <ul className="list-disc pl-5 space-y-1 mt-1 mb-2">
                                <li>Volume and type of goods</li>
                                <li>Distance</li>
                                <li>Floor access (stairs/elevator)</li>
                                <li>Packing option</li>
                                <li>Storage unit size and duration</li>
                                <li>Special handling requirements</li>
                            </ul>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>A minimum advance payment is required to confirm booking.</li>
                                <li>Storage fees are billed in advance.</li>
                                <li>Additional items added at pickup may increase cost.</li>
                                <li>Late payments may attract penalties.</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="font-semibold text-gray-900 mb-2">5. Prohibited Items</h3>
                            <p>The following items are strictly prohibited:</p>
                            <ul className="list-disc pl-5 space-y-1 mt-1">
                                <li>Cash, jewelry, precious metals</li>
                                <li>Illegal substances</li>
                                <li>Weapons or explosives</li>
                                <li>Flammable or hazardous materials</li>
                                <li>Perishable goods</li>
                                <li>Plants or animals</li>
                            </ul>
                            <p className="mt-2 text-xs text-gray-500">SPARE reserves the right to refuse service if such items are found.</p>
                        </section>

                        <section>
                            <h3 className="font-semibold text-gray-900 mb-2">6. Insurance & Liability</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Insurance is optional unless otherwise specified. Coverage applies only to declared value.</li>
                                <li>Claims are subject to insurer approval.</li>
                                <li>Undeclared or misdeclared items may not be covered.</li>
                                <li>SPARE shall not be liable for: Natural disasters, Government restrictions, Civil unrest, Wear and tear, Improper self-packing, Minor cosmetic damage.</li>
                                <li>Liability, if applicable, shall be limited to the declared value or the service fee paid for the affected service, whichever is lower.</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="font-semibold text-gray-900 mb-2">7. Damage & Claims</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Any damage must be reported within 48 hours of delivery or retrieval.</li>
                                <li>Supporting proof (photos/videos) may be required.</li>
                                <li>Claims raised after this period will not be entertained.</li>
                                <li>Pre-existing damage is excluded.</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="font-semibold text-gray-900 mb-2">8. Storage Policy</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Storage fees are separate from transportation charges.</li>
                                <li>Loading, unloading, and redelivery are chargeable.</li>
                                <li>Access requires prior scheduling. SPARE may restrict access in case of unpaid dues.</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="font-semibold text-gray-900 mb-2">9. Cancellation Policy</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Cancellation allowed within 24 hours of booking confirmation.</li>
                                <li>If service team has been dispatched, operational charges may apply.</li>
                                <li>No cancellation once goods are in transit.</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="font-semibold text-gray-900 mb-2">10. Refund Policy</h3>
                            <p>Refunds, if applicable, will be processed after verification and may take standard banking timelines.</p>
                        </section>

                        <section>
                            <h3 className="font-semibold text-gray-900 mb-2">11. Amendments</h3>
                            <p>SPARE reserves the right to update these Terms from time to time. Continued use of services constitutes acceptance of revised terms.</p>
                        </section>

                        <div className="border-t pt-6 mt-8">
                            <h3 className="text-lg font-bold text-center mb-4">SPARE – CUSTOMER SERVICE AGREEMENT</h3>

                            <p className="text-center text-sm text-gray-600 mb-6 italic">
                                By accepting these terms, you agree to the following Service Agreement:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold mb-2">1. Services Selected</h4>
                                    <ul className="list-disc pl-5 space-y-1 text-xs">
                                        <li>Pickup & Transportation</li>
                                        <li>Storage Services</li>
                                        <li>Redelivery</li>
                                        <li>Insurance Coverage</li>
                                        <li>SPARE Professional Packing</li>
                                        <li>Self-Packing</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">2. Customer Declaration</h4>
                                    <ul className="list-disc pl-5 space-y-1 text-xs">
                                        <li>I confirm I am the lawful owner of the goods.</li>
                                        <li>I confirm no prohibited items are included.</li>
                                        <li>I confirm all goods and values are declared accurately.</li>
                                        <li>I understand misdeclaration may void insurance and liability.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-4">
                                <h4 className="font-semibold mb-2">10. Legal</h4>
                                <ul className="list-disc pl-5 space-y-1 text-xs">
                                    <li>I agree that this agreement is governed by Indian law.</li>
                                    <li>I accept these terms as legally binding upon digital confirmation.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
