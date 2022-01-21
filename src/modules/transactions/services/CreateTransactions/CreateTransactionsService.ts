import { Transactions } from '@prisma/client';
import { prisma } from '../../../../shared/databases/PrismaClient';

import { ICreateTransactionsDTO } from '../../dtos/ICreateTransactionsDTO';

export class CreateTransactionsService {
  async execute({
    title,
    value,
    type,
    category,
  }: ICreateTransactionsDTO): Promise<Transactions> {
    try {
      const transaction = await prisma.transactions.create({
        data: {
          title,
          value,
          type,
          category,
        },
      });

      console.log(transaction);

      return transaction;
    } catch (err) {
      throw new Error('Error creating transaction');
    }
  }
}
