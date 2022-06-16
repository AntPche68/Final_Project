const {Book} = require('../models/models');

class Controller {
    async findBooks(req, res){
        const books = await Book.findAll();
        return res.send(books)
    }
}

module.exports = new Controller();