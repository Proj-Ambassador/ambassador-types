import { Document } from 'mongoose';
import { AmbassadorDocument } from '../Ambassador';
import { OrganizationDocument } from '../Organization';
import { PaymentPlanDocument } from '../PaymentPlan';

export interface PayoutDocument extends Document {
    organizationId: string | OrganizationDocument;
    toAmbassadorId: string | AmbassadorDocument;
    paymentPlanId: string | PaymentPlanDocument;
    amount: number;
    wasSuccessful: boolean;
}
