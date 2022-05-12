const router = require('express').Router();

router.post('/register', require('../controllers/user/registerUser'))

module.exports = router;