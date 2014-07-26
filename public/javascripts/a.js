var response; 
function getSign() {
	$.get('/text', function(res) {console.log(response = res)});
	$('#top').html(response.top);
	$('#bottom').html(response.bottom);
}
setInterval(getSign, 6000);
