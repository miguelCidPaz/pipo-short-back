const userExtractor = require('../middlewares/userExtractor')
const router = require('express').Router();

router.post('/register', require('../controllers/user/registerUser'))
router.get('/login', userExtractor, require('../controllers/user/login'))

module.exports = router;