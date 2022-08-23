const {booksController} = require("../controllers");
const router = require('express').Router();

router.get('/', booksController.allBooks);
router.post('/', booksController.createBook);
router.get('/:id', booksController.bookById);
router.post('/:id', booksController.updateById);

module.exports = router;