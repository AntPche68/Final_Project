const Router = require("express");
const router = new Router();

const { create, getAll } = require('../controllers/authorsBookController');

router.post('/add', create);
router.get('/all', getAll);

module.exports = router;