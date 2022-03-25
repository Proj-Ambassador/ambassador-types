import { Document } from 'mongoose';
import { OrganizationDocument } from '../Organization';

export interface PendingOrgUserInvitationDocument extends Document {
    email: string;
    organizationId: string | OrganizationDocument;
}
