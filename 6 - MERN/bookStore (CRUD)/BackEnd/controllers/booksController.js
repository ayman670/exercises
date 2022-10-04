const { findById } = require("../models/book");
const Book = require("../models/book");
let CRUD = {};

CRUD.getAllBooks = async (req, res, next) => {
    //This controller will provide all of the books
    let books;
    try {
        books = await Book.find();
    } catch (e) {
        console.log(e);
    }

    if (!books) {
        return res.status(404).json({ message: "there is no books in store" });
    }
    return res.status(200).json({ books });
};

CRUD.addBooks = async (req, res, next) => {
    let book;
    let {  name, author, description, price, available, image } = req.body;
    try {
        book = await new Book({
            name,
            author,
            description,
            price,
            available,
            image
        });
        await book.save();
    } catch (e) {
        console.log(e);
    }

    if (!book) {
        return res.status(404).json({ message: "Unable to add" });
    }
    return res.status(200).json({ book });
};

CRUD.getById = async (req, res, next) => {
    let book;
    let id = req.params.id;
    try {
        book = await Book.findById(id);
    } catch (e) {
        console.log(e);
    }

    if (!book) {
        return res.status(404).json({ message: "No book found" });
    }
    return res.status(200).json({ book });
};

CRUD.updateBook = async (req, res, next) => {
    let book;
    let id = req.params.id;
    let { name, author, description, price, available, image } = req.body;
    try {
        book = await Book.findByIdAndUpdate(id, {
            name,
            author,
            description,
            price,
            available,
            image
        });
        book = await book.save();
    } catch (e) {
        console.log(e);
    }

    if (!book) {
        return res.status(404).json({ message: "Unable update by this idddd" });
    }
    return res.status(200).json({ book });
};



CRUD.deleteBook = async (req, res, next) => {
    let book;
    let id = req.params.id;
    try {
        book = await Book.findByIdAndRemove(id);
    } catch (e) {
        console.log(e);
    }

    if (!book) {
        return res.status(404).json({ message: "Unable delete by this id" });
    }
    return res.status(200).json("deleted");
};



module.exports = CRUD;
