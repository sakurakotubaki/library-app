import { Book } from "../../../domain/entities/book.js";
import type { bookRepositoryInterface } from "../../../domain/repository/bookRepositoryInterface.js";
import type { idGeneratorInterface } from "../../../domain/utils/idGeneratorInterface.js";
import type { AddBookRequestDto } from "../../dtos/book/addBookRequestDto.js";
import type { AddBookResponseDto } from "../../dtos/book/addBookResponseDto.js";
import type { AddBookUseCaseInterface } from "./addBookUseCaseInterface.js";

export class AddBookUseCase implements AddBookUseCaseInterface {
    constructor(
        private readonly bookRepository: bookRepositoryInterface,
        private readonly idGenerator: idGeneratorInterface
    ) {}

    async execute(requestDto: AddBookRequestDto): Promise<AddBookResponseDto> {
        const id = this.idGenerator.generate();
        const newBook = new Book(id, requestDto.title);

        const createdBook = await this.bookRepository.create(newBook);

        return {
            id: createdBook.id,
            title: createdBook.title,
            isAvailable: createdBook.isAvailable,
            createdAt: createdBook.createdAt,
            updatedAt: createdBook.updatedAt,
        };
    }
}