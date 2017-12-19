const express = require ('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 7574;
app.use(express.static('public'));


server.listen(port, function () {
    console.log('Server listening at port %d', port);
});

io.on('connection', function(socket) {

	socket.on('chat_message', callback => {
		callback({enviado:true});
	});

	socket.on('comoteva',callback =>{
		callback({
			mensaje:'bien',
			adios:'chau'
		})
	})

});

server.listen(port, () => {
  console.log('listening on *:' + port);
});
