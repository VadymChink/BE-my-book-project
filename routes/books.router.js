const {booksController} = require("../controllers");
const router = require('express').Router();

router.get('/', booksController.allBooks);
router.post('/', booksController.createBook);
router.get('/:id', booksController.bookById);
router.put('/:id', booksController.updateById);
router.delete('/:id', booksController.deleteById);

module.exports = router;