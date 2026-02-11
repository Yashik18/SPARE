import { auth } from "@/auth"
import dbConnect from "@/lib/db"
import User from "@/models/User"
import { NextResponse } from "next/server"

export async function PUT(req: Request) {
    try {
        const session = await auth()
        if (!session?.user?.email) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        const data = await req.json()
        await dbConnect()

        const user = await User.findOneAndUpdate(
            { email: session.user.email },
            {
                phone: data.phone,
                address: data.address,
                city: data.city,
                state: data.state,
                zip: data.zip,
                country: data.country,
                name: data.name
            },
            { new: true }
        )

        return NextResponse.json({ success: true, user })
    } catch (error) {
        console.error("Profile update error:", error)
        return NextResponse.json({ error: "Failed to update profile" }, { status: 500 })
    }
}
