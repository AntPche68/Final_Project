const router = new require('express')();
const {findBooks} = require('../controllers/controller');

router.get('./books', findBooks);





module.exports = router