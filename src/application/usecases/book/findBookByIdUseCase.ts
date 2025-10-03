import type { bookRepositoryInterface } from "../../../domain/repository/bookRepositoryInterface.js";
import type { FindBookByIdRequestDto } from "../../dtos/book/findBookByIdRequestDto.js";
import type { FindBookByIdResponseDto } from "../../dtos/book/findBookByIdResponseDto.js";
import type { FindBookByIdUseCaseInterface } from "./findByBookIdUsecaseInterface.js";

export class FindBookByIdUseCase implements FindBookByIdUseCaseInterface {
    constructor(private readonly bookRepository: bookRepositoryInterface) {}

    async execute(requestDto: FindBookByIdRequestDto): Promise<FindBookByIdResponseDto | null> {
        const foundBook = await this.bookRepository.findById(requestDto.id);
        if(!foundBook) {
            return null;
        }

        return {
            id: foundBook.id,
            title: foundBook.title,
            isAvailable: foundBook.isAvailable,
            createdAt: foundBook.createdAt,
            updatedAt: foundBook.updatedAt,
        }
    }
}