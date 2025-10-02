import type { Book } from "../generated/prisma/index.js";

export interface bookRepositoryInterface {
    create(title: string): Promise<Book>;
    findById(id: string): Promise<Book | null>;
}