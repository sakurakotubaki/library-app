import { Router } from "express";
import type { BookController } from "../../../adapter/controller/bookController.js";

export function bookRoutes(bookController: BookController): Router {
    const router = Router();

    router.post('/', (req, res) => bookController.add(req, res));
    router.get('/:id', (req, res) => bookController.findById(req, res));
    return router;
}