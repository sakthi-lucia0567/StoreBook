import express from "express";
import { books } from "../controllers/book.js";
import { getAllBooks } from "../controllers/book.js";
import { getBooksById } from "../controllers/book.js";
import { updateBooksById } from "../controllers/book.js";
import { deleteBooksById } from "../controllers/book.js";

const router = express.Router();

//Routes to save a new book
router.post("/save", books);

//Routes to get all book
router.get("/all", getAllBooks);

//Routes to Get book by id
router.get("/all/:id", getBooksById);

//Routes to update a book
router.put("/update/:id", updateBooksById);

//Routes to delete a book
router.delete("/delete/:id", deleteBooksById);

export default router;
