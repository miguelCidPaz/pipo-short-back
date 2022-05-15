const userExtractor = require('../middlewares/userExtractor')
const router = require('express').Router();

router.post('/register', require('../controllers/user/registerUser'))
router.get('/login', require('../controllers/user/login'))

module.exports = router;