import 'dotenv/config';
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import routes from './routes/routes';
import { ExternalUser } from '@empowering-people-more/encompass-api-wrapper'

const app: express.Application = express();
const port: number = Number(process.env.SERVER_PORT);
const env: string = process.env.NODE_ENV || 'undefined';

app.use(express.json());
app.use('/api', routes);

const user: any = {
    "firstName": "sathish GAJULA",
    id: '',
    useCompanyAddress: false,
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    email: '',
    nmlsId: '',
    nmlsCurrent: false,
    useParentInfoForRateLock: false,
    disabledLogin: false,
    emailForLogin: '',
    passwordChangedDate: '',
    welcomeEmailSent: '',
    welcomeEmailDate: '',
    siteUrls: [],
    addToWatchlist: false,
    salesRep: {
        entityId: '',
        entityType: 'User'
    },
    personas: [],
    roles: [],
    designatedRoles: [],
    peerLoanAccess: 'Disabled',
    accessMode: 'ReadOnly',
    licenses: [],
    roleTypes: [],
    requirePasswordChange: false,
    lastLogin: '',
    updatedBy: {
        entityId: '',
        entityType: 'User'
    },
    createdBy: {
        entityId: '',
        entityType: 'User'
    },
    updatedDateTime: '',
    organization: {
        entityId: '',
        entityType: 'Organization',
        entityName: '',
        entityUri: undefined,
        tpoId: undefined
    }
};

app.get('/', (req: Request, res: Response): void => {
    res.send('Hello, My-Express-Api ' + user.firstName + '!');
});

app.listen(port, (): void => {
    console.log(`Server is running on port ${port}`);
    console.log(`Server is running on env ${env}`);
});