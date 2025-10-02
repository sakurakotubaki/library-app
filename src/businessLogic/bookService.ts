import { PrismaBookRepository } from "../dataAccess/prismaBookRepository.js";
import type { Book } from "../generated/prisma/index.js";

export class BookService {
    private bookRepository: PrismaBookRepository;

    constructor() {
        this.bookRepository = new PrismaBookRepository();
    }

    async add(title: string): Promise<Book> {
        return await this.bookRepository.create(title);
    }

    async findById(id: string): Promise<Book | null> {
        return await this.bookRepository.findById(id);
    }
}