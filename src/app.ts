import express from 'express';
import { BookController } from './presentation/bookController.js';
import { BookService } from './businessLogic/bookService.js';
import { PrismaBookRepository } from './dataAccess/prismaBookRepository.js';

const app = express();

app.use(express.json());

const bookRepository = new PrismaBookRepository();
const bookService = new BookService(bookRepository);
const bookController = new BookController(bookService);

const PORT = process.env.PORT || 3000;

app.post('/books', (req, res) => bookController.add(req, res));
app.get('/books/:id', (req, res) => bookController.findById(req, res));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});