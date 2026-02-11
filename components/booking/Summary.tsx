"use client"

import { BookingState } from "./BookingWizard"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

interface SummaryProps {
    state: BookingState
    onConfirm: () => void
    onBack: () => void
    totalCost: number
}

import { useState } from "react"
import { TermsModal } from "./TermsModal"

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"

export function Summary({ state, onConfirm, onBack, totalCost }: SummaryProps) {
    const [showTerms, setShowTerms] = useState(false)
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader className="pb-4">
                    <CardTitle>Review your Booking</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600">Unit Type</span>
                        <span className="font-medium capitalize">{state.unitType === 'custom' ? 'Custom Size' : state.unitType + ' Unit'} ({state.unitSize} sq ft)</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600">Duration</span>
                        <span className="font-medium">{state.durationDays} Days</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600">Pickup Date</span>
                        <span className="font-medium">{state.pickupDate ? state.pickupDate.toLocaleDateString() : 'Not Scheduled'}</span>
                    </div>
                    <div className="flex justify-between items-start py-2 border-b">
                        <span className="text-gray-600">Pickup Address</span>
                        <span className="font-medium text-right max-w-[50%]">{state.pickupAddress || 'Not Provided'}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600">Packaging</span>
                        <span className="font-medium">{state.packaging ? 'SPARE-Managed (Professional)' : 'Self-Managed'}</span>
                    </div>
                    {state.packaging && (
                        <div className="flex justify-between items-center py-2 border-b text-green-600">
                            <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-1" /> Insurance</span>
                            <span className="font-medium">S-Tier (Included)</span>
                        </div>
                    )}
                </CardContent>
                <div className="bg-gray-50 p-6 flex justify-between items-center border-t">
                    <div>
                        <p className="text-sm text-gray-500">Total Amount</p>
                        <p className="text-2xl font-bold">₹{totalCost.toLocaleString()}</p>
                    </div>
                    {state.packaging && (
                        <div className="text-right">
                            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium">
                                Packaging quote via call
                            </span>
                        </div>
                    )}
                </div>
            </Card>

            <div className="flex items-start space-x-2 text-sm text-gray-500 bg-blue-50 p-4 rounded-lg">
                <input type="checkbox" id="terms" className="mt-1" />
                <label htmlFor="terms">
                    I acknowledge that prices may vary based on actual volume measurements. Packing charges are additional to this. Minimum booking of 3 days applies.
                    <button type="button" onClick={() => setShowTerms(true)} className="text-primary hover:underline ml-1 font-medium">
                        View Terms & Conditions
                    </button>
                    .
                </label>
            </div>

            <TermsModal isOpen={showTerms} onClose={() => setShowTerms(false)} />

            <div className="pt-4 grid grid-cols-4 gap-4">
                <Button variant="outline" className="col-span-1 py-6" onClick={onBack}>Back</Button>
                <Button className="col-span-3 text-lg py-6" onClick={onConfirm}>Confirm Booking & Request Pickup</Button>
            </div>
        </div>
    )
}
