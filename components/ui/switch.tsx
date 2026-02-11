"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"

// Radix is not installed, so I need to implement a simple Switch without Radix or install it.
// I'll implement a simple HTML checkbox styled as switch to avoid dependency.

const Switch = React.forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement> & { onCheckedChange?: (checked: boolean) => void }
>(({ className, onCheckedChange, checked, ...props }, ref) => (
    <label className={cn("relative inline-flex items-center cursor-pointer", className)}>
        <input
            type="checkbox"
            className="sr-only peer"
            ref={ref}
            checked={checked}
            onChange={(e) => {
                props.onChange?.(e)
                onCheckedChange?.(e.target.checked)
            }}
            {...props}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
    </label>
))
Switch.displayName = "Switch"

export { Switch }
