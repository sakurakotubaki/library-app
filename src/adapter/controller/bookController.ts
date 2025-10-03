import type { Request, Response } from "express";
import type { AddBookUseCaseInterface } from "../../application/usecases/book/addBookUseCaseInterface.js";
import type { AddBookRequestDto } from "../../application/dtos/book/addBookRequestDto.js";
import type { FindBookByIdUseCaseInterface } from "../../application/usecases/book/findByBookIdUsecaseInterface.js";
import type { FindBookByIdRequestDto } from "../../application/dtos/book/findBookByIdRequestDto.js";

export class BookController {
    constructor(
      private readonly addBookUseCase: AddBookUseCaseInterface,
      private readonly findBookByIdUseCase: FindBookByIdUseCaseInterface,
    ) {}

    async add(req: Request, res: Response): Promise<void> {
        try {
          const requestDto: AddBookRequestDto = {
            title: req.body.title,
          };
          const book = await this.addBookUseCase.execute(requestDto);
          res.status(201).json(book);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    async findById(req: Request, res: Response): Promise<void> {
        try {
          const id = req.params.id;
          if (!id) {
            res.status(400).json({ message: 'IDが指定されていません' });
            return;
          }

          const requestDto: FindBookByIdRequestDto = {
            id: id,
          };
          const book = await this.findBookByIdUseCase.execute(requestDto);
          if (book) {
            res.status(200).json(book);
          } else {
            res.status(404).json({ message: '書籍が見つかりません' });
          }
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: '書籍の検索に失敗しました' });
        }
    }
}