import { Router } from 'express';
import { CreateTransactionsController } from '../../modules/transactions/services/CreateTransactions/CreateTransactionsController';
import { ListTransactionsController } from '../../modules/transactions/services/ListTransactions/ListTransactionsController';

export const routes = Router();

routes.get('/transactions', new ListTransactionsController().handle);
routes.post('/transactions', new CreateTransactionsController().handle);
