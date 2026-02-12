"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Sparkles, Camera, Upload, X, Image as ImageIcon, Package } from "lucide-react"
import Image from "next/image"

interface AIEstimatorModalProps {
    isOpen: boolean
    onClose: () => void
    onEstimateComplete: (result: { unitSize: number; unitType: string }) => void
}

export function AIEstimatorModal({ isOpen, onClose, onEstimateComplete }: AIEstimatorModalProps) {
    const [description, setDescription] = React.useState("")
    const [image, setImage] = React.useState<string | null>(null)
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState("")
    const [result, setResult] = React.useState<{ unitSize: number; unitType: string; reasoning?: string; itemCount?: string } | null>(null)

    const fileInputRef = React.useRef<HTMLInputElement>(null)

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImage(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleAnalyze = async () => {
        if (!description.trim() && !image) return

        setIsLoading(true)
        setError("")

        try {
            const response = await fetch("/api/estimate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ description, image }),
            })

            if (!response.ok) throw new Error("Failed to analyze")

            const data = await response.json()

            // Just set result, don't close yet
            setResult({
                unitSize: data.estimatedSqFt,
                unitType: data.recommendedUnit, // don't lowercase yet, better for display
                reasoning: data.reasoning,
                itemCount: data.itemCount
            })
        } catch (err) {
            setError("Failed to calculate space. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    const handleApply = () => {
        if (result) {
            onEstimateComplete({
                unitSize: result.unitSize,
                unitType: result.unitType.toLowerCase(),
            })
            onClose()
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-primary" />
                        AI Space Calculator
                    </DialogTitle>
                    <DialogDescription>
                        Take a photo of your items or describe them. Our AI will analyze the volume and recommend the perfect unit size.
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-6 py-4">
                    {/* Results View */}
                    {result ? (
                        <div className="space-y-4">
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                                <h3 className="text-lg font-semibold text-green-800">Use {result.unitType} Unit</h3>
                                <div className="text-3xl font-bold text-green-900 my-2">{result.unitSize} sq ft</div>
                                <p className="text-sm text-green-700">Estimated Space Required</p>
                            </div>

                            {result.reasoning && (
                                <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-700">
                                    <p className="font-semibold mb-1">AI Analysis:</p>
                                    <p>{result.reasoning}</p>
                                </div>
                            )}

                            {result.itemCount && (
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Package className="w-4 h-4" />
                                    <span>Identified approx. {result.itemCount} items</span>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            {/* Instructions Box */}
                            <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-sm text-blue-800">
                                <p className="font-semibold mb-1">📸 Tips for best results:</p>
                                <ul className="list-disc list-inside space-y-1 text-xs">
                                    <li>Stand back to capture the entire pile of items.</li>
                                    <li>Ensure the area is well-lit.</li>
                                    <li>For packed boxes, try to show the count clearly.</li>
                                </ul>
                            </div>

                            {/* Image Upload Area */}
                            <div className="space-y-2">
                                <Label>1. Upload Photo (Recommended)</Label>
                                {!image ? (
                                    <div className="grid grid-cols-2 gap-4">
                                        <Button
                                            variant="outline"
                                            className="h-24 flex flex-col gap-2 border-dashed border-2"
                                            onClick={() => fileInputRef.current?.click()}
                                        >
                                            <Camera className="w-6 h-6 text-gray-400" />
                                            <span className="text-xs text-gray-500">Take Photo</span>
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="h-24 flex flex-col gap-2 border-dashed border-2"
                                            onClick={() => fileInputRef.current?.click()}
                                        >
                                            <Upload className="w-6 h-6 text-gray-400" />
                                            <span className="text-xs text-gray-500">Upload File</span>
                                        </Button>
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            className="hidden"
                                            accept="image/*"
                                            capture="environment" // trigger camera on mobile
                                            onChange={handleImageUpload}
                                        />
                                    </div>
                                ) : (
                                    <div className="relative rounded-lg overflow-hidden border bg-gray-100 group">
                                        <div className="aspect-video relative">
                                            <Image src={image} alt="Preview" fill className="object-contain" />
                                        </div>
                                        <Button
                                            variant="destructive"
                                            size="icon"
                                            className="absolute top-2 right-2 h-8 w-8 rounded-full opacity-90 hover:opacity-100"
                                            onClick={() => setImage(null)}
                                        >
                                            <X className="w-4 h-4" />
                                        </Button>
                                    </div>
                                )}
                            </div>

                            <div className="relative flex items-center">
                                <span className="w-full border-t" />
                                <span className="absolute left-1/2 -translate-x-1/2 bg-white px-2 text-xs text-gray-500 uppercase">Or / And</span>
                            </div>

                            {/* Text Input Area */}
                            <div className="space-y-2">
                                <Label>2. Describe Items</Label>
                                <Textarea
                                    placeholder="I have a king size bed, 2 wardrobes, and about 20 medium boxes..."
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="min-h-[80px]"
                                />
                            </div>
                        </>
                    )}

                    {error && <p className="text-sm text-red-500">{error}</p>}
                </div>

                <DialogFooter>
                    {result ? (
                        <div className="flex gap-2 w-full">
                            <Button variant="outline" className="flex-1" onClick={() => setResult(null)}>
                                Try Again
                            </Button>
                            <Button className="flex-1 bg-green-600 hover:bg-green-700" onClick={handleApply}>
                                Apply Recommendation
                            </Button>
                        </div>
                    ) : (
                        <>
                            <Button variant="outline" onClick={onClose} disabled={isLoading}>
                                Cancel
                            </Button>
                            <Button onClick={handleAnalyze} disabled={(!description.trim() && !image) || isLoading} className="bg-primary text-white">
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Analyzing...
                                    </>
                                ) : (
                                    "Calculate Space"
                                )}
                            </Button>
                        </>
                    )}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
