"use client"

import * as React from "react"
import { UnitSelection } from "./UnitSelection"
import { PickupScheduling } from "./PickupScheduling"
import { PackagingOption } from "./PackagingOption"
import { Summary } from "./Summary"
import { QuoteHeader } from "@/components/layout/QuoteHeader"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { AIEstimatorModal } from "./AIEstimatorModal"
import { Sparkles } from "lucide-react"

// Types
export type BookingState = {
    unitSize: number // sq ft
    unitType: "small" | "medium" | "large" | "custom"
    durationDays: number
    packaging: boolean
    pickupDate: Date | null
    pickupAddress: string
}

const INITIAL_STATE: BookingState = {
    unitSize: 25,
    unitType: "small",
    durationDays: 3,
    packaging: false,
    pickupDate: null,
    pickupAddress: "",
}

export function BookingWizard() {
    const [showAIModal, setShowAIModal] = React.useState(false)
    const [step, setStep] = React.useState(1)
    const [state, setState] = React.useState<BookingState>(INITIAL_STATE)
    const router = useRouter()

    // Pricing Constants & Logic
    const calculateDailyRate = (type: string, size: number) => {
        // Fixed Pricing
        if (type === "small") return 80
        if (type === "medium") return 150
        if (type === "large") return 283

        // Flexible Pricing
        if (type === "custom") {
            if (size <= 25) {
                return size * 4
            } else if (size <= 50) {
                // (25-50sq) pricing calculated in equation to pricing of 25 sq
                // 25sq fixed is 80, so rate is 80/25 = 3.2
                return size * 3.2
            } else if (size <= 100) {
                // (50-100sq) pricing calculated in equation to pricing of 50 sq
                // 50sq fixed is 150, so rate is 150/50 = 3.0
                return size * 3.0
            } else {
                // above 100 sq- pricing calculated in equation to pricing of 100 sq
                // 100sq fixed is 283, so rate is 283/100 = 2.83
                return size * 2.83
            }
        }
        return 0
    }

    const calculateTotal = () => {
        const dailyRate = calculateDailyRate(state.unitType, state.unitSize)
        // Minimum 3 days booking is enforced in UI, but safe to clamp here or just trust state
        const duration = Math.max(3, state.durationDays)
        return Math.round(dailyRate * duration)
    }

    const nextStep = () => {
        if (step === 3) {
            if (!state.pickupDate || !state.pickupAddress) {
                alert("Please select a pickup date and enter your address to proceed.")
                return
            }
        }
        setStep(s => s + 1)
    }
    const prevStep = () => setStep(s => s - 1)

    const handleConfirm = async () => {
        try {
            const response = await fetch("/api/orders", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    unitSize: state.unitSize,
                    unitType: state.unitType,
                    durationDays: Math.max(3, state.durationDays),
                    packaging: state.packaging,
                    pickupDate: state.pickupDate,
                    pickupAddress: state.pickupAddress,
                    totalCost: calculateTotal(),
                }),
            })

            if (response.ok) {
                const order = await response.json()
                router.push(`/payment/${order._id}`)
            } else {
                console.error("Failed to create order")
                // Optionally show error toast here
            }
        } catch (error) {
            console.error("Error submitting booking:", error)
        }
    }

    const handleAIEstimate = (result: { unitSize: number; unitType: string }) => {
        setState(prev => ({
            ...prev,
            unitSize: result.unitSize,
            unitType: result.unitType as any // Type assertion for simplicity
        }))
    }

    return (
        <div className="flex flex-col min-h-screen">
            <QuoteHeader currentStep={step} onStepClick={setStep} />

            <AIEstimatorModal
                isOpen={showAIModal}
                onClose={() => setShowAIModal(false)}
                onEstimateComplete={handleAIEstimate}
            />

            <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-6">
                            {/* Add AI Trigger Button in Step 1 */}
                            {step === 1 && (
                                <div className="mb-6 bg-primary/5 p-4 rounded-lg flex items-center justify-between border border-primary/10">
                                    <div>
                                        <h4 className="font-semibold text-primary flex items-center gap-2">
                                            <Sparkles className="w-4 h-4 ml-1" /> Not sure about the size?
                                        </h4>
                                        <p className="text-sm text-gray-600">Let our AI calculate the perfect unit size for you.</p>
                                    </div>
                                    <Button onClick={() => setShowAIModal(true)} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                                        Use AI Calculator
                                    </Button>
                                </div>
                            )}

                            {step === 1 && (
                                <UnitSelection
                                    state={state}
                                    onChange={(updates) => setState(prev => ({ ...prev, ...updates }))}
                                />
                            )}

                            {/* ... rest of the steps ... */}

                            {step === 2 && (
                                <PackagingOption
                                    state={state}
                                    onChange={(updates) => setState(prev => ({ ...prev, ...updates }))}
                                />
                            )}

                            {step === 3 && (
                                <PickupScheduling
                                    state={state}
                                    onChange={(updates) => setState(prev => ({ ...prev, ...updates }))}
                                />
                            )}

                            {step === 4 && (
                                <Summary
                                    state={state}
                                    totalCost={calculateTotal()}
                                    onConfirm={handleConfirm}
                                    onBack={prevStep}
                                />
                            )}

                            {step > 1 && step < 4 && (
                                <div className="flex justify-between pt-6">
                                    <Button variant="outline" onClick={prevStep}>Back</Button>
                                    <Button onClick={nextStep}>Next</Button>
                                </div>
                            )}
                            {step === 1 && (
                                <div className="flex justify-end pt-6">
                                    <Button onClick={nextStep}>Next</Button>
                                </div>
                            )}
                        </div>

                        {/* ... Sidebar ... */}
                        <div className="lg:col-span-1">
                            <Card className="sticky top-40">
                                <CardContent className="p-6">
                                    <h3 className="font-semibold text-lg mb-4">Quote Summary</h3>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex justify-between">
                                            <span>Unit Size ({state.unitSize} sq ft)</span>
                                            <span>₹{Math.round(calculateDailyRate(state.unitType, state.unitSize))}/day</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Duration ({state.durationDays} days)</span>
                                            <span>x {state.durationDays}</span>
                                        </div>
                                        {state.packaging && (
                                            <div className="flex justify-between text-primary font-medium">
                                                <span>Packaging Service</span>
                                                <span>Quote Requested</span>
                                            </div>
                                        )}
                                        <div className="pt-3 border-t font-bold text-lg flex justify-between">
                                            <span>Total</span>
                                            <span>₹{calculateTotal().toLocaleString()}</span>
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-2">* Final price may vary based on exact items. Packing charges are additional to this.</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
