const {bookService} = require("../services");

module.exports = {
    allBooks: async (req, res, next) => {
        try {
            const books = await bookService.findAllBooks();

            res.json(books);
        } catch (e) {
            next(e);
        }
    },
    bookById: async (req, res, next) => {
        try {
            const {id} = req.params;
            const books = await bookService.findBookById({_id: id});

            res.json(books);
        } catch (e) {
            next(e);
        }
    },
    createBook: async (req, res, next) => {
        try {
            const count = await bookService.count();
            const newBook = await bookService.createBook({...req.body, idProduct: count + 1});

            res.status(201).json(newBook);

        } catch (e) {
            next(e);
        }
    },
    updateById: async (req, res, next) => {
        try{
            const {id} = req.params;

            const updatedBook = await bookService.updateById({_id:id}, req.body);

            res.status(201).json(updatedBook);
        }catch (e) {
            next(e);
        }
    },
}