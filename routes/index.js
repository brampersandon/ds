var express = require('express');
var router = express.Router();
var sign = 'sign text';
var head = 'header text';
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {title: sign, header: head});
});
/* GET new sign page. */
router.get('/new', function(req, res) {
	  res.render('new', { title: sign});
});
/* POST new sign text */
router.post('/newsignpost', function(req, res) {
	sign = req.body.new;
	head = req.body.header;
	console.log(sign+'\n'+head);
	res.redirect('/');
});
module.exports = router;
