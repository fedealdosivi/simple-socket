var express = require ('express'); 
var app = express();
var server = require('http').Server(app);
client = require('socket.io-client');

socket = client.connect('http://127.0.0.1:7574',{ secure: true, 'force new connection': true , reconnection: true});



setInterval(function(){
	socket.emit("chat_message",function(callback){
		console.log(callback.enviado , 'enviando callback');
	})

	socket.emit("comoteva",function(callback){
		console.log(callback);
	})	
},1000);

