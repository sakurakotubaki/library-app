import express from 'express';
import { PrismaClient } from '../../generated/prisma/index.js';
import { UuidGenerator } from '../../adapter/utils/uuidGenerator.js';
import { PrismaBookRepository } from '../../adapter/repository/prismaBookRepository.js';
import { AddBookUseCase } from '../../application/usecases/book/addBookUseCase.js';
import { FindBookByIdUseCase } from '../../application/usecases/book/findBookByIdUseCase.js';
import { bookRoutes } from './routers/bookRouter.js';
import { BookController } from '../../adapter/controller/bookController.js';

const app = express();

app.use(express.json());

const prisma = new PrismaClient();
const uuidGenerator = new UuidGenerator();

const bookRepository = new PrismaBookRepository(prisma);
const addBookUseCase = new AddBookUseCase(bookRepository, uuidGenerator);
const findBookByIdUseCase = new FindBookByIdUseCase(bookRepository);

const bookController = new BookController(addBookUseCase, findBookByIdUseCase);

app.use('/books', bookRoutes(bookController));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});