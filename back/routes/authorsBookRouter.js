const Router = require("express");
const router = new Router();

const { getAll } = require('../controllers/authorsBookController');

router.get("/all", getAll);

module.exports = router;