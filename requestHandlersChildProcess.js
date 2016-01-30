var exec = require("child_process").exec;

function start(response){
//function start(){
	console.log(`Request handler 'start' was called.`);
	/*
 	exec("ls -lah", function (error, stdout, stderr){
	  response.writeHead(200, { 'Content-Type': 'text/plain' });
		response.write(stdout);
		response.end();
	});
	*/
 	exec('find /', { timeout: 100000, maxBuffer: 1980*1024}, 
	function (error, stdout, stderr){
	  response.writeHead(200, { 'Content-Type': 'text/plain' });
		response.write(stdout);
		response.end();
	});
 	/*
	var content = "empty";
	exec("ls -lah", function(error, stdout, stderr){
		content = stdout;	 
	});

	return content;
	*/
}

function upload(response){
	console.log(`Request handler 'upload' was called.`);

	//return "Hello Upload";
	response.writeHead(200, { 'Content-Type': 'text/plain' });
	response.write("Hello Upload");
	response.end();
}

exports.start = start;
exports.upload = upload;
