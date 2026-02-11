"use client"

import Link from "next/link"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SmartCTAProps {
    className?: string
    size?: "default" | "sm" | "lg" | "icon"
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
    children?: React.ReactNode
}

export function SmartCTA({ className, size = "default", children = "Get SPARE space" }: SmartCTAProps) {
    const { status } = useSession()

    // If loading, show a disabled button or skeleton to prevent flicker
    if (status === "loading") {
        return <Button disabled size={size} className={className}>{children}</Button>
    }

    // If logged in, go to Quote
    if (status === "authenticated") {
        return (
            <Link href="/quote">
                <Button size={size} className={className}>
                    {children}
                </Button>
            </Link>
        )
    }

    // If not logged in, go to Login
    return (
        <Link href="/login">
            <Button size={size} className={className}>
                {children}
            </Button>
        </Link>
    )
}
