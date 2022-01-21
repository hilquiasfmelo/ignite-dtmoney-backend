import { prisma } from '../../../../shared/databases/PrismaClient';

export class ListTransactionsService {
  async execute() {
    const transactions = await prisma.transactions.findMany({
      select: {
        id: true,
        title: true,
        value: true,
        type: true,
        category: true,
        created_at: true,
      },
    });

    return transactions;
  }
}
