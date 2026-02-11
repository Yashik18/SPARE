import mongoose, { Schema, Document } from "mongoose";

export interface IContact extends Document {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
    status: "new" | "read" | "responded";
    createdAt: Date;
}

const ContactSchema = new Schema<IContact>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    message: { type: String, required: true },
    status: { type: String, enum: ["new", "read", "responded"], default: "new" },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Contact || mongoose.model<IContact>("Contact", ContactSchema);
