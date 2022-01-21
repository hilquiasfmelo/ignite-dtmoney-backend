import { Request, Response } from 'express';
import { ListTransactionsService } from './ListTransactionsService';

export class ListTransactionsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listTransactions = new ListTransactionsService();

    const transactions = await listTransactions.execute();

    return response.status(200).json(transactions);
  }
}
