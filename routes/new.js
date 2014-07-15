var express = require('express');
var router = express.Router();
var sign
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
/* GET new sign page. */
router.get('/new', function(req, res) {
	  res.render('index', { title: 'Express' });
});
/* POST new sign text */
router.post('/newsignpost', function(req, res) {
	sign = req.body;
	console.log(sign);
	res.render('index', {title: sign});
});
module.exports = router;
