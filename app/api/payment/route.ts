import { auth } from "@/auth";
import dbConnect from "@/lib/db";
import Order from "@/models/Order";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const session = await auth();
        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { orderId } = await req.json();

        if (!orderId) {
            return NextResponse.json({ error: "Order ID is required" }, { status: 400 });
        }

        await dbConnect();

        const order = await Order.findById(orderId);

        if (!order) {
            return NextResponse.json({ error: "Order not found" }, { status: 404 });
        }

        // Verify the order belongs to the user
        if (order.userEmail !== session.user?.email) {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        order.status = "pickup_scheduled";
        await order.save();

        return NextResponse.json({ success: true, order });
    } catch (error) {
        console.error("Error processing payment:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
