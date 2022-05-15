const userExtractor = require('../middlewares/userExtractor')
const router = require('express').Router();

router.post('/register', require('../controllers/user/registerUser'))
router.post('/login', require('../controllers/user/login'))
router.get('/recover', userExtractor, require('../controllers/user/recover'))

module.exports = router;