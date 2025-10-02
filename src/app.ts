import express from 'express';
import { BookController } from './presentation/bookController.js';

const app = express();

app.use(express.json());

const bookController = new BookController();

const PORT = process.env.PORT || 3000;

app.post('/books', (req, res) => bookController.add(req, res));
app.get('/books/:id', (req, res) => bookController.findById(req, res));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});