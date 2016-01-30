const http = require('http');
const url = require('url');

const hostname = '140.113.225.124';
const port = 8080;

function start(route, handle){
	function onRequest(request, response){
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		var query = url.parse(request.url).query;
		console.log(`Request for ` + pathname + ` received`);

		request.setEncoding("utf8");

		request.addListenser("data", function(postDataChunk){
			postData += postDataChunk;
			console.log("Received POST data chunk '" + postDataChunk + "'.");
		});

		request.addListenser("end", function(){
	 		route(pathname, query, handle, response)
		});
	}

	http.createServer(onRequest).listen(port, hostname, () => {
		console.log(`Server running at http://${hostname}:${port}/`);
	});
}

exports.start = start;
