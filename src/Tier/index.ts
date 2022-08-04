import { Document } from 'mongoose';

import { PaymentPlanDocument } from '../PaymentPlan';

export interface TierDocument extends Document {
    type: string;
    minThreshold: number;
    maxThreshold: number;
    rewardAmount: number;
    rewardDistributedInterval: number;
    paymentPlanId: string | PaymentPlanDocument;
}
