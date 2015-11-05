var http = require('http');
var app = require('./config/express.js')();

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening  na porta ' +  app.get('port'));
});