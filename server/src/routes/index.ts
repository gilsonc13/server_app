import { Router, json } from 'express';
import companiesRouter from './companies.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import customersRouter from './customers.routes';

const routes = Router();

routes.use(json());
routes.use('/companies', companiesRouter);
routes.use('/users', usersRouter);
routes.use('/customers', customersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
