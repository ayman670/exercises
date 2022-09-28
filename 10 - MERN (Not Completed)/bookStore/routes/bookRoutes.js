const express = require('express');
const router = express.Router();
// const Book = require('../models/book')
const booksController = require('../controllers/booksController');


//showBooks
router.get("/", booksController.getAllBooks);
//addBook
router.post("/", booksController.addBooks);
//findBook
router.get("/:id", booksController.getById);
//updateBook
router.put("/:id", booksController.updateBook);
//deleteBook
router.delete("/:id", booksController.deleteBook);


module.exports = router;