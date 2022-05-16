const userExtractor = require('../middlewares/userExtractor')
const router = require('express').Router();

//Debe ser post ya que guardaremos el registro de la url, la data vendra en el body
router.post('/shorturl', require('../controllers/url/shorturl'))
router.post('/geturl', require('../controllers/url/geturl'))
router.get('/getallurls', userExtractor, require('../controllers/url/getallurls'))
router.get('/getdetail/:code', userExtractor, require('../controllers/url/getdetail'))

module.exports = router;