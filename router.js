function route(pathname, query, handle, response, postData){
	console.log('About to route a request for pathname: ' + pathname + ', query: ' + query);
	if(typeof handle[pathname] === 'function'){
		//return handle[pathname]();
		handle[pathname](response, postData);
	} else{
		console.log('No request handler found for ' + pathname);
	  response.writeHead(404, { 'Content-Type': 'text/plain' });
		response.write("404 Not Found");
		response.end();
	}
}

exports.route = route;
