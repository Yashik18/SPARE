"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
    const [isLoading, setIsLoading] = React.useState(false)
    const [submitted, setSubmitted] = React.useState(false)
    const [error, setError] = React.useState("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        setError("")

        const formData = new FormData(e.currentTarget)
        const data = {
            firstName: formData.get("first-name"),
            lastName: formData.get("last-name"),
            email: formData.get("email"),
            phone: formData.get("phone-number"),
            message: formData.get("message"),
        }

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })

            if (!res.ok) throw new Error("Failed to submit")

            setSubmitted(true)
        } catch (err) {
            setError("Something went wrong. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    if (submitted) {
        return (
            <div className="text-center p-8 bg-green-50 rounded-lg">
                <h3 className="text-2xl font-semibold text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700">Thank you for reaching out. We'll get back to you shortly.</p>
                <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-6">Send another message</Button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                    <Label htmlFor="first-name">First name</Label>
                    <div className="mt-2.5">
                        <Input type="text" name="first-name" id="first-name" autoComplete="given-name" required disabled={isLoading} />
                    </div>
                </div>
                <div>
                    <Label htmlFor="last-name">Last name</Label>
                    <div className="mt-2.5">
                        <Input type="text" name="last-name" id="last-name" autoComplete="family-name" required disabled={isLoading} />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="mt-2.5">
                        <Input type="email" name="email" id="email" autoComplete="email" required disabled={isLoading} />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <Label htmlFor="phone-number">Phone number</Label>
                    <div className="mt-2.5">
                        <Input type="tel" name="phone-number" id="phone-number" autoComplete="tel" disabled={isLoading} />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <Label htmlFor="message">Message</Label>
                    <div className="mt-2.5">
                        <Textarea name="message" id="message" rows={4} required disabled={isLoading} />
                    </div>
                </div>
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <div className="mt-10">
                <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Let's talk"}
                </Button>
            </div>
        </form>
    )
}
