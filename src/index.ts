import 'dotenv/config';
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import routes from './routes/routes';

require('dotenv').config();

const app: express.Application = express();
const port: number = Number(process.env.SERVER_PORT);
const env: string = process.env.NODE_ENV || 'undefined';

app.use(express.json());
app.use('/api', routes);
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
console.log('process.env.SERVER_PORT', process.env.SERVER_PORT);
console.log('process.env.ENV_NAME', process.env.ENV_NAME);

app.get('/', (req: Request, res: Response): void => {
    //console.log('process.env', process.env);
    res.send('Hello, My-Vanila-Api!');
});

app.listen(port, (): void => {
    // console.log('process.env', process.env);
    console.log(`Server1 is running on port ${port}`);
    console.log(`Server1 is running on env ${env}`);
});