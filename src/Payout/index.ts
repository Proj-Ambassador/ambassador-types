import { Document } from 'mongoose';
import { AmbassadorDocument } from '../Ambassador';
import { OrganizationDocument } from '../Organization';
import { PaymentPlanDocument } from '../PaymentPlan';

export interface PayoutDocument extends Document {
    organizationId: string | OrganizationDocument;
    toAmbassadorId: string | AmbassadorDocument | null;
    paymentPlanId: string | PaymentPlanDocument | null;
    amount: number;
    wasSuccessful: boolean;
    errorMsg?: string;
    stripeChargeId?: string;
    toName: string;
}
