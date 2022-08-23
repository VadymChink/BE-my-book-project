const {Book} = require("../DB");

module.exports = {
    findAllBooks: (params = {}) => {
        return Book.find(params);
    },
    findBookById: (params = {}) => {
        return Book.findOne(params);
    },
    createBook: (book) => {
        return Book.create(book);
    },
    updateById: (params, dataForUpdate, options = {new: true}) => {
        return Book.findByIdAndUpdate(params, dataForUpdate, options);
    },
    count: () => {
        return Book.count();
    }
}