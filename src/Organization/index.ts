import { Document } from 'mongoose';

export interface OrganizationDocument extends Document {
    name: string;
    secretKey: string;
    publishableApiKey: string;
    stripeCustomerId: string;
}
