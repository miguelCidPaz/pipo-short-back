const router = require('express').Router();

//Debe ser post ya que guardaremos el registro de la url, la data vendra en el body
router.post('/shorturl', require('../controllers/url/shorturl'))

module.exports = router;