"use client"

import * as React from "react"
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { User, LogOut } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"

export function UserMenu() {
    const { data: session, status } = useSession()

    if (status === "loading") return null

    if (status === "unauthenticated") {
        return (
            <div className="flex items-center gap-4 ml-8">
                <Link href="/login" className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-600">
                    Log in
                </Link>
            </div>
        )
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full ml-4 p-0 overflow-hidden">
                    {session?.user?.image ? (
                        <Image
                            src={session.user.image}
                            alt={session.user.name || "User"}
                            fill
                            className="rounded-full object-cover"
                        />
                    ) : (
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <span className="font-semibold text-sm">
                                {session?.user?.name?.charAt(0) || "U"}
                            </span>
                        </div>
                    )}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                        {session?.user?.name && (
                            <p className="font-medium">{session.user.name}</p>
                        )}
                        {session?.user?.email && (
                            <p className="w-[200px] truncate text-sm text-muted-foreground">
                                {session.user.email}
                            </p>
                        )}
                    </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link href="/profile" className="cursor-pointer">
                        <User className="mr-2 h-4 w-4" />
                        Profile
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    className="cursor-pointer text-red-600 focus:text-red-600"
                    onClick={() => signOut({ callbackUrl: "/" })}
                >
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
