import { Document } from 'mongoose';
import { AmbassadorDocument } from '../Ambassador';
import { OrganizationDocument } from '../Organization';

export interface ReferralDocument extends Document {
    organizationId: string | OrganizationDocument;
    ambassadorId: string | AmbassadorDocument;
}
