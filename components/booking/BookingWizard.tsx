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
    durationMonths: number
    packaging: boolean
    pickupDate: Date | null
}

const INITIAL_STATE: BookingState = {
    unitSize: 25,
    unitType: "small",
    durationMonths: 1,
    packaging: false,
    pickupDate: null,
}

export function BookingWizard() {
    const [showAIModal, setShowAIModal] = React.useState(false)
    const [step, setStep] = React.useState(1)
    const [state, setState] = React.useState<BookingState>(INITIAL_STATE)
    const router = useRouter()

    // Pricing Constants (as per PRD logic)
    // Base prices per sq ft per month (mocked)
    const BASE_RATE_PER_SQFT = 50 // ₹50 per sq ft
    const SURGE_MULTIPLIER = 1.0 // Phase 1: 1.0

    const calculateTotal = () => {
        const storageCost = state.unitSize * BASE_RATE_PER_SQFT * state.durationMonths * SURGE_MULTIPLIER
        // Packaging is quote-based, so not added here, just noted.
        return storageCost
    }

    const nextStep = () => setStep(s => s + 1)
    const prevStep = () => setStep(s => s - 1)

    const handleConfirm = () => {
        router.push("/")
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
                                    <h3 className="font-semibold text-lg mb-4">Estimated Quote</h3>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex justify-between">
                                            <span>Unit Size ({state.unitSize} sq ft)</span>
                                            <span>₹{state.unitSize * BASE_RATE_PER_SQFT}/mo</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Duration ({state.durationMonths} mo)</span>
                                            <span>x {state.durationMonths}</span>
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
                                        <p className="text-xs text-muted-foreground mt-2">* Final price may vary based on exact items and surge conditions.</p>
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
