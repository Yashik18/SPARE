import { auth } from "@/auth";
import dbConnect from "@/lib/db";
import Order from "@/models/Order";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const session = await auth();
        if (!session || !session.user?.email) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await req.json();
        const { unitSize, unitType, durationDays, packaging, pickupDate, pickupAddress, totalCost } = body;

        await dbConnect();

        const newOrder = await Order.create({
            userEmail: session.user.email,
            unitSize,
            unitType,
            durationDays,
            packaging,
            pickupDate,
            pickupAddress,
            totalCost,
            status: "pending",
        });

        return NextResponse.json(newOrder, { status: 201 });
    } catch (error) {
        console.error("Error creating order:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function GET(req: Request) {
    try {
        const session = await auth();
        if (!session || !session.user?.email) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        await dbConnect();
        // Return latest orders first
        const orders = await Order.find({ userEmail: session.user.email }).sort({ createdAt: -1 });

        return NextResponse.json(orders);
    } catch (error) {
        console.error("Error fetching orders:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
