"use client"

import { BookingState } from "./BookingWizard"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Calendar as CalendarIcon } from "lucide-react"

interface PickupSchedulingProps {
    state: BookingState
    onChange: (updates: Partial<BookingState>) => void
}

export function PickupScheduling({ state, onChange }: PickupSchedulingProps) {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-xl font-semibold mb-4">Schedule Pickup & Duration</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="duration">Storage Duration (Months)</Label>
                        <div className="flex items-center space-x-2">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => onChange({ durationMonths: Math.max(1, state.durationMonths - 1) })}
                            >-</Button>
                            <div className="flex-1 text-center font-medium border rounded-md py-2">
                                {state.durationMonths} Month{state.durationMonths > 1 ? 's' : ''}
                            </div>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => onChange({ durationMonths: state.durationMonths + 1 })}
                            >+</Button>
                        </div>
                        <p className="text-xs text-muted-foreground">Discounts available for 3+ months.</p>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="date">Pickup Date</Label>
                        <div className="relative">
                            <Input
                                type="date"
                                id="date"
                                className="pl-10"
                                onChange={(e) => onChange({ pickupDate: new Date(e.target.value) })}
                            />
                            <CalendarIcon className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="font-medium text-blue-900 mb-2">Pickup Service Includes:</h3>
                <ul className="list-disc list-inside text-sm text-blue-800 space-y-1">
                    <li>Doorstep collection</li>
                    <li>Basic handling</li>
                    <li>Transportation to facility</li>
                </ul>
            </div>
        </div>
    )
}

// Helper button needed here since I can't import Button inside the function if it's not defined
import { Button } from "@/components/ui/button"
