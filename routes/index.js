var express = require('express');
var router = express.Router();
var sign = new Object(); 
sign.top = 'Welcome to ds!';
sign.bottom =  'go to <a href="/new">/new on this host</a> to change the sign';
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {sign: sign});
});
/* GET new sign page. */
router.get('/new', function(req, res) {
  res.render('new', {sign: sign});
});
/* POST new sign text */
router.post('/signpost', function(req, res) {
	sign.top = req.body.top;
	sign.bottom = req.body.bottom;
	console.log(sign.top+'\n'+sign.bottom);
	res.render('thanks', {sign: sign});
});
/* GET sign text */
router.get('/text', function(req, res) {
	res.send(sign);
	console.log(sign);	
});
module.exports = router;
