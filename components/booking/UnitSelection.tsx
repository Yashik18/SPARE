"use client"

import { BookingState } from "./BookingWizard"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Sparkles, Box } from "lucide-react"
import { cn } from "@/lib/utils"

interface UnitSelectionProps {
    state: BookingState
    onChange: (updates: Partial<BookingState>) => void
    onOpenAI?: () => void
}

const UNIT_TYPES = [
    { id: "small", size: 25, label: "Small Unit", desc: "Fits ~1 room of items (20-30 boxes)", icon: Box },
    { id: "medium", size: 50, label: "Medium Unit", desc: "Fits ~1-2 BHK household items", icon: Box },
    { id: "large", size: 100, label: "Large Unit", desc: "Fits 2-3 BHK or Office Inventory", icon: Box },
]

export function UnitSelection({ state, onChange, onOpenAI }: UnitSelectionProps) {

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Select Storage Space</h2>
                <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary/5" onClick={onOpenAI}>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Not sure? Use AI Estimate
                </Button>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {UNIT_TYPES.map((unit) => (
                    <div
                        key={unit.id}
                        className={cn(
                            "relative flex items-start space-x-4 rounded-xl border p-4 cursor-pointer transition-all hover:bg-gray-50",
                            state.unitType === unit.id ? "border-primary ring-1 ring-primary bg-primary/5 hover:bg-primary/5" : "border-gray-200"
                        )}
                        onClick={() => onChange({ unitType: unit.id as any, unitSize: unit.size })}
                    >
                        <div className="flex-shrink-0 mt-1">
                            <unit.icon className={cn("h-6 w-6", state.unitType === unit.id ? "text-primary" : "text-gray-400")} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                                <p className={cn("text-sm font-medium", state.unitType === unit.id ? "text-primary" : "text-gray-900")}>
                                    {unit.label} ({unit.size} sq ft)
                                </p>
                                {state.unitType === unit.id && <span className="h-2 w-2 rounded-full bg-primary" />}
                            </div>
                            <p className="mt-1 text-sm text-gray-500">{unit.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 pt-6 border-t">
                <Label className="text-base font-semibold mb-4 block">Or enter custom size</Label>
                <div className="flex items-center space-x-4">
                    <input
                        type="range"
                        min="10"
                        max="500"
                        step="5"
                        value={state.unitSize}
                        onChange={(e) => onChange({ unitSize: parseInt(e.target.value), unitType: "custom" })}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex items-center space-x-2 border rounded-md px-3 py-2 bg-white w-32">
                        <input
                            type="number"
                            value={state.unitSize}
                            onChange={(e) => onChange({ unitSize: parseInt(e.target.value), unitType: "custom" })}
                            className="w-full outline-none text-right font-medium"
                        />
                        <span className="text-gray-500 text-sm">sq ft</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
