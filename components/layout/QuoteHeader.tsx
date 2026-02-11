"use client"

import * as React from "react"
import Link from "next/link"
import NextImage from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { UserMenu } from "@/components/layout/UserMenu"

interface QuoteHeaderProps {
    currentStep: number
    onStepClick?: (step: number) => void
}

interface Order {
    _id: string
    unitType: string
    unitSize: number
    durationDays: number
    pickupDate: string
    totalCost: number
    status: string
}

export function QuoteHeader({ currentStep, onStepClick }: QuoteHeaderProps) {
    const steps = [
        { id: 1, label: "Select a plan" },
        { id: 2, label: "Select boxes & services" },
        { id: 3, label: "Select a date" },
        { id: 4, label: "Finalize" },
    ]

    const [showItems, setShowItems] = React.useState(false)
    const [orders, setOrders] = React.useState<Order[]>([])
    const popoverRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        if (showItems) {
            fetch("/api/orders")
                .then(res => res.json())
                .then(data => {
                    if (Array.isArray(data)) setOrders(data)
                })
                .catch(err => console.error("Failed to load orders", err))
        }
    }, [showItems])

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
                setShowItems(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <header className="bg-white border-b sticky top-0 z-50">
            {/* Top Bar */}
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 border-b border-gray-100">
                <div className="flex items-center gap-x-8">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Spare</span>
                        <NextImage
                            className="h-10 w-auto"
                            src="/logo.png"
                            alt="Spare Logo"
                            width={150}
                            height={50}
                            priority
                        />
                    </Link>
                </div>
                <div className="flex items-center gap-x-6">
                    <div className="relative" ref={popoverRef}>
                        <button
                            onClick={() => setShowItems(!showItems)}
                            className="text-sm font-semibold text-gray-600 hidden sm:block hover:text-primary transition-colors focus:outline-none"
                        >
                            Your items
                        </button>

                        {showItems && (
                            <div className="absolute right-0 mt-2 w-96 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 p-4">
                                <h3 className="text-lg font-bold text-green-600 mb-4">Your items</h3>
                                <div className="space-y-3 max-h-[60vh] overflow-y-auto">
                                    {orders.length > 0 ? (
                                        orders.map((order: any) => (
                                            <div key={order._id} className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                                                <div className="flex justify-between items-start mb-2">
                                                    <div>
                                                        <span className="font-semibold text-gray-800 capitalize">{order.unitType} Unit</span>
                                                        <p className="text-xs text-gray-500">{order.unitSize} sq ft • {order.durationDays} days</p>
                                                    </div>
                                                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${order.status === 'pickup_scheduled' ? 'bg-green-100 text-green-700' :
                                                        order.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                                                            'bg-gray-100 text-gray-700'
                                                        }`}>
                                                        {order.status.replace('_', ' ').toUpperCase()}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between items-center text-sm pt-2 border-t">
                                                    <span className="text-gray-500">Pickup: {order.pickupDate ? new Date(order.pickupDate).toLocaleDateString() : 'Not set'}</span>
                                                    <span className="font-bold">₹{order.totalCost}</span>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center py-6">
                                            <p className="text-gray-600 text-sm mb-4">You haven't stored anything with us yet</p>
                                            <Link href="/quote" onClick={() => setShowItems(false)}>
                                                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                                                    Get spare space
                                                </Button>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="hidden sm:flex items-center gap-x-4">
                        <UserMenu />
                    </div>
                </div>
            </div>

            {/* Stepper Bar */}
            <div className="bg-white py-4 shadow-sm">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <nav aria-label="Progress">
                        <ol role="list" className="flex items-center justify-center space-x-2 sm:space-x-8 lg:space-x-12">
                            {steps.map((step) => {
                                const isClickable = step.id < currentStep
                                return (
                                    <li key={step.id} className="relative flex items-center">
                                        <button
                                            onClick={() => isClickable && onStepClick?.(step.id)}
                                            disabled={!isClickable}
                                            className={`group flex items-center focus:outline-none ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}
                                        >
                                            {step.id < currentStep ? (
                                                // Completed Step
                                                <div className="flex items-center">
                                                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-400 group-hover:bg-gray-500 transition-colors">
                                                        <Check className="h-5 w-5 text-white" aria-hidden="true" />
                                                    </span>
                                                    <span className="ml-3 text-sm font-medium text-gray-400 group-hover:text-gray-500 hidden sm:block">
                                                        {step.label}
                                                    </span>
                                                </div>
                                            ) : step.id === currentStep ? (
                                                // Current Step
                                                <div className="flex items-center" aria-current="step">
                                                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500 ring-4 ring-green-100">
                                                        <span className="text-white font-bold text-sm">{step.id}</span>
                                                    </span>
                                                    <span className="ml-3 text-sm font-medium text-green-600 hidden sm:block">
                                                        {step.label}
                                                    </span>
                                                </div>
                                            ) : (
                                                // Upcoming Step
                                                <div className="flex items-center">
                                                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-200">
                                                        <span className="text-gray-400 font-medium text-sm">{step.id}</span>
                                                    </span>
                                                    <span className="ml-3 text-sm font-medium text-gray-400 hidden sm:block">
                                                        {step.label}
                                                    </span>
                                                </div>
                                            )}
                                        </button>
                                    </li>
                                )
                            })}
                        </ol>
                    </nav>
                </div>
            </div>
        </header>
    )
}
