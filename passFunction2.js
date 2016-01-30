function execute(inputFunction, value){
	inputFunction(value);
}

execute(function(word) { console.log(word)}, "Hello world");
