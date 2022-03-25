import { Document } from 'mongoose';

export interface UserDocument extends Document {
    isAdmin: boolean;
    firstName: string;
    lastName: string;
    email: string;
    firebaseId: string;
}
