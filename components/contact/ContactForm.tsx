"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
    return (
        <form className="space-y-6">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                    <Label htmlFor="first-name">First name</Label>
                    <div className="mt-2.5">
                        <Input type="text" name="first-name" id="first-name" autoComplete="given-name" />
                    </div>
                </div>
                <div>
                    <Label htmlFor="last-name">Last name</Label>
                    <div className="mt-2.5">
                        <Input type="text" name="last-name" id="last-name" autoComplete="family-name" />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="mt-2.5">
                        <Input type="email" name="email" id="email" autoComplete="email" />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <Label htmlFor="phone-number">Phone number</Label>
                    <div className="mt-2.5">
                        <Input type="tel" name="phone-number" id="phone-number" autoComplete="tel" />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <Label htmlFor="message">Message</Label>
                    <div className="mt-2.5">
                        <Textarea name="message" id="message" rows={4} />
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <Button type="submit" className="w-full">Let's talk</Button>
            </div>
        </form>
    )
}
