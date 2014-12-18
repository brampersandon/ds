// allowOnly.js
// a module to only allow localhost access to this page. change as needed to grant other hosts access.
function kill(host, res){
	res.end();
	console.log('request killed from' + host)
}
module.exports = function allowOnly(hostsToAllow){
	return function(req,res,next){
		var host;
		if (req.headers.host){
			host = req.headers.host.split(':')[0];
			if (hostsToAllow.indexOf(host)>-1){ // if host is in hostsToAllow, let's go!
				next();
			}
			else {
				kill(req, res);
			}
		}
		else {
			kill(req,res);
		}
	}
}