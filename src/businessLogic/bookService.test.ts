import { jest, describe, it, expect, beforeEach, afterEach } from '@jest/globals';
import type { bookRepositoryInterface } from "../domain/repository/bookRepositoryInterface.js";
import { BookService } from "./bookService.js";

const mockBookRepository: jest.Mocked<bookRepositoryInterface> = {
    create: jest.fn(),
    findById: jest.fn(),
};

describe('BookService', () => {
    let bookService: BookService;

    beforeEach(() => {
        bookService = new BookService(mockBookRepository);
        jest.clearAllMocks();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('書籍の登録が成功すること', async () => {
        const newBook = { id: '1', title: 'Test Book', isAvailable: true, createdAt: new Date(), updatedAt: new Date() };
        mockBookRepository.create.mockResolvedValue(newBook);

        const result = await bookService.add('Test Book');

        expect(result).toEqual(newBook);
        expect(mockBookRepository.create).toHaveBeenCalledWith('Test Book');
    });
});