const app = require('express')();
const bodyParser  = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./app/controllers/index')(app);

app.listen(3000, function(){
    console.log('Server started...');    
})