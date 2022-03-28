import { Document } from 'mongoose';
import { OrganizationDocument } from '../Organization';

export interface UserDocument extends Document {
    isAdmin: boolean;
    firstName: string;
    lastName: string;
    email: string;
    firebaseId: string;
    organizationId: OrganizationDocument | string;
}
