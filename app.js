/* importar as configurações do servidor */
var app = require('./config/server');
const PORT = process.env.PORT || 5000;

/* parametrizar a porta de escuta */
app.listen(PORT, function(){
	console.log('Servidor online');
});
