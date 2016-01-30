function say(word){
	console.log(word);
}

function execute(inputFunction, value){
	inputFunction(value);
}

execute(say, "Hello world");
