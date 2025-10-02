import type { Request, Response } from "express";
import { BookService } from "../businessLogic/bookService.js";
import type { BookServiceInterface } from "../businessLogic/bookServiceInterface.js";

export class BookController {
    

    constructor(private readonly bookService: BookServiceInterface) {}

    async add(req: Request, res: Response): Promise<void> {
        try {
          const title = req.body.title as string;
          const book = await this.bookService.add(title);
          res.status(201).json(book);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    async findById(req: Request, res: Response): Promise<void> {
        try {
          const id = req.params.id as string;
          const book = await this.bookService.findById(id);
          if(book) {
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