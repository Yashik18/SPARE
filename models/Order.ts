import mongoose, { Schema, Document } from 'mongoose';

export interface IOrder extends Document {
    userEmail: string; // Link to user by email just in case
    unitSize: number;
    unitType: string;
    durationDays: number;
    packaging: boolean;
    pickupDate: Date;
    pickupAddress: string;
    totalCost: number;
    status: 'pending' | 'confirmed' | 'active' | 'completed' | 'pickup_scheduled';
    createdAt: Date;
}

const OrderSchema = new Schema<IOrder>({
    userEmail: { type: String, required: true },
    unitSize: { type: Number, required: true },
    unitType: { type: String, required: true },
    durationDays: { type: Number, required: true },
    packaging: { type: Boolean, default: false },
    pickupDate: { type: Date },
    pickupAddress: { type: String, required: true },
    totalCost: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'confirmed', 'active', 'completed', 'pickup_scheduled'], default: 'pending' },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Order || mongoose.model<IOrder>('Order', OrderSchema);
