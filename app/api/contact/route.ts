import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Contact from "@/models/Contact";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { firstName, lastName, email, phone, message } = body;

        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        await dbConnect();

        const contact = await Contact.create({
            firstName,
            lastName,
            email,
            phone,
            message,
        });

        return NextResponse.json({ success: true, contact }, { status: 201 });
    } catch (error) {
        console.error("Contact submission error:", error);
        return NextResponse.json({ error: "Failed to submit inquiry" }, { status: 500 });
    }
}
