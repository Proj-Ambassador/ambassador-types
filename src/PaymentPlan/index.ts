import { Document } from 'mongoose';
import { OrganizationDocument } from '../Organization';

export interface PaymentPlanDocument extends Document {
    name: string;
    isFixedAmount: boolean;
    fixedAmount: number;
    isWebhook: boolean;
    webhookUrl: string;
    organizationId: string | OrganizationDocument;
    lastExecuted: Date;
    nextScheduledTimeToBeExecuted: Date;
    dayFrequency: number;
    isActive: boolean;
}
