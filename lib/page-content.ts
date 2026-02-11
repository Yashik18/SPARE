export type PageContent = {
    title: string;
    subtitle: string;
    sections: {
        heading?: string;
        content: string | string[];
    }[];
    action?: {
        text: string;
        href: string;
    };
};

export const PAGES_CONTENT: Record<string, Record<string, PageContent>> = {
    solutions: {
        household: {
            title: "Household Storage",
            subtitle: "Reclaim your living space with our secure, on-demand household storage.",
            sections: [
                {
                    heading: "How It Works",
                    content: [
                        "1. **Schedule a Pickup**: specific item pickup or bulk moves. We come to you.",
                        "2. **We Pack & Protect**: Our team uses industrial-grade materials to ensure safety.",
                        "3. **Secure Storage**: Items are stored in our climate-controlled, 24/7 monitored facilities.",
                        "4. **On-Demand Return**: Request any item back with a single click in your inventory app."
                    ]
                },
                {
                    heading: "Perfect For",
                    content: "Seasonal gear (skiing, camping), decluttering before a sale, home renovations, or just creating more room for what matters."
                }
            ],
            action: { text: "Get a Household Quote", href: "/quote" }
        },
        business: {
            title: "Business Storage & Logistics",
            subtitle: "Scale your inventory without renting a warehouse. We handle the logistics.",
            sections: [
                {
                    heading: "Inventory Management",
                    content: "Track every SKU online. Our visual inventory system lets you see exactly what you have in stock without visiting the warehouse."
                },
                {
                    heading: "Last-Mile Delivery",
                    content: "Need stock sent to a store or a customer? We can pick, pack, and ship directly from storage to your destination."
                },
                {
                    heading: "Document Archiving",
                    content: "Secure, compliant storage for sensitive documents with retrieval options."
                }
            ],
            action: { text: "Get a Business Quote", href: "/quote" }
        },
        packaging: {
            title: "Professional Packaging",
            subtitle: "Don't risk damage. Let the experts handle the boxing.",
            sections: [
                {
                    heading: "Materials We Use",
                    content: [
                        "- **Heavy-Duty Double-Walled Boxes**: For maximum crush resistance.",
                        "- **Bubble Wrap & Air Pillows**: For fragile electronics and glass.",
                        "- **Furniture Blankets & Shrink Wrap**: To prevent scratches and dust."
                    ]
                },
                {
                    heading: "Service Options",
                    content: "Choose between full-service packing (we do everything) or partial-pack (we handle the breakables, you handle the clothes)."
                }
            ],
            action: { text: "Order Packaging", href: "/quote" }
        },
        moving: {
            title: "Moving Services",
            subtitle: "The seamless bridge between your old home and your new one.",
            sections: [
                {
                    heading: "Storage-in-Transit",
                    content: "Gap between leases? We can pick up from your old place, store your goods for days or weeks, and deliver to your new home when you're ready."
                },
                {
                    heading: "White-Glove Service",
                    content: "Our team handles disassembly, packing, loading, unloading, and reassembly. You don't lift a finger."
                }
            ],
            action: { text: "Plan Your Move", href: "/quote" }
        }
    },
    support: {
        pricing: {
            title: "Simple, Transparent Pricing",
            subtitle: "Pay only for the space you use. No hidden fees.",
            sections: [
                {
                    heading: "Standard Rates",
                    content: [
                        "**Small Items (Boxes/Bins)**: Starting at $5/month per item.",
                        "**Bulky Items (Furniture)**: Starting at $15/month per item.",
                        "**Full Units**: 5x5 units from $50/month."
                    ]
                },
                {
                    heading: "Additional Services",
                    content: "Pickups start at $29. Returns are $29 + mileage. Professional packing is billed hourly."
                }
            ],
            action: { text: "Calculate Price", href: "/quote" }
        },
        documentation: {
            title: "Platform Documentation",
            subtitle: "Technical resources for integrations and bulk management.",
            sections: [
                {
                    heading: "API Access",
                    content: "Enterprise clients can access our Inventory API to sync stock levels with their ERP. Contact sales for keys."
                },
                {
                    heading: "Web Portal Guide",
                    content: "Learn how to use the dashboard to tag items, request returns, and manage billing methods."
                }
            ]
        },
        guides: {
            title: "Storage Guides",
            subtitle: "Tips and tricks to get the most out of your space.",
            sections: [
                {
                    heading: "Packing Like a Pro",
                    content: "Always label boxes on the side, not the top. Use smaller boxes for heavy items like books. Wrap dishes individually."
                },
                {
                    heading: "Preparing Furniture",
                    content: "Empty all drawers. Disassemble legs if possible to save space and prevent damage. Clean and dry appliances before storage."
                }
            ]
        },
        "prohibited-items": {
            title: "Prohibited Items",
            subtitle: "For the safety of all customers, the following items are strictly prohibited.",
            sections: [
                {
                    heading: "Dangerous Goods",
                    content: [
                        "- Explosives, fireworks, or ammunition.",
                        "- Flammable liquids (gasoline, paint thinner, kerosene).",
                        "- Corrosives or toxic chemicals."
                    ]
                },
                {
                    heading: "Perishables & Living Things",
                    content: [
                        "- No food (unless canned/sealed effectively, but strongly discouraged due to pests).",
                        "- No plants or animals.",
                        "- No damp or wet items (mold risk)."
                    ]
                },
                {
                    heading: "Illegal Items",
                    content: "Stolen goods, illegal drugs, or strictly regulated items."
                }
            ]
        }
    },
    company: {
        about: {
            title: "About Spare",
            subtitle: "We are a technology company solving physical storage problems.",
            sections: [
                {
                    heading: "Our Mission",
                    content: "To make urban living more spacious and flexible by turning storage into a seamless utility, like electricity or water."
                },
                {
                    heading: "The Story",
                    content: "Founded in 2024, Spare noticed self-storage was broken: inconvenient locations, confusing contracts, and rigid units. We built a valet model powered by AI to fix it."
                }
            ]
        },
        careers: {
            title: "Careers at Spare",
            subtitle: "Build the future of logistics and space."
            , sections: [
                {
                    heading: "Open Positions",
                    content: "We are currently hiring for: Full Stack Engineers, Logistics Coordinators, and Driver Partners. Check our LinkedIn for details."
                },
                {
                    heading: "Culture",
                    content: "We value autonomy, obsession with customer experience, and operational excellence."
                }
            ]
        },
        blog: {
            title: "Spare Blog",
            subtitle: "Updates and stories from the team.",
            sections: [
                {
                    heading: "Latest Posts",
                    content: [
                        "**The Future of Urban Logistics**: How AI is reducing dead miles.",
                        "**Decluttering for Mental Health**: Why space matters.",
                        "**New Feature**: Introducing Video Inventory."
                    ]
                }
            ]
        }
    },
    legal: {
        privacy: {
            title: "Privacy Policy",
            subtitle: "How we collect, use, and protect your data.",
            sections: [
                {
                    heading: "Data Collection",
                    content: "We collect information you provide (name, address) and photo data of stored items to generate your inventory."
                },
                {
                    heading: "Data Usage",
                    content: "Your data is used solely to provide the service, process payments, and improve our AI models (anonymized)."
                },
                {
                    heading: "Security",
                    content: "We use AES-256 encryption for data at rest and TLS for data in transit."
                }
            ]
        },
        terms: {
            title: "Terms of Service",
            subtitle: "The agreement between you and Spare Storage.",
            sections: [
                {
                    heading: "Service Scope",
                    content: "Spare provides pickup, storage, and return services. We are not a traditional self-storage rental agency; you do not rent a specific room."
                },
                {
                    heading: "Liability",
                    content: "Our liability is limited to $0.60 per pound per item unless additional insurance is purchased."
                },
                {
                    heading: "Payments",
                    content: "Storage fees are billed monthly in advance. Late fees apply after 5 days of non-payment."
                }
            ]
        }
    }
}
