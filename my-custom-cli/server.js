// console.log("namaskar bhai");

const add=require("./addi");
const sum=add(1,2);
console.log(sum);


// function greet(name){
//     console.log(`hello ${name}`);
// }

// function greetVishwas(greetFn){
//     const name="tejas";
//     greetFn(name);
// }
// greetVishwas(greet);




// const http = require('http');

// // Create a server object
// http.createServer(function (req, res) {
	
// 	// http header
// 	res.writeHead(200, {'Content-Type': 'text/html'});
	
// 	const url = req.url;
	
// 	if(url ==='/about') {
// 		res.write(' Welcome to about us page');
// 		res.end();
// 	}
// 	else if(url ==='/contact') {
// 		res.write(' Welcome to contact us page');
// 		res.end();
// 	}
// 	else {
// 		res.write('Hello World!');
// 		res.end();
// 	}
// }).listen(3000, function() {
	
// 	// The server object listens on port 3000
// 	console.log("server start at port 3000");
// });


