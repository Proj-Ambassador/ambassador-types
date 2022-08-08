import { Document } from 'mongoose';
import { OrganizationDocument } from '../Organization';
import { TierDocument } from '../Tier';

export interface PaymentPlanDocument extends Document {
    name: string;
    isFixedAmount: boolean;
    isVariableAmount: boolean;
    fixedAmount: number;
    isWebhook: boolean;
    webhookUrl: string;
    organizationId: string | OrganizationDocument;
    lastExecuted: Date;
    nextScheduledTimeToBeExecuted: Date;
    dayFrequency: number;
    isActive: boolean;
    tiers?: TierDocument[]; // will exist depending on the endpoint
}
