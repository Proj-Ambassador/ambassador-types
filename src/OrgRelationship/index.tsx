import { Document } from 'mongoose';
import { OrganizationDocument } from '../Organization';
import { UserDocument } from '../User';

export interface OrgRelationshipDocument extends Document {
    userId: string | UserDocument;
    organizationId: string | OrganizationDocument;
}
