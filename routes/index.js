var express = require('express');
var router = express.Router();
// default text
var sign = {
	top = 'Welcome to ds!',
	bottom =  'go to /new on this site to change the sign'
}
// useful metadata
port = process.env.PORT || 5000;
host = require('os').hostname();
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
	res.render('thanks', {sign: sign, host: host, port:port});
});
/* GET sign text */
router.get('/text', function(req, res) {
	res.send(sign);
	console.log(sign);
});
module.exports = router;
