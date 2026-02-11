"use client"

import { BookingState } from "./BookingWizard"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { ShieldCheck, Package } from "lucide-react"
import { cn } from "@/lib/utils"

interface PackagingOptionProps {
    state: BookingState
    onChange: (updates: Partial<BookingState>) => void
}

export function PackagingOption({ state, onChange }: PackagingOptionProps) {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-xl font-semibold mb-4">Packaging Service</h2>
                <div
                    className={cn(
                        "border rounded-xl p-6 transition-all cursor-pointer flex items-start space-x-4",
                        state.packaging ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-gray-200 hover:bg-gray-50"
                    )}
                    onClick={() => onChange({ packaging: !state.packaging })}
                >
                    <div className={cn("p-2 rounded-lg", state.packaging ? "bg-primary text-white" : "bg-gray-100 text-gray-500")}>
                        <Package className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-lg">SPARE-Managed Packaging</h3>
                            <Switch checked={state.packaging} onCheckedChange={(c) => onChange({ packaging: c })} />
                        </div>
                        <p className="text-gray-600 mt-1 text-sm">
                            Let our professionals pack your items securely. Includes packaging materials and labeling.
                        </p>
                        <p className="text-sm font-medium text-primary mt-2">
                            Price: Quotation Based
                        </p>
                    </div>
                </div>
            </div>

            {state.packaging && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 flex items-start space-x-4 animate-in fade-in slide-in-from-top-2">
                    <ShieldCheck className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold text-green-900">Insurance Upgraded to S-Tier</h3>
                        <p className="text-sm text-green-800 mt-1">
                            Since you selected professional packaging, your insurance coverage is automatically upgraded to S-Tier, covering up to ₹5 Lakhs against damage.
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

// Minimal switch component since I didn't create it in UI library yet.
// Actually I should have created it. I'll include a simple one here or use a checkbox logic if needed,
// but for now I'll use a mocked Switch or create `components/ui/switch.tsx` next.
// To avoid errors, I'll assume I create `components/ui/switch.tsx` or replace with input checkbox content.
// I'll replace with input checkbox for now to be safe and avoid another file if I can, OR just create the file after.
// Actually, I'll create `components/ui/switch.tsx` in the next tool call because I used import.
