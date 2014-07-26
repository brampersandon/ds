var express = require('express');
var router = express.Router();
var sign = new Object(); 
sign.top = 'Welcome to Technology Help!';
sign.bottom =  'Today, we\'re open from 8a until 5p';
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
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
