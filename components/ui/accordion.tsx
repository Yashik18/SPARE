"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const Accordion = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("divide-y divide-gray-200", className)} {...props} />
))
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("border-b", className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement> & { isOpen?: boolean; onClick?: () => void }
>(({ className, children, isOpen, onClick, ...props }, ref) => (
    <button
        ref={ref}
        onClick={onClick}
        className={cn(
            "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 w-full text-left",
            className
        )}
        {...props}
    >
        {children}
        <ChevronDown
            className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen ? "rotate-180" : "")}
        />
    </button>
))
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { isOpen?: boolean }
>(({ className, children, isOpen, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
            isOpen ? "block" : "hidden",
            className
        )}
        {...props}
    >
        <div className="pb-4 pt-0">{children}</div>
    </div>
))
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
