var express =  require('express');

module.exports = function(){
	var app = express();

	//Configuração ambiente
	app.set('port','3000');
	app.set('view engine','ejs');
	app.set('views','./app/views');
	
    app.use(express.static('./public'));

	return app;	
};


