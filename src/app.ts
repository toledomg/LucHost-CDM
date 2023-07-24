import 'reflect-metadata';
import 'express-async-errors';
import express, { Application } from 'express';
import { userRoutes } from './routes/users/user.routes';
import { sessionRoutes } from './routes/users/userLogin.routes';
import { handleErrors } from './errors/error';

const app: Application = express();

app.use(express.json());

app.use('/users', userRoutes);
app.use('/login', sessionRoutes);

app.use(handleErrors);

export default app;