import mongoose, { Schema, Document } from 'mongoose';

export interface IOrder extends Document {
    userEmail: string; // Link to user by email just in case
    unitSize: number;
    unitType: string;
    durationMonths: number;
    packaging: boolean;
    pickupDate: Date;
    totalCost: number;
    status: 'pending' | 'confirmed' | 'active' | 'completed';
    createdAt: Date;
}

const OrderSchema = new Schema<IOrder>({
    userEmail: { type: String, required: true },
    unitSize: { type: Number, required: true },
    unitType: { type: String, required: true },
    durationMonths: { type: Number, required: true },
    packaging: { type: Boolean, default: false },
    pickupDate: { type: Date },
    totalCost: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'confirmed', 'active', 'completed'], default: 'pending' },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Order || mongoose.model<IOrder>('Order', OrderSchema);
