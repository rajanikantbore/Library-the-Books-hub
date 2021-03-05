const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const authMiddleware = require('../middlewares/authMiddleware');
const Book = require('../models/Book');

const bookRouter = express.Router();


bookRouter.post('/', expressAsyncHandler(async (req, res) => {
    const book = await Book.create(req.body);

    if (book) {
        res.status(200);
        res.json(book)
    } else {
        res.status(500);
        throw new Error('Book creating failed');
    }
})
);

bookRouter.get('/', expressAsyncHandler(async (req, res) => {
    const book = await Book.find(req.body);

    if (book) {
        res.status(200);
        res.json(book)
    } else {
        res.status(500);
        throw new Error('There are no books found');
    }
})
);

bookRouter.put('/:id',
    authMiddleware,
    expressAsyncHandler(async (req, res) => {
        const book = await Book.findById(req.params.id);

        if (book) {
            const updatedBook = await Book.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true,
                    runValidators: true,
                }
            );
            res.status(200);
            res.json(updatedBook);
        } else {
            res.status(500);
            throw new Error('Updatate failed');
        }
    })
);

bookRouter.delete('/:id', expressAsyncHandler(async (req, res) => {
    try {
        const book = await Book.findOneAndDelete(req.params.id);

        res.status(200);
        res.send(200);
    } catch (error) {
        res.json(error);
    }
})
);

module.exports = bookRouter;