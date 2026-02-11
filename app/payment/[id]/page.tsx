"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { CheckCircle2, Loader2, CreditCard } from "lucide-react"

interface PaymentPageProps {
    params: Promise<{ id: string }>
}

export default function PaymentPage({ params }: PaymentPageProps) {
    const router = useRouter()
    const [orderId, setOrderId] = useState<string | null>(null)
    const [isProcessing, setIsProcessing] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    useEffect(() => {
        params.then(resolvedParams => setOrderId(resolvedParams.id))
    }, [params])

    const handlePayment = async () => {
        if (!orderId) return

        setIsProcessing(true)

        // Simulate network delay for "processing"
        setTimeout(async () => {
            try {
                const response = await fetch("/api/payment", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ orderId }),
                })

                if (response.ok) {
                    setIsSuccess(true)
                    // Redirect after a short delay to show success state
                    setTimeout(() => {
                        router.push("/")
                    }, 2000)
                } else {
                    console.error("Payment failed")
                    setIsProcessing(false)
                }
            } catch (error) {
                console.error("Error processing payment:", error)
                setIsProcessing(false)
            }
        }, 1500)
    }

    if (!orderId) {
        return <div className="flex h-screen items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
    }

    if (isSuccess) {
        return (
            <div className="flex h-screen items-center justify-center bg-gray-50 px-4">
                <Card className="max-w-md w-full text-center p-8">
                    <div className="flex justify-center mb-6">
                        <CheckCircle2 className="h-16 w-16 text-green-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
                    <p className="text-gray-600 mb-6">Your pickup has been scheduled. You can track your items in your dashboard.</p>
                    <Button onClick={() => router.push("/")} className="w-full">
                        Go to Dashboard
                    </Button>
                </Card>
            </div>
        )
    }

    return (
        <div className="flex h-screen items-center justify-center bg-gray-50 px-4">
            <Card className="max-w-md w-full">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <CreditCard className="w-6 h-6" />
                        Secure Payment
                    </CardTitle>
                    <CardDescription>
                        Complete your booking securely via Razorpay (Mock).
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-800">
                        <p className="font-semibold">Demo Mode</p>
                        <p>This is a mock payment gateway. No actual money will be deducted.</p>
                    </div>

                    <div className="border-t pt-4">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600">Order ID</span>
                            <span className="font-mono text-xs">{orderId}</span>
                        </div>
                        <div className="flex justify-between items-center font-bold text-lg">
                            <span>Total Amount</span>
                            <span>₹{/* We could fetch order details here, but for now just show pay button */} ---</span>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button
                        onClick={handlePayment}
                        disabled={isProcessing}
                        className="w-full h-12 text-lg bg-[#3399cc] hover:bg-[#2b81ac]" // Razorpay blue-ish color
                    >
                        {isProcessing ? (
                            <>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                Processing...
                            </>
                        ) : (
                            "Pay Now"
                        )}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
