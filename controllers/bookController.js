const { MongoDBModels } = require('../models');
const Book = MongoDBModels.Book;

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

const createBook = async (req, res) => {
  const { title, author, description } = req.body;
  try {
    const newBook = await Book.create({ title, author, description });
    res.status(201).json(newBook);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getAllBooks, createBook };
