import { PrismaClient } from '../generated/prisma/index.js'
import type { Book } from '../generated/prisma/index.js';
import type { bookRepositoryInterface } from './bookRepositoryInterface.js';

export class PrismaBookRepository implements bookRepositoryInterface {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async create(title: string): Promise<Book> {
        return await this.prisma.book.create({
            data: {
                title,
                isAvailable: true,  
            }
        });
    }

    async findById(id: string): Promise<Book | null> {
        return await this.prisma.book.findUnique({
            where: {
                id,
            }
        });
    }
}