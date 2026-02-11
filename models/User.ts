import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    email: string;
    name?: string;
    image?: string;
    provider: string; // 'google' or 'credentials'
    phone?: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
    createdAt: Date;
}

const UserSchema = new Schema<IUser>({
    email: { type: String, required: true, unique: true },
    name: { type: String },
    image: { type: String },
    provider: { type: String, default: 'credentials' },
    phone: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    country: { type: String },
    createdAt: { type: Date, default: Date.now },
});

// Prevent model overwrite on hot reload
export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
