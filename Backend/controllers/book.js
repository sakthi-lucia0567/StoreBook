import Book from "../models/bookModel.js";

export const books = async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;

    const newBook = new Book({
      title,
      author,
      publishYear,
    });
    const savedBooks = await newBook.save();
    res.status(201).json({ message: "Book saved", savedBooks });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json({ count: books.length, books });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getBooksById = async (req, res) => {
  try {
    const { id } = req.params;
    const books = await Book.findById(id);
    res.status(200).json({ books });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateBooksById = async (req, res) => {
  try {
    const { id } = req.params;
    const books = await Book.findByIdAndUpdate(id, req.body, { new: true });
    if (!books) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book updated", books });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteBooksById = async (req, res) => {
  try {
    const { id } = req.params;
    const books = await Book.findByIdAndDelete(id);
    if (!books) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted", books });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
