import { Document } from 'mongoose';
import { OrganizationDocument } from '../Organization';
import { PaymentPlanDocument } from '../PaymentPlan';

export interface AmbassadorDocument extends Document {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    organizationId: string | OrganizationDocument;
    paymentPlanId: string | PaymentPlanDocument;
    skipNextPayment: boolean;
    address: Address;
}

export interface Address {
    street1: string;
    city: string;
    state: string;
    zip: string;
    country: string;
}
