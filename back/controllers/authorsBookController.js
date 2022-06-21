const { Book } = require("../models/models");


class authorsBookController {

    async getAll(req, res) {
        const books = await Book.findAll();
        return res.send(books);
    }
}

module.exports = new authorsBookController();