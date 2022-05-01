import { AmbassadorDocument } from './Ambassador';
import { PaymentPlanDocument } from './PaymentPlan';

export type PaymentInsideBatch = {
    ambassador: AmbassadorDocument;
    amount: number;
};

export type BatchedPayment = {
    paymentPlan: PaymentPlanDocument;
    combinedAmount: number;
    payments: PaymentInsideBatch[];
};
