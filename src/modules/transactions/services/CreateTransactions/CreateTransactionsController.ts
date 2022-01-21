import { Request, Response } from 'express';
import { CreateTransactionsService } from './CreateTransactionsService';

export class CreateTransactionsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, value, type, category, created_at } = request.body;

    const createTransactionsService = new CreateTransactionsService();

    const transaction = await createTransactionsService.execute({
      title,
      value,
      type,
      category,
    });

    return response.status(201).json(transaction);
  }
}
