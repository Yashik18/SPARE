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

export function Summary({ state, onConfirm, onBack, totalCost }: SummaryProps) {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-4">Review your Booking</h2>

            <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
                <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600">Unit Type</span>
                        <span className="font-medium capitalize">{state.unitType === 'custom' ? 'Custom Size' : state.unitType + ' Unit'} ({state.unitSize} sq ft)</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600">Duration</span>
                        <span className="font-medium">{state.durationMonths} Months</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600">Pickup Date</span>
                        <span className="font-medium">{state.pickupDate ? state.pickupDate.toLocaleDateString() : 'Not Scheduled'}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600">Packaging</span>
                        <span className="font-medium">{state.packaging ? 'Start-Managed (Professional)' : 'Self-Managed'}</span>
                    </div>
                    {state.packaging && (
                        <div className="flex justify-between items-center py-2 border-b text-green-600">
                            <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-1" /> Insurance</span>
                            <span className="font-medium">S-Tier (Included)</span>
                        </div>
                    )}
                </div>
                <div className="bg-gray-50 p-6 flex justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-500">Estimated Total</p>
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
            </div>

            <div className="flex items-start space-x-2 text-sm text-gray-500 bg-blue-50 p-4 rounded-lg">
                <input type="checkbox" id="terms" className="mt-1" />
                <label htmlFor="terms">I acknowledge that prices may vary based on actual volume measurements during pickup. High demand surcharge of 1.0x is currently applied.</label>
            </div>

            <div className="pt-4 grid grid-cols-4 gap-4">
                <Button variant="outline" className="col-span-1 py-6" onClick={onBack}>Back</Button>
                <Button className="col-span-3 text-lg py-6" onClick={onConfirm}>Confirm Booking & Request Pickup</Button>
            </div>
        </div>
    )
}
