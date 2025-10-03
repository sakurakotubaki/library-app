import { Book } from "../entities/book.js";

export interface bookRepositoryInterface {
    create(book: Book): Promise<Book>;
    // findById(id: string): Promise<Book | null>;
}