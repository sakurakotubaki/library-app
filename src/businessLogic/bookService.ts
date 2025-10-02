import type { bookRepositoryInterface } from "../dataAccess/bookRepositoryInterface.js";
import type { Book } from "../generated/prisma/index.js";
import type { BookServiceInterface } from "./bookServiceInterface.js";

export class BookService implements BookServiceInterface {
    // 外部からprismaBookRepositoryを注入できるようにする
    constructor(private readonly bookRepository: bookRepositoryInterface) {
    }

    async add(title: string): Promise<Book> {
        return await this.bookRepository.create(title);
    }

    async findById(id: string): Promise<Book | null> {
        return await this.bookRepository.findById(id);
    }
}